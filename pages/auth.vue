<script setup lang="ts">
import { definePageMeta, useAuth, useFetch, useRequestHeaders } from "#imports";
definePageMeta({
  layout: "topnav",
});

const { data, status, lastRefreshedAt, getCsrfToken, getProviders } = useAuth();
const providers = await getProviders();
const csrfToken = await getCsrfToken();
const headers = useRequestHeaders(["cookie"]) as HeadersInit;
const { data: token } = await useFetch("/api/token", { headers });
</script>

<template>
  <div>
    <h1>Authentication Overview</h1>
    <section class="py-8">
      <pre>Status: {{ status }}</pre>
      <pre>Data: {{ data || "no session data present, are you logged in?" }}</pre>
      <pre>Last refreshed at: {{ lastRefreshedAt || "no refresh happened" }}</pre>
      <pre>Decoded JWT token: {{ token || "no token present, are you logged in?" }}</pre>
      <pre>CSRF Token: {{ csrfToken }}</pre>
      <pre>Providers: {{ providers }}</pre>
    </section>
  </div>
</template>
