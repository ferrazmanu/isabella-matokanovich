import styled from 'styled-components'

export const ButtonStyle = styled.a`
  border: solid 2px var(--color-3);
  background-color: var(--color-1);
  padding: 20px 10px;
  max-width: 250px;
  height: 58px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  transition: ease-in-out 0.3s;
  aspect-ratio: 421/76;
  span {
    color: var(--color-2);
    transition: ease-in-out 0.3s;
    text-transform: lowercase;
  }

  &:hover {
    background-color: var(--color-5);
    border: solid 2px var(--color-5);

    span {
      font-weight: 300;
    }
  }

  @media only screen and (max-width: 992px) {
    height: 48px;
  }
`
