import { BannerStyle } from "./styles";
import { Container } from "@shared/styles";
import Image from "next/image";
import { useRouter } from "next/router";
interface BannerProps {
  image: string;
  title: string;
  subTitle?: string;
}

export function BannerComponent({ image, title, subTitle }: BannerProps) {
  const router = useRouter();
  const isHomePage = !(
    router.pathname.includes("carreira") || router.pathname.includes("sobre")
  );

  return (
    <BannerStyle>
      <div
        className="bg home"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <Container>
          <div className="content-banner">
            <div className="spacing-div"></div>

            <div className="banner-title">
              <h1 className="titulo-92-regular">{title}</h1>
              <p className="titulo-32-thin">{subTitle}</p>
            </div>

            {isHomePage ? (
              <a href="#sobre" className="paragraph-24-thin scroll-down">
                <span>scroll</span>
                <Image
                  src="/images/svgs/down-arrow.svg"
                  alt="seta de scroll"
                  width={20}
                  height={31}
                />
              </a>
            ) : (
              <div />
            )}
          </div>
        </Container>
      </div>
    </BannerStyle>
  );
}
