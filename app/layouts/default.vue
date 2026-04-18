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
  <div class="nunito-font min-h-screen overflow-x-hidden flex flex-col">
    <UHeader v-model:open="open" :items="items" :ui="{ container: 'max-w-7xl px-4 sm:px-6 lg:px-8' }">
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
          
          <div class="pt-8 border-t border-zinc-100 dark:border-zinc-800 w-full text-center">
            <p class="text-xs text-muted font-bold uppercase tracking-widest mb-6">{{ t('contact.title') }}</p>
            <div class="flex justify-center gap-6">
              <UButton icon="i-ph-phone-duotone" variant="soft" color="neutral" class="rounded-full h-12 w-12" />
              <UButton icon="i-ph-paper-plane-tilt-duotone" variant="soft" color="neutral" class="rounded-full h-12 w-12" />
            </div>
          </div>
        </div>
      </template>
    </UHeader>

    <UMain class="flex-1">
      <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
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
