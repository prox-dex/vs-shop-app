<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
const open = ref(false)

const { t } = useI18n()
const localePath = useLocalePath()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t('nav.price_list'),
    to: localePath('/price-list'),
    active: route.path.includes('/price-list')
  },
  {
    label: t('nav.contact_us'),
    to: localePath('/contact-us'),
    active: route.path.includes('/contact-us')
  }
])

watch(() => route.fullPath, () => {
  open.value = false
})
</script>

<template>
  <div class="bg-amber-50/40 dark:bg-zinc-950 nunito-font min-h-screen flex flex-col">
    <UHeader v-model:open="open" :items="items" sticky>
      <template #title>
        <AppLogo class="h-12 sm:h-16 w-auto" />
      </template>

      <UNavigationMenu :items="items" class="hidden md:flex" />

      <template #right>
        <LanguageSwitcher />
        <UColorModeButton />
      </template>

      <template #body>
        <div class="px-2 flex flex-col gap-10">
          <UNavigationMenu 
            :items="items" 
            orientation="vertical" 
            class="w-full"
          />
        </div>
      </template>
    </UHeader>

    <UMain class="flex-1">
      <div class="max-w-7xl mx-auto w-full">
        <slot />
      </div>
    </UMain>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800;900&family=Kantumruy+Pro:wght@400;600;700&display=swap');

.nunito-font {
  font-family: 'Nunito', 'Kantumruy Pro', sans-serif;
}
</style>
