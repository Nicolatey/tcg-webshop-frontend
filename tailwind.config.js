const { colors } = require(`tailwindcss/defaultTheme`)

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    fontFamily: {
      custom: ["ROG Fonts", "sans-serif"],
    },
    extend: {
      colors: {
        primary: colors.indigo,
        white: "#FFFFFF",
        yellow: "#FED76B",
        lightblue: "#76CCFD",
        strawberry: "#EB4949",
        strawcherry: "#BD2222",
        darkbrown: "#6E4B0E",
        pauwblauw: "#1A35A2",
        cherry: "#840000",
        black: "#000000",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          md: "2rem",
        },
      },
    },
  },
}
