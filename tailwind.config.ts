import type { Config } from "tailwindcss";

interface Keyframes {
  [key: string]: Record<string, string | number>;
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-45deg": "linear-gradient(45deg, #c02e64, #fc5c4a)",
        "gradient-timedeg": " linear-gradient(45deg, #15191e, #1f2530)",
      },

      backgroundColor: {
        btn: "linear-gradient(45deg, #c02e64, #fc5c4a)",
        card: "#222835",
        base: "#1a1f29",
      },
      colors: {
        cardborder: "#2c323d",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      animation: {
        fade: "fadeOut 0.7s ease-in-out",
      },
      keyframes: (Keyframes) => ({
        fadeOut: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      }),
    },
  },
  plugins: [],
};

export default config;
