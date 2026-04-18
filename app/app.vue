<script setup>
import { km } from '@nuxt/ui/locale'
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - VS Shop Portal` : 'VS Shop Portal'
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#f59e0b' }
  ],
  link: [
    { rel: 'icon', href: '/vs-logo.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  title: 'Vuthy & Somphors - Handcrafted Italian Goodness',
  description: 'Handcrafted fresh cheese, yogurt, and delicacies made with love in Siem Reap, Cambodia. Explore our artisan shop.',
  ogTitle: 'Vuthy & Somphors - VS Shop Portal',
  ogDescription: 'Artisan handcrafted Italian foods and deli items in Siem Reap.',
  ogImage: '/vs-logo.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Vuthy & Somphors - VS Shop Portal',
  twitterDescription: 'Artisan handcrafted Italian foods and deli items in Siem Reap.',
  twitterImage: '/vs-logo.png'
})
</script>

<template>
  <UApp :locale="km">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

