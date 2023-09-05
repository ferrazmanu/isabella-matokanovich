import styled from 'styled-components'

export const BannerStyle = styled.section`
  width: 100%;
  margin-top: -136px;

  .bg.home {
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    position: relative;
    min-height: 600px;

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.6) 100%
      );
    }

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0) 60%,
        rgba(0, 0, 0, 0.6) 100%
      );
    }
  }

  .content-banner {
    height: 100%;
    color: var(--color-1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 5;

    .spacing-div {
      height: 136px;
    }

    .banner-title {
      text-align: right;
      max-width: 850px;
      align-self: flex-end;
      text-transform: uppercase;

      @media only screen and (max-width: 992px) {
        h1 {
          font-size: 40px;
        }
      }

      @media only screen and (max-width: 450px) {
        h1 {
          font-size: 30px;
        }
      }
    }

    .scroll-down {
      color: var(--color-1);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 190px;
      width: 100%;
      margin: 0 auto 50px;
      transform: perspective(1px) translateZ(0);

      img {
        width: 20px;
        height: 31px;
      }

      &:hover {
        animation-name: hang-sink, hang;
        animation-duration: 0.3s, 1.5s;
        animation-delay: 0s, 0.3s;
        animation-timing-function: ease-out, ease-in-out;
        animation-iteration-count: 1, infinite;
        animation-fill-mode: forwards;
        animation-direction: normal, alternate;
      }
    }
  }
`
