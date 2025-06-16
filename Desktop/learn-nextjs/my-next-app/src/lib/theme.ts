// src/lib/theme.ts
type ColorPalette = {
  primary: string;
  secondary: string;
  danger: string;
  [key: string]: string; // Cho phép thêm màu tùy ý
};

type FontSettings = {
  fontFamily: string[];
  fontSize?: string;
  fontWeight?: number;
};

export interface Theme {
  colors: Readonly<ColorPalette>;
  pageContainer: {
    maxWidth: string;
    marginLeft: string;
    marginRight: string;
  };
  typography: {
    body: FontSettings;
    heading: FontSettings;
  };
  spacing: {
    sm: string;
    md: string;
    lg: string;
  };
  radii: {
    sm: string;
    md: string;
    lg: string;
  };
}

const theme: Theme = {
  colors: {
    primary: '#b24052',
    secondary: '#10b981',
    danger: '#ef4444',
  },
  pageContainer: {
    maxWidth: '1280px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  typography: {
    body: {
      fontFamily: ['DM Sans', 'sans-serif'],
      fontSize: '16px',
      fontWeight: 400,
    },
    heading: {
      fontFamily: ['Poppins', 'sans-serif'],
      fontSize: '24px',
      fontWeight: 700,
    },
  },
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
} as const;

export default theme;

// Helper types
export type ColorKey = keyof typeof theme.colors;
export type SpacingKey = keyof typeof theme.spacing;
export type RadiusKey = keyof typeof theme.radii;