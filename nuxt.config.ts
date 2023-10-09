import withAmpt from "@ampt/nuxt";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(
  withAmpt({
    typescript: {
      shim: false,
    },
    modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth"],
    /*
  // note: configured in ./tailwind.config.ts instead of here
  tailwindcss: {
    // https://tailwindcss.nuxt.dev/getting-started/options
  },
  */
    auth: {
      // https://sidebase.io/nuxt-auth/configuration/nuxt-config
      // origin: `https://${HOST_DNS}`, // see $AUTH_ORIGIN
      provider: {
        type: "authjs",
      },
      globalAppMiddleware: {
        isEnabled: true,
      },
    },
  })
);
