/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next";

import { GET_CATEGORIES, GET_POSTS } from "../../lib/data";
import { client } from "../../lib/apollo";
import { BlogProps, CategoriesProps } from "types/api";

import { BannerInternasComponent } from "@components/bannerInternas";
import { CloseIcon, FilterIcon } from "@components/icons";
import { PostCard } from "@components/postCriacoes";
import { Layout } from "@components/layout/layout";

import { Container } from "@shared/styles";
import * as S from "@shared/pages_styles/criacoes-styles";

interface Props {
  posts: BlogProps[];
  categories: CategoriesProps[];
}

export default function Criacoes({ posts, categories }: Props) {
  const [postsArray, setPostsArray] = useState(posts);
  const [query, setQuery] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const handleCategoryChange = (category, e) => {
    e.preventDefault();
    setOpenFilter(false);

    if (category) {
      setSelectedCategory(`${category.name}`);
    }

    if (category.name === "Todos") {
      setPostsArray(posts);
      setSelectedCategory("Todos");
    } else {
      setPostsArray(
        posts.filter(
          (post) => post.category && post.category.name === category.name
        )
      );
    }
  };

  const handleOpenFilter = () => {
    if (openFilter === false) {
      setOpenFilter(true);
    } else {
      setOpenFilter(false);
    }
  };

  const formatText = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const searchFilter = postsArray.filter((post) => {
    if (formatText(post.title).includes(formatText(query))) {
      return post;
    }
  });

  return (
    <Layout>
      <BannerInternasComponent
        image="/images/webp/banner-paisagem.webp"
        title="Criações"
      />

      <S.CriacoesStyles>
        <div className="filter-bar">
          <Container className="container">
            <div className="bar-wrapper">
              <div className="pesquisa">
                <input
                  type="text"
                  className="paragraph-24-book"
                  placeholder="Pesquisar..."
                  onChange={(event) => setQuery(event.target.value)}
                />
                <button type="button">
                  <Image
                    width={40}
                    height={40}
                    alt="ícone de busca"
                    src="/images/svgs/search-icon.svg"
                  />
                </button>
              </div>

              <S.CategoriesContainer>
                <S.Overlay
                  open={openFilter}
                  onClick={handleOpenFilter}
                ></S.Overlay>
                <S.Filter onClick={handleOpenFilter} className="paragraph-24">
                  Categorias <FilterIcon color="#fff" />
                </S.Filter>

                <S.Categories open={openFilter}>
                  <button
                    type="button"
                    className="close"
                    onClick={handleOpenFilter}
                  >
                    <CloseIcon color="#fff" />
                  </button>

                  <ul>
                    {categories.map((category) => {
                      return (
                        <li
                          key={category.id}
                          className="product-category paragraph-24"
                        >
                          <Link
                            href="#"
                            onClick={(e) => handleCategoryChange(category, e)}
                          >
                            {category.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </S.Categories>
              </S.CategoriesContainer>
            </div>
          </Container>
        </div>

        <Container>
          <div className="selected-category titulo-32">
            Resultados para
            {query && (
              <>
                <span> "{query}" </span> em
              </>
            )}
            : <span>{selectedCategory}</span>
          </div>

          <div className="grid-criacoes">
            {searchFilter &&
              searchFilter.length > 0 &&
              searchFilter.map((post) => {
                return (
                  <PostCard
                    key={post.id}
                    imageSrc={post.coverImage.url}
                    titulo={post.title}
                    descricao={post.excerpt}
                    palavrasChave={post.tags}
                    link={post.slug}
                  />
                );
              })}
            {searchFilter && searchFilter.length === 0 && (
              <>
                <div>Nenhum post!</div>
              </>
            )}
          </div>
        </Container>
      </S.CriacoesStyles>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts =
    (await client.query({
      query: GET_POSTS,
    })) || [];

  const categories =
    (await client.query({
      query: GET_CATEGORIES,
    })) || [];

  const categoriesArray = [
    { id: "todos", name: "Todos" },
    ...categories.data.categories,
  ];
  return {
    props: {
      posts: posts.data.posts || [],
      categories: categoriesArray || [],
    },
    revalidate: 5000,
  };
};
