import styled from 'styled-components'

const MidiasStyle = styled.div`
  .redes {
    max-width: 210px;
    width: 100%;
    gap: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      display: flex;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 27px;
        height: 27px;
      }
    }

    @media only screen and (max-width: 1024px) {
      gap: 8px;

      li {
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`

export default MidiasStyle
