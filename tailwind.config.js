/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        starBanner: "url(../dist/img/xl-hero-desktop_2021.png)",
        bituinBanner: "url(../dist/img/hero-mobile_2021.webp)",
      },
      colors: {
        yeellow: "#daa625",
        berde: "#008542",
        dark: "#2b2b2b",
        light: "#ffffff",
        bluee: "#3b5897",
        lberde: "#28941e",
        dlight: "#f2f2f2",
        greey: "#6b7280",
      }
    },
  },
  plugins: [],
}

