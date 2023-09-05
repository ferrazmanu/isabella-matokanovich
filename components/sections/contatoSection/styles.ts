import styled from "styled-components";

interface ContatoProps {
  contactpage?: boolean | string;
}

export const ContatoStyle = styled.section<ContatoProps>`
  padding: 4.17vw 15px;
  min-height: ${(props) => (props.contactpage ? "64vh" : "fit-content")};

  .box-contato {
    max-width: 990px;
    width: 100%;
    margin: 0 auto;
    border: solid 1px var(--color-3);
    background-color: var(--color-1);
    text-align: center;
    padding: 4.17vw 15px;
    display: flex;
    flex-direction: column;
    gap: 1.56vw;
    justify-content: center;
    align-items: center;

    h3 {
      color: var(--color-4);
    }

    a {
      color: var(--color-2);
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    gap: 8px;

    p {
      margin-bottom: 0;
    }
  }
`;
