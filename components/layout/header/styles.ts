import styled from 'styled-components'

interface MenuProps {
  isopen: boolean
}

export const HeaderStyle = styled.div`
  max-width: 968px;
  width: 100%;
  padding: 50px 15px;
  color: var(--color-1);
  margin: 0 auto;
  position: relative;
  z-index: 99;
  height: 136px;

  li,
  a,
  span {
    color: var(--color-1);
    white-space: nowrap;
  }

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

  @media only screen and (max-width: 992px) {
    padding: 0;
  }
`
export const HamburguerMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 20px;
  position: absolute;
  right: 20px;
  top: 20px;

  div {
    width: 100%;
    background-color: #fff;
    height: 2px;
  }

  @media only screen and (max-width: 992px) {
    display: flex;
  }
`

export const Menu = styled.div<MenuProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  .close {
    display: none;
  }

  @media only screen and (max-width: 992px) {
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: fixed;
    flex-direction: column;
    width: 30%;
    height: 100vh;
    background-color: var(--color-3);
    padding: 20px;
    right: 0;
    top: 0;
    transform: ${(props) =>
      props.isopen ? 'translateX(0%)' : 'translateX(100%)'};
    transition: ease-in-out 0.3s;

    .close {
      display: flex;
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }

  @media only screen and (max-width: 640px) {
    width: 40%;
  }

  @media only screen and (max-width: 450px) {
    width: 50%;
  }
`
