import { extendTheme } from "@chakra-ui/react";

const overrides = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: "10px",
      },
      sizes: {
        small: {
          px: 5,
          h: "50px",
          fontSize: "20px",
          textDecoration: "none",
        },
        medium: {
          px: 7,
          h: "60px",
          fontSize: "25px",
        },
        large: {
          px: 8,
          h: "70px",
          fontSize: "30px",
          borderRadius: "10px",
        },
      },
      variants: {
        primary: {
          bg: "primary",
          color: "#fff",
        },
        secondary: {
          bg: "secondary",
          color: "#fff",
        },
        ghost: {
          bg: "transparent",
          border: "0px solid",
        },
        primaryGhost: {
          bg: "transparent",
          border: "1px solid",
          borderColor: "primary",
        },
        secondaryGhost: {
          bg: "transparent",
          border: "1px solid",
          borderColor: "secondary",
          _hover: {
            color: "#fff",
            bg: "#BB1415",
          },
        },
      },
    },

    Heading: {
      baseStyle: {
        fontFamily: "Poppins",
        fontWeight: "600",
      },
      sizes: {
        small: {
          fontSize: "20px",
        },
        medium: { fontSize: "25px" },
        large: { fontSize: "30px" },
      },
    },
  },
};

const Theme = extendTheme(overrides);

export default Theme;