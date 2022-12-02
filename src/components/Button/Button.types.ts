import { ReactElement, MouseEventHandler } from 'react';

export interface ButtonProps {
  title: string;
  titleColor?: string;
  variant?: 'primary' | 'outlined' | 'primaryLink' | 'secondaryLink';
  iconRight?: ReactElement;
  iconRightSize?: 'small' | 'medium' | 'large';
  loading?: boolean;
  loadingStyle?: object;
  style?: object;
  outlineColor?: string;
  disabled?: boolean;
  bgColor?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
