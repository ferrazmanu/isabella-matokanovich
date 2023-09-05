import styled from 'styled-components'

const SobreStyles = styled.section`
  padding: 7vw 0 2.08vw;

  .sobre-content {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 3vw;

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.56vw;
      justify-content: space-between;
    }

    .image-wrapper {
      width: 50%;
      max-width: 280px;
      height: 42vh;
      position: relative;

      img {
        width: 100%;
        object-fit: cover;
        height: 100%;
        object-position: top center;
      }

      .pink-detail {
        background-color: var(--color-5);
        right: -16%;
        top: -8%;
        aspect-ratio: 280/391;
        max-width: inherit;
        width: 100%;
        height: inherit;
        z-index: -1;
        transition: 0.3s ease-in-out;
      }

      &:hover {
        .pink-detail {
          right: -18%;
          top: -10%;
        }
      }
    }
  }

  .midias {
    display: flex;
    border-top: 1px solid var(--color-4);
    margin-top: 4vw;
    width: 100%;
    padding: 15px;
    justify-content: flex-end;
  }

  @media only screen and (max-width: 1400px) {
    .sobre-content {
      .image-wrapper {
        width: 50%;
        max-width: 412px;
        aspect-ratio: unset;
        min-height: 450px;

        .pink-detail {
          right: 12%;
          top: -9%;
          aspect-ratio: unset;
          max-width: 412px;
          height: inherit;
        }

        &:hover {
          .pink-detail {
            right: 11%;
            top: -11%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1300px) {
    .sobre-content {
      justify-content: center;

      .image-wrapper {
        .pink-detail {
          display: none;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .sobre-content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      .image-wrapper {
        aspect-ratio: 450/500;
        width: 100%;
      }

      .content {
        width: 100%;
        max-width: 700px;
      }
    }

    a {
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 576px) {
    .sobre-content {
      .image-wrapper {
        aspect-ratio: 450/400;
      }
    }
  }
`

export default SobreStyles
