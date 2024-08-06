/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./**/*.html", "./**/*.templ"],
  theme: {
  extend: {
    fontFamily: {
      mono: ['Reddit Mono']
    },
    colors: {
      "info": {
        "50": "#f7f8fa",
        "100": "#eff1f6",
        "200": "#d8dce8",
        "300": "#c0c7db",
        "400": "#919cbf",
        "500": "#818eb6",
        "600": "#6272A4",
        "700": "#4a567b",
        "800": "#3b4462",
        "900": "#303850",
        "950": "#272e42",
        "DEFAULT": "#6272A4"
      },
      "black": "#000",
      "light": {
        "50": "#fffffe",
        "100": "#fefefe",
        "200": "#fdfdfc",
        "300": "#fcfcfa",
        "400": "#fafaf6",
        "500": "#f9f9f5",
        "600": "#F8F8F2",
        "700": "#babab6",
        "800": "#959591",
        "900": "#7a7a77",
        "950": "#636361",
        "DEFAULT": "#F8F8F2"
      },
      "muted": "#374151",
      "white": "#fff",
      "danger": {
        "50": "#fffbf8",
        "100": "#fff8f0",
        "200": "#ffedda",
        "300": "#ffe3c4",
        "400": "#ffcd98",
        "500": "#ffc689",
        "600": "#FFB86C",
        "700": "#bf8a51",
        "800": "#996e41",
        "900": "#7d5a35",
        "950": "#664a2b",
        "DEFAULT": "#FFB86C"
      },
      "success": {
        "50": "#f6fff8",
        "100": "#eefff2",
        "200": "#d3fede",
        "300": "#b9fdca",
        "400": "#85fca3",
        "500": "#73fb95",
        "600": "#50FA7B",
        "700": "#3cbc5c",
        "800": "#30964a",
        "900": "#277b3c",
        "950": "#206431",
        "DEFAULT": "#50FA7B"
      },
      "warning": {
        "50": "#fff7f7",
        "100": "#ffeeee",
        "200": "#ffd5d5",
        "300": "#ffbbbb",
        "400": "#ff8888",
        "500": "#ff7777",
        "600": "#FF5555",
        "700": "#bf4040",
        "800": "#993333",
        "900": "#7d2a2a",
        "950": "#662222",
        "DEFAULT": "#FF5555"
      },
      "tertiary": {
        "50": "#f9feff",
        "100": "#f3fdff",
        "200": "#e2faff",
        "300": "#d1f6fe",
        "400": "#aef0fe",
        "500": "#a2edfd",
        "600": "#8BE9FD",
        "700": "#68afbe",
        "800": "#538c98",
        "900": "#44727c",
        "950": "#385d65",
        "DEFAULT": "#8BE9FD"
      },
      "secondary": {
        "50": "#f7f8fa",
        "100": "#eff1f6",
        "200": "#d8dce8",
        "300": "#c0c7db",
        "400": "#919cbf",
        "500": "#818eb6",
        "600": "#6272A4",
        "700": "#4a567b",
        "800": "#3b4462",
        "900": "#303850",
        "950": "#272e42",
        "DEFAULT": "#6272A4"
      },
      "dark": {
        "50": "#f4f4f5",
        "100": "#eaeaeb",
        "200": "#c9cacd",
        "300": "#a9aaaf",
        "400": "#696a72",
        "500": "#53555e",
        "600": "#282A36",
        "700": "#1e2029",
        "800": "#181920",
        "900": "#14151a",
        "950": "#101116",
        "DEFAULT": "#282A36"
      },
      "primary": {
        "50": "#f6f6f7",
        "100": "#ecedef",
        "200": "#d0d1d6",
        "300": "#b4b5bd",
        "400": "#7c7e8c",
        "500": "#696c7b",
        "600": "#44475A",
        "700": "#333544",
        "800": "#292b36",
        "900": "#21232c",
        "950": "#1b1c24",
        "DEFAULT": "#44475A"
      },
      "neutral": {
        "50": "#fcfaff",
        "100": "#f8f4fe",
        "200": "#efe4fe",
        "300": "#e5d4fd",
        "400": "#d1b3fb",
        "500": "#caa9fa",
        "600": "#BD93F9",
        "700": "#8e6ebb",
        "800": "#715895",
        "900": "#5d487a",
        "950": "#4c3b64",
        "DEFAULT": "#BD93F9"
      }
    },
    "spacing": {
      "112": "28rem",
      "128": "32rem",
      "144": "36rem",
      "160": "40rem",
      "192": "48rem"
    },
    "fontFamily": {
      "sans": "Reddit Sans,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
      "mono": "Reddit Mono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace"
    },
    "backgroundImage": {
      "arrow-down": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")",
      "caret-down": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='currentFill' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\");"
    },
    "screens": {}
  }
},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwind-dracula')('dracula', true)
  ]
}