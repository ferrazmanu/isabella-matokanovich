/* eslint-disable prettier/prettier */
import { AbrilFatFace } from "@shared/fonts";
import styled from "styled-components";

export const CarreiraSwiperStyles = styled.section`
  .path-container {
    display: flex;
    justify-items: center;
    padding: 0 30px;
    height: 283px;
    margin-bottom: 283px;
    border-bottom: solid 1px var(--color-3);
    justify-content: space-between;
    gap: 10px;
  }

  .box {
    max-width: 270px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: flex-start;
    justify-content: flex-end;

    .top-box {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .place-name {
      color: var(--color-3);
      text-align: center;
      margin-bottom: 1.3vw;
      line-height: 40px;
    }

    .bubble-date {
      width: 100px;
      height: 100px;
      border: solid 2px var(--color-3);
      background-color: var(--color-3);
      color: var(--color-1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;
      white-space: nowrap;

      span {
        font-family: ${AbrilFatFace.style.fontFamily};
      }
    }

    &:nth-child(even) {
      flex-direction: column-reverse;
      transform: translateY(100%);
      margin-bottom: 0;
      margin-top: 1.3vw;

      .top-box {
        flex-direction: column-reverse;
      }
    }
  }

  .line {
    width: 2px;
    height: 100px;
    background-color: var(--color-3);
  }

  @media only screen and (max-width: 992px) {
    .box {
      .bubble-date {
        width: 98px;
        height: 98px;
      }

      .place-name {
        line-height: 1.5;
      }
    }
  }

  @media only screen and (max-width: 640px) {
    .path-container {
      flex-direction: column;
      border-bottom: 0;
      border-right: solid 1px var(--color-3);
      width: 46%;
      height: fit-content;
      margin-bottom: 0;
      padding: 0 0 0 30px;
    }

    .box {
      flex-direction: row;
      justify-content: flex-start;

      .top-box {
        flex-direction: row;
      }

      &:nth-child(even) {
        flex-direction: row-reverse !important;
        transform: translate(100%, 0%) !important;

        .top-box {
          flex-direction: row-reverse !important;
        }
      }

      .place-name {
        width: 80px;
        margin-bottom: 0;
        margin-right: 10px;
      }

      .bubble-date {
        width: 78px;
        height: 78px;
      }
    }

    .line {
      width: 100px;
      height: 2px;
    }
  }
`;
