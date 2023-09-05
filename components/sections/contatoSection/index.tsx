import { Container } from "@shared/styles";
import { useRouter } from "next/router";

import { ContatoStyle } from "./styles";

export function ContatoComponent({ text }) {
  const router = useRouter();

  return (
    <Container>
      <ContatoStyle
        {...(router.pathname === "/contato" ? { contactpage: "true" } : {})}
      >
        <div className="box-contato">
          <div className="section-title">
            <h3 className="titulo-48-regular">Contato</h3>
          </div>

          <div
            className="contact titulo-24-book"
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
        </div>
      </ContatoStyle>
    </Container>
  );
}
