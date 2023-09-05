import styled from 'styled-components'

const DestaquesContainer = styled.div`
  width: 100%;
  padding: 2.08vw 0;
  display: flex;
  flex-direction: column;
  gap: 1.56vw;

  .card-block {
    display: flex;
    width: 100%;
    gap: 15px;
    justify-content: flex-start;
  }

  .bt {
    margin: 0 auto;
  }

  @media only screen and (max-width: 1024px) {
    .title {
      text-align: center;
    }
    .card-block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`

export { DestaquesContainer }
