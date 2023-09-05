/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { DestaquesContainer } from "./styles";
import { Container } from "@shared/styles";
import { ButtonComponent } from "@components/button";
import { PostCard } from "@components/postCriacoes";

export function PostsDestaques({ posts }) {
  return (
    <Container>
      <DestaquesContainer>
        <div className="section-title">
          <h3 className="titulo-48-regular">Destaques</h3>
        </div>

        <div className="card-block">
          {posts.map((post, index) => {
            return (
              <PostCard
                key={`posts-${index}`}
                imageSrc={post.coverImage.url}
                titulo={post.title}
                descricao={post.excerpt}
                palavrasChave={post.tags}
                link={post.slug}
              />
            );
          })}
        </div>

        <ButtonComponent text="ver todos" href="/criacoes" />
      </DestaquesContainer>
    </Container>
  );
}
