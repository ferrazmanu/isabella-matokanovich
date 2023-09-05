/* eslint-disable prettier/prettier */
import * as S from "./styles";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "utils/format";

interface PostTypes {
  imageSrc: string;
  titulo: string;
  descricao: string | undefined;
  palavrasChave: Array<string>;
  link: string;
  key: string;
}

export function PostCard({
  imageSrc,
  titulo,
  descricao,
  palavrasChave,
  link,
}: PostTypes) {
  return (
    <S.Card className="post-card">
      <Link href={`/criacoes/post/${link}`}>
        <div className="image-wrapper">
          <Image
            src={imageSrc}
            alt="imagem do post"
            width={720}
            height={210}
            className="image"
          />
        </div>

        <div className="info">
          <div className="card-title">
            <h2 className="titulo-24-regular">{titulo}</h2>

            <p className="paragraph-20-extralight descricao">{descricao}</p>
          </div>

          <div className="bottom-info">
            <div className="hashtags">
              {palavrasChave.map((hashtag) => {
                return (
                  <span className="paragraph-24-extralight" key={hashtag}>
                    #{hashtag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </Link>
    </S.Card>
  );
}
