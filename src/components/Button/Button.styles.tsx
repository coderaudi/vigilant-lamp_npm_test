import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const getOutlinedStyles = (
  theme: { themeName: string; colors: { bg: { primary: string } } },
  outlineColor: string | undefined,
  bgColor: string | undefined
) => {
  return `
    background-color: ${bgColor ? bgColor : theme.colors.bg.primary};
    border:0.5px solid ${
      outlineColor
        ? outlineColor
        : theme.themeName === "light"
        ? "black"
        : "rgba(255, 255, 255, 0.3)"
    } ;
  `;
};

const getLinkStyles = () => {
  return `
    background-color:transparent;
    border:none;
  `;
};

export const ButtonContainer = styled.button<
  Pick<ButtonProps, "outlineColor" | "bgColor" | "variant">
>`
  border-radius: 2px;
  padding: 3px 14px;
  background-color: ${(props) => props.theme.colors.ui.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    box-shadow: none;
  }
  ${(props) =>
    props.variant === "outlined" &&
    getOutlinedStyles(props.theme, props.outlineColor, props.bgColor)}
  ${(props) =>
    (props.variant === "primaryLink" || props.variant === "secondaryLink") &&
    getLinkStyles()}
`;
