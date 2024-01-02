/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PostsDestaques } from "@components/sections/cardsDestaques";
import { Layout } from "@components/layout/layout";
import { BannerComponent } from "@components/banner";
import { SobreSection } from "@components/sections/sobreSection/";
import { ContatoComponent } from "@components/sections/contatoSection";
import { GetStaticProps } from "next";
import { client } from "lib/apollo";
import { GET_CONTACT_PAGE, GET_HOME_POSTS } from "lib/data";

interface Props {
  postsData: any;
  contactData: any;
}

export default function Home({ postsData, contactData }) {
  return (
    <Layout>
      <BannerComponent
        image="/images/webp/home-banner.webp"
        title="Isabella Matokanovich"
        subTitle="Redatora"
      />
      <SobreSection />
      <PostsDestaques posts={postsData} />
      <ContatoComponent text={contactData} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const { data: postsData } = await client.query({
      query: GET_HOME_POSTS,
    });
    const { data: contactData } = await client.query({
      query: GET_CONTACT_PAGE,
    });

    if (!postsData || !contactData) {
      throw new Error("Data not available");
    }

    return {
      props: {
        postsData: postsData.posts,
        contactData: contactData.page.content.html,
      },
      revalidate: 5000,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        postsData: null,
        contactData: null,
      },
    };
  }
};
