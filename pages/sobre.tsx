import { Layout } from "@components/layout/layout";
import { BannerComponent } from "@components/banner";
import { SobreStyles } from "@shared/pages_styles/sobre-styles";
import { Container } from "@shared/styles";
import MidiasComponent from "@components/midias";
import { GetStaticProps } from "next";
import { GET_SOBRE } from "lib/data";
import { client } from "lib/apollo";
import { SobreProps } from "types/api";
interface Props {
  sobre: SobreProps;
}

export default function Sobre({ sobre }: Props) {
  return (
    <Layout>
      <BannerComponent
        image="/images/webp/sobre-banner.webp"
        title={sobre.title}
      />

      <SobreStyles>
        <Container>
          <div className="content">
            <div className="title-midias">
              <div className="section-title">
                <h3 className="titulo-48-regular">{sobre.subtitle}</h3>
              </div>

              <MidiasComponent color={"#B84E27"} />
            </div>

            <div
              className="text paragraph-24-light"
              dangerouslySetInnerHTML={{
                __html: sobre.content.html,
              }}
            />
          </div>
        </Container>
      </SobreStyles>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await client.query({
    query: GET_SOBRE,
  });

  return {
    props: {
      sobre: res.data.page,
    },
    revalidate: 5000,
  };
};
