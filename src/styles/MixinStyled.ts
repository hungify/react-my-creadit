import { ColorConstants } from "./ConstantsStyled";
import { css } from "styled-components";

export const FormMixin = {
  //Form Field
  FormField: css`
    margin: 2rem auto 1rem auto;
    max-width: 25rem;
    position: relative;
    margin-bottom: 40px;
  `,
  LabelField: css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    user-select: none;
    color: ${ColorConstants.TEXT_COLOR};
    pointer-events: none;
    transition: 0.25s ease;
  `,
  InputEffect: css`
    width: 100%;
    height: 50px;
    padding: 0 20px;
    font-size: 18px;
    background-color: ${ColorConstants.BG_COLOR};
    color: ${ColorConstants.TEXT_COLOR};
    transition: 0.25s ease;
    border: 1px solid #c6b4ce;
    border-radius: 4px;
    &:focus {
      border: 2px solid rgb(38, 132, 255);
      outline: rgb(38, 132, 255);
    }
  `,
  LabelEffect: css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    user-select: none;
    color: ${ColorConstants.TEXT_COLOR};
    pointer-events: none;
    transition: 0.25s ease;

    input:not(:placeholder-shown) + &,
    input:focus + & {
      top: 0;
      padding: 0 10px;
      display: inline-block;
      color: ${ColorConstants.BORDER_COLOR};
      background-color: ${ColorConstants.BG_COLOR};
      &::after {
        content: " *";
        color: #51c4d3;
      }
    }
  `,

  ErrorMessage: css`
    position: absolute;
    margin: 4px 10px;
    text-align: left;
  `,
};

export const ButtonMixin = {
  EffectOne: css`
    position: relative;
    padding: 1em 1.5em;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    font-size: 18px;
    margin: 1em 0.8em;

    color: ${ColorConstants.BTN_COLOR};
    background-color: rgba(62, 219, 240, 0.2);
    &:hover {
      color: ${ColorConstants.BTN_COLOR};
    }

    &::after,
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 20%;
      height: 20%;
      border: 2px solid;
      transition: all 0.6s ease;
      border-radius: 2px;
    }
    &::after {
      bottom: 0;
      right: 0;
      border-top-color: transparent;
      border-left-color: transparent;
      border-bottom-color: ${ColorConstants.BTN_BORDER_COLOR};
      border-right-color: ${ColorConstants.BTN_BORDER_COLOR};
    }
    &::before {
      top: 0;
      left: 0;
      border-bottom-color: transparent;
      border-right-color: transparent;
      border-top-color: ${ColorConstants.BTN_BORDER_COLOR};
      border-left-color: ${ColorConstants.BTN_BORDER_COLOR};
    }
    &:hover:after,
    &:hover:before {
      width: 100%;
      height: 100%;
    }
  `,
  EffectTwo: css`
    display: block;
    width: 250px;
    height: 50px;
    line-height: 46px;
    text-decoration: none;
    text-align: center;
    border-radius: 5px;
    border: 3px solid #78dec7;
    color: #78dec7;
    font-size: 20px;
    position: relative;
    overflow: hidden;
    background: transparent;
    text-transform: uppercase;
    transition: all 0.35s;
    z-index: 0;
    &::before,
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: -100%;
      left: 0;
      background: #ff616d;
      z-index: -2;
      transition: all 0.35s;
    }

    &:before {
      opacity: 0.5;
    }

    &:after {
      transition-delay: 0.2s;
    }
    &:hover:before,
    &hover:after {
      top: 0;
    }
  `,
};
