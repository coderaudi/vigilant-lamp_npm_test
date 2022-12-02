import styled from "styled-components";
import { Theme } from "../../infrastructure/theme/types";
import { ButtonProps } from "./Button.types";

const getOutlinedStyles = (
  theme: Theme,
  outlineColor: string | undefined,
) => {
  return `
    border:0.5px solid ${outlineColor
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
  Pick<ButtonProps, "outlineColor" | "bgColor" | "variant" | "disabled">
>`
  border-radius: 2px;
  padding: 3px 14px;
  background-color: ${({ bgColor, theme }) => bgColor ? bgColor : theme.colors.ui.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    box-shadow: none;
  }
  ${({ variant, outlineColor, theme }) =>
    variant === "outlined" &&
    getOutlinedStyles(theme, outlineColor)}
  ${({ variant }) =>
    (variant === "primaryLink" || variant === "secondaryLink") &&
    getLinkStyles()}

  cursor:${({ disabled }) => disabled ? 'not-allowed' : 'pointer'}
`;
