<script setup lang="ts">
import { definePageMeta, useRequestHeaders } from "#imports";
const headers = useRequestHeaders(["cookie"]);
definePageMeta({
  layout: "topnav",
});

// note: https://github.com/nuxt/nuxt/issues/23589
const chartDataRawHistoric = await $fetch("/temp-json/chartDataHistoric.json", { headers });
console.log(JSON.stringify(chartDataRawHistoric, null, 2));
</script>

<template>
  <div>examples</div>
  <pre>
    {{ JSON.stringify(chartDataRawHistoric, null, 2) }}
  </pre>
</template>
