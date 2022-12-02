export type Colors = {
  ui: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    disabled: string;
    error: string;
    success: string;
    light: string;
    inActive: string;
  };
  bg: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
    sidebar: string;
    header: string;
    filterSidebar: string;
    emptyCard: string;
    emptyCardHeader: string;
    gridHeader: string;
    gridLayout: string;
    dealInfo: string;
    card: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
    schedular: {
      primary: string;
      header: { primary: string; secondary: string };
      info: {
        primary: string;
      };
      switcher: {
        primary: string;
      };
    };
    grid: {
      row: {
        selected: string;
      };
      header: {
        primary: string;
      };
      primary: string;
    };
    dialog: {
      primary: string;
      secondary: string;
      tertiary: string;
      reason: string;
    };
    approvalProcess: {
      primary: string;
    };
    notFound: {
      button: {
        primary: string;
      };
    };
    table: {
      primary: string;
    };
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    inverse: string;
    error: string;
    success: string;
    breadcrumb: string;
    consignment: string;
    note: string;
    dialog: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      heading: string;
      message: string;
      warehouseLabel: string;
      selected: string;
      label: string;
    };
    switcher: {
      primary: string;
    };
    info: {
      primary: string;
    };
    approvalProcess: {
      primary: string;
      secondary: string;
    };
    notFound: {
      primary: string;
    };
  };
  border: {
    primary: string;
    focused: string;
    isActive: string;
    secondary: string;
    schedular: {
      header: {
        primary: string;
      };
    };
    dialog: {
      unSelected: string;
    };
    notFound: {
      primary: string;
      secondary: string;
    };
    table: {
      primary: string;
    };
  };
  icon: {
    primary: string;
  };
};

export type Fonts = {
  body: string;
  heading: string;
  monospace: string;
  hint: string;
};
export type FontWeights = { regular: number; medium: number; bold: number };
export type FontSizes = {
  caption: string;
  button: string;
  body: string;
  label: string;
  title: string;
  hint: string;
  h6: string;
  h5: string;
  h4: string;
  h3: string;
  h2: string;
  h1: string;
};

export type Theme = {
  themeName?: string;
  colors?: Colors;
  fonts?: Fonts;
  fontWeights?: FontWeights;
  fontSizes?: FontSizes;
  sizes?: string[];
  space?: string[];
};
