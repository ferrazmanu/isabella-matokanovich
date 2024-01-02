import { GetStaticProps } from "next";
import { client } from "lib/apollo";

import { GET_CAREER_PAGE, GET_COMPANIES } from "lib/data";

import { Layout } from "@components/layout/layout";
import { BannerComponent } from "@components/banner";
import {
  CarreiraSwiperComponent,
  CompanyProps,
} from "@components/carreiraSwiper";

import { Container } from "@shared/styles";
import { CarreiraStyles } from "@shared/pages_styles/carreira-styles";

interface Props {
  text: object;
  companies: CompanyProps[];
}

export default function Carreira({ text, companies }) {
  return (
    <Layout>
      <BannerComponent
        image="/images/webp/carreira-banner.webp"
        title="Carreira"
      />
      <CarreiraStyles>
        <CarreiraSwiperComponent companies={companies} />

        <Container>
          <div
            className="text titulo-24-book"
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
        </Container>
      </CarreiraStyles>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const careerData = await client.query({
    query: GET_CAREER_PAGE,
  });
  const companiesData = await client.query({
    query: GET_COMPANIES,
  });

  return {
    props: {
      text: careerData.data.page.content.html,
      companies: companiesData.data.companies,
    },
    revalidate: 5000,
  };
};
