<script setup lang="ts">
const { t } = useI18n()

const contactInfo = computed(() => [
  { icon: 'i-ph-phone-duotone', label: t('contact.phone'), value: '+855 12 345 678', to: 'tel:+85512345678' },
  { icon: 'i-ph-paper-plane-tilt-duotone', label: t('contact.telegram'), value: '@roast_bean_by_prox_dex', to: 'https://t.me/roast_bean_by_prox_dex' },
  { icon: 'i-ph-map-pin-duotone', label: t('contact.location'), value: 'Siem Reap, Cambodia', to: 'https://maps.app.goo.gl/bSdYLXNhtog8MbbX7' }
])

useSeoMeta({
  title: t('contact.seo_title'),
  description: t('contact.seo_description')
})
</script>

<template>
  <div class="bg-amber-50/40 dark:bg-zinc-950 flex items-center justify-center px-4 py-14 transition-colors duration-500 overflow-hidden">
    <div class="relative w-full max-w-2xl">
      <div class="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-amber-200/30 dark:bg-amber-900/10 blur-3xl pointer-events-none" />
      <div class="absolute -bottom-12 -left-10 w-72 h-72 rounded-full bg-orange-100/50 dark:bg-orange-900/10 blur-3xl pointer-events-none" />

      <UCard
        :ui="{
          root: 'overflow-visible bg-white dark:bg-zinc-900 rounded-[2.5rem] sm:rounded-[3rem] ring-0 dark:ring-1 dark:ring-zinc-800 divide-y-0 shadow-2xl shadow-amber-200/50 dark:shadow-none',
          body: 'relative z-10 px-6 py-10 sm:px-14 sm:py-16'
        }"
      >
        <div class="absolute inset-0 rounded-[3rem] pointer-events-none" />

        <div class="flex flex-col items-center text-center">
          
          <div class="mb-10 text-center">
            <h1 class="text-4xl sm:text-5xl font-black text-amber-900 dark:text-amber-50 tracking-tight mb-3">
              {{ t('contact.title') }}
            </h1>
            <p class="text-amber-800/60 dark:text-zinc-400 font-semibold max-w-sm mx-auto">
              {{ t('contact.subtitle') }}
            </p>
          </div>

          <div class="w-full max-w-md space-y-4 mb-10">
            <NuxtLink
              v-for="info in contactInfo"
              :key="info.label"
              :to="info.to"
              target="_blank"
              class="flex items-center gap-5 p-5 rounded-[2rem] bg-amber-50 dark:bg-zinc-800/50 border-2 border-amber-100 dark:border-amber-900/20 hover:border-amber-300 dark:hover:border-amber-700 transition-all group text-left"
            >
              <div class="text-amber-500 group-hover:scale-110 transition-transform">
                <UIcon :name="info.icon" class="w-6 h-6" />
              </div>
              <div>
                <p class="text-xs font-bold text-amber-800/50 dark:text-zinc-500 uppercase tracking-widest">{{ info.label }}</p>
                <p class="text-lg font-bold text-amber-900 dark:text-amber-100">{{ info.value }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

