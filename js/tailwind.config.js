tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
      },
      container: {
        center: true,
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      borderWidth: {
        borderWidth: "50px 30px 0 30px",
      },
    },
    screens: {
      xs: "320px",

      sm: "576px",

      md: "768px",

      lg: "992px",

      xl: "1200px",

      "2xl": "1400px",
    },
  },
};
