import styled from "styled-components";

export const Card = styled.div`
  max-width: 450px;
  width: 100%;
  color: var(--color-1);
  display: flex;

  a {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: var(--color-1);
    height: 100%;
  }

  .image-wrapper {
    width: 100%;
    position: relative;
    height: 200px;

    span {
      height: 100% !important;
    }

    .image {
      width: 100%;
      object-fit: cover;
      height: inherit;
    }
  }

  .info {
    padding: 20px;
    width: 100%;
    background-color: var(--color-3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .card-title {
      h2 {
        text-transform: uppercase;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }

    .bottom-info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 10px;

      .hashtags {
        width: 100%;
        display: flex;
        gap: 10px;
      }

      span {
        white-space: nowrap;
      }
    }

    .descricao {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }

  @media only screen and (max-width: 1024px) {
    .info {
      .card-title {
        h2 {
          -webkit-line-clamp: 1; /* number of lines to show */
          line-clamp: 1;
        }
      }

      .descricao {
        -webkit-line-clamp: 2;
        line-clamp: 2;
      }
    }
  }
`;
