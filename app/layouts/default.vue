<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Price List',
    to: '/price-list',
    active: route.path.startsWith('/price-list')
  },
  {
    label: 'Contact Us',
    to: '/contact-us',
    active: route.path.startsWith('/contact-us')
  }
])
</script>

<template>
  <div class="nunito-font">
    <UHeader>
    <template #title>
      <AppLogo class="h-16 w-auto" />
    </template>

    <UNavigationMenu :items="items" />

      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <slot />
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Built with Nuxt UI • © {{ new Date().getFullYear() }}
        </p>
      </template>
    </UFooter>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800;900&display=swap');

.nunito-font {
  font-family: 'Nunito', sans-serif;
}
</style>

