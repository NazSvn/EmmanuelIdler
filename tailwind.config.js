/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      variants: {
        extend: {
          after: ["hover"],
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".custom-hover-underline": {
          position: "relative",
          cursor: "pointer",
          "&:after": {
            content: '""',
            position: "absolute",
            bottom: "-2px",
            left: "0",
            height: "1px",
            width: "0",
            backgroundColor: "currentColor",
            transition: "all 0.3s ease-in-out",
          },
          "&:hover": {
            "&:after": {
              marginLeft: "11px",
              width: "60%",
            },
            "&:hover": {
              color: "#45CB85",
            },
          },
          "&:focus-visible": {
            outline: "none",
            "&:after": {
              marginLeft: "11px",
              width: "60%",
            },
            color: "#45CB85",
          },
        },
      });
    },
  ],
};
