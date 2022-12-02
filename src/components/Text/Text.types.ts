import { Theme } from '../../infrastructure/theme/types';

export interface TextProps {
  variant?:
    | 'body'
    | 'label'
    | 'caption'
    | 'error'
    | 'note'
    | 'hint'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'disabled'
    | 'captionDisabled';
  fontStyle?: string;
  color?: string;
  children: string;
  theme?: Theme;
}
