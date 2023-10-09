<template>
  <div>
    <nav class="bg-white border-b border-b-gray-300">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="ml-6 flex space-x-8">
              <nuxt-link
                class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                :class="$route.name === 'auth' ? activeClass : inactiveClass"
                to="/auth"
              >
                Auth
              </nuxt-link>
              <nuxt-link
                class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                :class="$route.name === 'docs' ? activeClass : inactiveClass"
                to="/docs"
              >
                Docs
              </nuxt-link>
              <nuxt-link
                class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                :class="$route.name === 'examples' ? activeClass : inactiveClass"
                to="/examples"
              >
                Examples
              </nuxt-link>
              <nuxt-link
                class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                :class="$route.name === 'blog' ? activeClass : inactiveClass"
                to="/blog"
              >
                Blog
              </nuxt-link>
            </div>
          </div>
          <div class="ml-6 flex items-center">
            <button
              type="button"
              class="bg-white px-4 rounded-full text-sm font-medium text-gray-900 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click="signOut({ callbackUrl: '/' })"
            >
              sign out
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div class="p-6">
      <NuxtPage />
    </div>
  </div>
</template>
<script setup>
import { useAuth } from "#imports";
const { signOut } = useAuth();
const activeClass = "border-indigo-500 text-gray-900";
const inactiveClass = "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700";
</script>
