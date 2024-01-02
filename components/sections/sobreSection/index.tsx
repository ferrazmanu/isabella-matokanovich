import { Container } from "@shared/styles";
import { ButtonComponent } from "@components/button";
import MidiasComponent from "@components/midias";
import Image from "next/image";

import SobreStyles from "./styles";

export function SobreSection({ aboutHomeData }: any) {
  return (
    <SobreStyles id="sobre">
      <Container>
        <div className="sobre-content">
          <div className="content">
            <div className="section-title">
              <h3 className="titulo-48-regular">Sobre mim</h3>
            </div>
            <div className="content-text">
              <div
                className="titulo-24-book"
                dangerouslySetInnerHTML={{
                  __html: aboutHomeData,
                }}
              />
            </div>

            <ButtonComponent href="/sobre" text="Saiba mais" />
          </div>

          <div className="image-wrapper">
            <Image
              src="/images/webp/foto-sobre.webp"
              alt="foto da Isabella"
              width={552}
              height={713}
            />

            <div className="pink-detail"></div>
          </div>
        </div>
        <div className="midias">
          <MidiasComponent color={"#B84E27"} />
        </div>
      </Container>
    </SobreStyles>
  );
}
