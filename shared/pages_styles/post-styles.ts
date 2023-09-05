import styled from 'styled-components'

export const ArticleBox = styled.div`
  padding: 7.41vh 3.39vw;
  color: var(--color-2);
  box-shadow: 0 0 26.3px 8.8px rgba(0, 0, 0, 0.15);
  background-color: var(--color-1);
  margin-top: -190px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .article-head {
    display: flex;
    flex-direction: column;
    gap: 4.17vh;
    width: 100%;

    h2 {
      color: var(--color-4);
    }

    .bottom-head {
      display: flex;
      justify-content: space-between;
      gap: 15px;
      width: 100%;
      align-items: center;

      .author {
        display: flex;
        gap: 20px;
        align-items: center;

        .author-photo {
          width: 72px;
          height: 72px;
          border-radius: 100%;
          overflow: hidden;

          img {
            object-fit: cover;
          }
        }
      }
    }
  }

  .post-content {
    width: 100%;
  }

  .hashtags {
    display: flex;
    gap: 10px;
  }

  @media only screen and (max-width: 640px) {
    .article-head {
      .bottom-head {
        flex-wrap: wrap;
      }
    }
  }
`
