import styled from 'styled-components';
import { TextProps } from './Text.types';
import { Theme } from "../../infrastructure/theme/types";
import React from 'react';
import { lightTheme } from '../../infrastructure/theme/light';


const defaultTextStyles = (theme: Theme) => `
  font-family: ${theme?.fonts?.body};
  font-weight: ${theme?.fontWeights?.regular};
  color: ${theme?.colors?.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: Theme) => `
    font-size: ${theme?.fontSizes?.body};
`;

const hint = (theme: Theme) => `
    font-family: ${theme?.fonts?.hint};
    font-size: ${theme?.fontSizes?.hint};
`;

const error = (theme: Theme) => `
    color: ${theme?.colors?.text.error};
`;

const note = (theme: Theme) => `
    color: ${theme?.colors?.text.note};
`;

const caption = (theme: Theme) => `
    font-size: ${theme?.fontSizes?.caption};
    font-weight: ${theme?.fontWeights?.bold};
    font-family: ${theme?.fonts?.monospace};
`;

const label = (theme: Theme) => `
    font-family: ${theme?.fonts?.heading};
    font-size: ${theme?.fontSizes?.label};
    font-weight: ${theme?.fontWeights?.medium};
`;

const h1 = (theme: Theme) => `
    font-family: ${theme?.fonts?.body};
    font-size: ${theme?.fontSizes?.h1};
`;

const h2 = (theme: Theme) => `
    font-family: ${theme?.fonts?.body};
    font-size: ${theme?.fontSizes?.h2};
`;
const h3 = (theme: Theme) => `
    font-family: ${theme?.fonts?.body};
    font-size: ${theme?.fontSizes?.h3};
`;
const h4 = (theme: Theme) => `
    font-family: ${theme?.fonts?.body};
    font-size: ${theme?.fontSizes?.h4};
`;
const h5 = (theme: Theme) => `
    font-family: ${theme?.fonts?.body};
    font-size: ${theme?.fontSizes?.h5};
`;
const h6 = (theme: Theme) => `
    font-family: ${theme?.fonts?.body};
    font-size: ${theme?.fontSizes?.h6};
`;

const disabled = (theme: Theme) => `
    font-family: ${theme?.fonts?.body};
    font-size: ${theme?.fontSizes?.h5};
    color:${theme?.colors?.text.disabled};
`;

const captionDisabled = (theme: Theme) => `
font-size: ${theme?.fontSizes?.caption};
font-weight: ${theme?.fontWeights?.bold};
font-family: ${theme?.fonts?.monospace};
    color:${theme?.colors?.text.disabled};
`;

const variants = {
    body,
    label,
    caption,
    error,
    note,
    hint,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    disabled,
    captionDisabled,
};

const StyledText = styled.p<TextProps>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant = 'body', theme }) => variants[variant](theme)}
  ${({ color }) => color && `color:${color};`}
  font-display: swap;
  ${({ fontStyle }) => fontStyle && `font-style:${fontStyle}`}
`;

const CCMText = ({ variant = 'body', theme = lightTheme, children, ...props }: TextProps) => {
    return <StyledText variant={variant} theme={theme} {...props} >{children}</StyledText>
}

export default CCMText;

