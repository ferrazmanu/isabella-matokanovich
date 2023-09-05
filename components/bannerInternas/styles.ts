import styled from 'styled-components'

export const BannerInternasStyle = styled.section`
  width: 100%;
  margin-top: -136px;

  .bg.home {
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 55.56vh;
    position: relative;
    min-height: 400px;

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
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
    justify-content: center;
    margin-bottom: 40px;

    .spacing-div {
      height: 136px;
    }

    .banner-title {
      text-align: right;
      text-transform: uppercase;
      max-width: 850px;
      align-self: flex-end;
    }
  }
`
