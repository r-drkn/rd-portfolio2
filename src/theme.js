const theme = {
  colors: {
    text: "#F2F2F2",
    primary: "#155073",
    secondary: "#F21365",
    third: "#F2F2F2",
    white: "#F2F2F2",
    background: "#031926",
    backgroundOpaque: "rgba(003, 025, 038, 0.9)",
  },
  fonts: {
    primary: "Karla, sans-serif",
    secondary: "'Proza Libre', sans-serif",
    code: "Fira Code, serif",
  },
  breakpoints: ["767px", "991px", "992px"],
  mobile: { maxWidth: 767 },
  tablet: { minWidth: 768, maxWidth: 991 },
  desktop: { minWidth: 992 },
  styles: {
    root: {
      boxSizing: "border-box",
      overflowX: "hidden",
      fontFamily: "Barlow, sans-serif",
    },
  },
};

export default theme;
