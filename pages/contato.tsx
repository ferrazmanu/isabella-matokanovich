import { GetStaticProps } from "next";
import { client } from "lib/apollo";
import { GET_CONTACT_PAGE } from "lib/data";

import { Layout } from "@components/layout/layout";
import { ContatoComponent } from "@components/sections/contatoSection";

interface Props {
  text: object;
}

export default function Contato({ text }) {
  return (
    <div className="light-pink-bg">
      <Layout>
        <ContatoComponent text={text} />
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const contactData = await client.query({
    query: GET_CONTACT_PAGE,
  });

  return {
    props: {
      text: contactData.data.page.content.html,
    },
    revalidate: 5000,
  };
};
