import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

// https://tailwindcss.nuxt.dev/tailwind/config

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
