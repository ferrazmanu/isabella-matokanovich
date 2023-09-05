import styled from 'styled-components'

export const SobreStyles = styled.section`
  padding: 4.17vw 0;

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.08vw;
  }

  .title-midias {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
  }

  .section-title {
    text-transform: unset;
    max-width: 1143px;
  }

  @media only screen and (max-width: 1024px) {
    .section-title {
      h1,
      h2,
      h3 {
        text-align: left;
      }
    }
  }
`
