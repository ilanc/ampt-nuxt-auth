<script setup lang="ts">
import { definePageMeta } from "#imports";

// no auth
// definePageMeta({ auth: false });

// guest page - i.e. redirect if logged in, show template below if not
definePageMeta({
  // layout: "blank",
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/auth",
  },
});
</script>

<template>
  <div>private</div>
</template>
