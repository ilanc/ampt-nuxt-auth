import { params } from "@ampt/sdk";
if (process.env.NODE_ENV === "development") {
  // use .env
  process.env.AUTH_ORIGIN = "http://localhost:4001";
  process.env.NEXTAUTH_URL = "http://localhost:4001";

  console.log(
    "----------------------------------------\nstarting server locally with env:\n",
    process.env,
    "\n----------------------------------------"
  );
} else {
  // use params
  const p = params();
  console.log(
    "----------------------------------------\nstarting server with params:\n",
    p.list(),
    "\n----------------------------------------"
  );
  process.env.AUTH_ORIGIN = params("AMPT_URL");
  process.env.NEXTAUTH_URL = params("AMPT_URL");
  params().export(["AUTH_SECRET", "NEXTAUTH_SECRET"]);
}

import "@ampt/nuxt/server";
