import styled from 'styled-components'

export const FooterStyle = styled.div`
  background-color: var(--color-3);
  min-height: 241px;
  padding: 20px;
  color: var(--color-1);
  margin-top: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .scroll-up {
    position: absolute;
    top: -34px;
    left: 50%;
    transform: translateX(-50%);
    border: solid 2px var(--color-3);
    background-color: var(--color-1);
    max-width: 420px;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    span {
      color: var(--color-2);
    }

    img {
      width: 20px !important;
      height: 20px !important;
      position: relative !important;
    }

    &:hover {
      img {
        animation-name: icon-float, icon-bob;
        animation-duration: 0.3s, 1.5s;
        animation-delay: 0s, 0.3s;
        animation-timing-function: ease-out, ease-in-out;
        animation-iteration-count: 1, infinite;
        animation-fill-mode: forwards;
        animation-direction: normal, alternate;
      }
    }
  }

  .container {
    height: 100%;
    justify-content: center;
  }

  .box-footer {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
  }

  .menu {
    max-width: 660px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    a {
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgb(0 0 0 / 0%);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 51%;
        right: 51%;
        bottom: -1px;
        background: var(--color-1);
        height: 1px;
        -webkit-transition-property: left, right;
        transition-property: left, right;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
      }

      &:hover::before {
        left: 0;
        right: 0;
      }
    }
  }

  li,
  a,
  span {
    color: var(--color-1);
    white-space: nowrap;
  }

  @media only screen and (max-width: 768px) {
    .box-footer {
      flex-wrap: wrap;
      justify-content: center;
    }

    .scroll-up {
      max-width: 270px;
    }
  }

  @media only screen and (max-width: 450px) {
    .menu {
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }
  }
`
