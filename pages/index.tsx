/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PostsDestaques } from "@components/sections/cardsDestaques";
import { Layout } from "@components/layout/layout";
import { BannerComponent } from "@components/banner";
import SobreSection from "@components/sections/sobreSection/styles";
import { ContatoComponent } from "@components/sections/contatoSection";
import { GetStaticProps } from "next";
import { client } from "lib/apollo";
import { GET_CONTACT_PAGE, GET_HOME_POSTS } from "lib/data";

interface Props {
  posts: string;
  contactData: object;
}

export default function Home({ posts, contactData }) {
  return (
    <Layout>
      <BannerComponent
        image="/images/webp/home-banner.webp"
        title="Isabella Matokanovich"
        subTitle="Redatora"
      />
      <SobreSection />
      <PostsDestaques posts={posts} />
      <ContatoComponent text={contactData} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await client.query({
    query: GET_HOME_POSTS,
  });
  const contactData = await client.query({
    query: GET_CONTACT_PAGE,
  });

  return {
    props: {
      posts: data?.posts,
      contactData: contactData.data.page.content.html,
    },
    revalidate: 5000,
  };
};
