import Image from "next/image";
import { Layout } from "@components/layout/layout";
import { Container } from "@shared/styles";
import { ArticleBox } from "@shared/pages_styles/post-styles";
import { GetStaticPaths, GetStaticProps } from "next";
import { GET_POSTS_SLUG, GET_SINGLE_POST } from "lib/data";
import { client } from "lib/apollo";
import { BannerInternasComponent } from "@components/bannerInternas";
import { formatDate } from "utils/format";
import { BlogProps } from "types/api";

interface Props {
  post: BlogProps;
}

export default function Article({ post }) {
  return (
    <Layout>
      <BannerInternasComponent image={post.coverImage.url} title={""} />
      <Container>
        <ArticleBox>
          <div className="article-head">
            <h2 className="titulo-72-regular">{post.title}</h2>
          </div>

          <div
            className="post-content paragraph-24-light"
            dangerouslySetInnerHTML={{
              __html: post.content.html,
            }}
          />

          <div className="hashtags paragraph-20-light">
            {post.tags.map((tag) => {
              return <span key={tag}>#{tag}</span>;
            })}
          </div>
        </ArticleBox>
      </Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.query({
    query: GET_POSTS_SLUG,
  });

  const paths = res.data.posts
    .filter((post) => !!post)
    .map((post) => ({
      params: { slug: post.slug },
    }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const res = await client.query({
    query: GET_SINGLE_POST,
    variables: { slug: params?.slug },
  });

  return {
    props: {
      post: res.data.post,
    },
    revalidate: 5000,
  };
};
