import React from "react";
import { ButtonContainer } from "./Button.styles";
import { useTheme } from "styled-components";
import { ButtonProps } from "./Button.types";
import { Theme } from "../../infrastructure/theme/types";
import { darkTheme } from "../../infrastructure/theme/dark";
import CCMText from "../Text";

const CCMButton = ({
  title,
  titleColor,
  variant = 'primary',
  iconRight,
  iconRightSize = "small",
  loading,
  loadingStyle,
  style,
  outlineColor,
  disabled,
  bgColor,
  onClick,
  ...props
}: ButtonProps) => {
  const theme: Theme = useTheme() || darkTheme;
  const getVariantColor = () => {
    if (theme?.colors) {
      if (variant === "primaryLink") {
        return theme.colors.ui.primary;
      } else if (variant === "outlined") {
        return theme.colors.text.primary;
      } else if (variant === "secondaryLink") {
        return theme.colors.text.secondary;
      } else if (variant === 'primary') {
        return "#f2f2f2";
      }
    }
    return "#f2f2f2";
  };
  return (
    <ButtonContainer
      type="button"
      className="btn"
      variant={variant}
      outlineColor={outlineColor}
      style={style}
      bgColor={bgColor}
      disabled={disabled}
      onClick={onClick}
      theme={theme}
      {...props}
    >
      <CCMText color={titleColor ? titleColor : getVariantColor()}>{title}</CCMText>
      {loading && <p>loading</p>}
    </ButtonContainer>
  );
};

export default CCMButton;
