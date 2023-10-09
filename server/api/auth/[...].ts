import CredentialsProvider from "next-auth/providers/credentials";
// import GithubProvider from "next-auth/providers/github";
import { NuxtAuthHandler } from "#auth";
// import { params } from "@ampt/sdk";
// params().export(["AUTH_SECRET", "NEXTAUTH_SECRET", "AUTH_ORIGIN", "NEXTAUTH_URL"]);

// see:
// - https://sidebase.io/nuxt-auth/configuration/nuxt-auth-handler
// - https://next-auth.js.org/configuration/options#options
export default NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    // GithubProvider.default({
    //   clientId: process.env.GITHUB_CLIENT_ID as string,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    // }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "local account",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password", placeholder: "password" },
      },
      authorize(credentials: any) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!

        const user = { id: "1", name: "Ilan Copelyn", username: "ilan", password: "ilan123" };

        if (credentials?.username === user.username && credentials?.password === user.password) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          console.error("Warning: Malicious login attempt registered, bad credentials provided");

          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  theme: {
    // colorScheme: "auto", // "auto" | "dark" | "light"
    // brandColor: "", // Hex color code
    logo: "/img/spike-logo.svg", // Absolute URL to image
    buttonText: "#2F87DB", // Hex color code
  },
  pages: {
    // signIn: "/", // hide built-in login screen
  },
});
