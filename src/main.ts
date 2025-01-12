const theme = {
  palette: {
    functional: {
      primary: "#FE5200",
      secondary: "#018A42",
      tertiary: "#01B8F2",
      background: "#F7F7F7",
      border: "#D9D9D9",
      foreground: "#000000",
    },
  },
  size: {
    layout: {
      gap: {
        condensed: "0.5em",
        normal: "1em",
        spacious: "1.5em",
      },
      thickness: {
        thin: "0.5px",
        thick: "1px",
        thicker: "2px",
      },
    },
  },
  typography: {
    weight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
    },
    family: {
      sans: "'Pretendard'",
      serif: "'Noto Serif Korean'",
      mono: "'D2Coding'",
    },
    dimension: {
      small: {
        size: "14px",
        height: "1.5",
      },
      medium: {
        size: "16px",
        height: "1.5",
      },
      large: {
        size: "24px",
        height: "1.5",
      },
      xlarge: {
        size: "48px",
        height: "1.5",
      },
    },
  },
};

export default theme;
export type MMDesignPrimitives = typeof theme;
