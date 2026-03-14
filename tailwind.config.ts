import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ef",
          100: "#dceedd",
          200: "#b9dcb8",
          300: "#8ec48c",
          400: "#63ab60",
          500: "#429446",
          600: "#2e7d32",
          700: "#225f26",
          800: "#18451c",
          900: "#102e12"
        },
        warm: {
          50: "#fbf7f1",
          100: "#f3ead9",
          200: "#e4d3b0",
          300: "#d2b78a",
          400: "#be9866",
          500: "#ab7d48",
          600: "#8b6338",
          700: "#6a4c2b",
          800: "#49331d",
          900: "#2c1f11"
        },
        grey: {
          50: "#f6f7f6",
          100: "#e9ece9",
          200: "#d0d6d0",
          300: "#b4beb4",
          400: "#7f8c7f",
          500: "#5d675d",
          600: "#444b44",
          700: "#343834",
          800: "#232623",
          900: "#151715"
        },
        earth: {
          50: "#f7f2eb",
          100: "#e9dcc7",
          200: "#d5bc95",
          300: "#c09b64",
          400: "#aa7d3f",
          500: "#906328",
          600: "#74501f",
          700: "#563c16",
          800: "#39270e",
          900: "#201605"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        elevated: "0 1px 3px rgba(107,123,110,0.08), 0 4px 12px rgba(107,123,110,0.06)",
        floating: "0 4px 12px rgba(107,123,110,0.1), 0 16px 40px rgba(107,123,110,0.08)",
        hover: "0 8px 24px rgba(61,139,65,0.12), 0 2px 8px rgba(107,123,110,0.08)",
        product: "0 2px 8px rgba(107,123,110,0.06), 0 8px 24px rgba(107,123,110,0.08)",
        "product-hover": "0 8px 32px rgba(61,139,65,0.14), 0 4px 12px rgba(107,123,110,0.08)"
      },
      maxWidth: {
        prosewide: "72rem"
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)"
      }
    }
  },
  plugins: [],
};

export default config;
