import styled from "styled-components";

export const Container = styled.div`
  max-width: 80%;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  height: inherit;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 992px) {
    max-width: 85%;
  }

  @media only screen and (max-width: 640px) {
    max-width: 90%;
  }

  @media only screen and (max-width: 576px) {
    max-width: 98%;
  }
`;
