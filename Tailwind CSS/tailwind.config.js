module.exports = {
  purge: {
    enabled: true,
    content: ["./dist/index.html"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "2rem"
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
