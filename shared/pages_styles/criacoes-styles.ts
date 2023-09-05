import { AbrilFatFace, JosefinSans } from "@shared/fonts";
import styled from "styled-components";

interface CategoriesProps {
  open: boolean;
}

export interface StylesProps {
  open: boolean;
}

export const CriacoesStyles = styled.section`
  .bar-wrapper {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    color: var(--color-1);
  }

  .filter-bar {
    width: 100%;
    padding: 20px 0;
    background-color: var(--color-3);

    .pesquisa {
      display: flex;
      justify-content: flex-end;
      max-width: 400px;
      width: 100%;
    }

    input {
      color: var(--color-1);
      font-family: ${JosefinSans.style.fontFamily};
      padding: 0 30px 0 10px;
      border-bottom: 1px solid var(--color-1);
      border-top: none;
      border-left: none;
      border-right: none;
      background-color: transparent;
      width: 100%;

      &::placeholder {
        color: var(--color-1);
        opacity: 0.5;
      }
    }

    button {
      border: none;
      background-color: transparent;
      width: 30px;
      cursor: pointer;
      margin-left: -30px;

      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }

  .selected-category {
    margin-top: 30px;
    margin-bottom: 30px;
    color: var(--color-3);
    font-family: ${AbrilFatFace.style.fontFamily};
    span {
      font-family: ${AbrilFatFace.style.fontFamily};
    }
  }

  .grid-criacoes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    gap: 15px;
    padding: 10px;
    justify-content: space-between;

    .post-card {
      max-width: 450px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .pesquisa {
      max-width: 200px !important;
    }

    .grid-criacoes {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Overlay = styled.div<StylesProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.6);
  ${(props) => (props.open ? "display: block;" : "display: none;")}
`;

export const Categories = styled.div<CategoriesProps>`
  width: 100%;
  display: flex;
  position: fixed;
  right: 0;
  top: 0;
  flex-direction: column;
  background-color: var(--color-3);
  min-height: 100vh;
  height: 100%;
  justify-content: flex-start;
  max-width: 300px;
  padding: 30px;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;
  z-index: 99;
  ${(props) =>
    props.open ? "transform: translateX(0%)" : "transform: translateX(100%)"};
  overflow: auto;

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  a {
    color: var(--color-1);
    font-weight: 300;
  }

  .close {
    display: flex;
    background-color: transparent;
    border: none;
    cursor: pointer;
    justify-content: flex-end;
    width: fit-content;
    align-self: flex-end;
    color: var(--color-1);
  }
`;

export const CategoriesContainer = styled.div`
  max-width: 100%;
  flex-direction: row;
  justify-content: space-between;
  width: fit-content;
  display: flex;
  gap: 20px;

  h3 {
    font-weight: 400;
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 300;
  cursor: pointer;
  font-family: ${JosefinSans.style.fontFamily};
`;
