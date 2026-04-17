<script setup>
import { km } from '@nuxt/ui/locale'
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/vs-logo.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'VS Shop Portal'
const description = 'VS Shop Portal'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
})
</script>

<template>
  <UApp :locale="km">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

