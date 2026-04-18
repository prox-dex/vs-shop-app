<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const actionLinks = computed(() => [
  {
    label: t('home.explore_price_list'),
    color: 'neutral' as const,
    size: 'xl' as const,
    icon: 'i-ph-cheese-duotone',
    class: 'rounded-full font-extrabold hover:scale-105 active:scale-95 transition-all duration-300',
    to: localePath('/price-list')
  },
  {
    label: t('home.our_story'),
    color: 'neutral' as const,
    variant: 'soft' as const,
    size: 'xl' as const,
    icon: 'i-ph-heart-duotone',
    class: 'rounded-full font-bold border-2 border-amber-200 hover:scale-105 transition-all duration-300',
    to: localePath('/our-story')
  }
])

useSeoMeta({
  title: t('home.seo_title'),
  description: t('home.seo_description')
})
</script>

<template>
  <div class="min-h-screen bg-amber-50/40 dark:bg-zinc-950 flex items-center justify-center px-4 py-14 transition-colors duration-500">
    <div class="relative w-full max-w-4xl">
      <div class="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-amber-200/30 dark:bg-amber-900/10 blur-3xl pointer-events-none" />
      <div class="absolute -bottom-12 -left-10 w-72 h-72 rounded-full bg-orange-100/50 dark:bg-orange-900/10 blur-3xl pointer-events-none" />

      <UCard
        :ui="{
          root: 'overflow-visible bg-white dark:bg-zinc-900 rounded-[3rem] ring-0 dark:ring-1 dark:ring-zinc-800 divide-y-0 shadow-2xl shadow-amber-200/50 dark:shadow-none',
          body: 'relative z-10 px-8 py-14 sm:px-14 sm:py-16'
        }"
      >
        <div class="absolute inset-0 rounded-[3rem] border-[5px] border-amber-200 dark:border-amber-900/30 pointer-events-none" />
        <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-50/70 dark:from-zinc-900/90 to-transparent rounded-b-[3rem] pointer-events-none z-0" />

        <div class="relative z-10 flex flex-col items-center text-center gap-0">
          <h1 class="text-4xl sm:text-6xl md:text-7xl font-black text-amber-900 dark:text-amber-50 leading-[1.05] tracking-tight mb-5">
            {{ t('home.title') }}
          </h1>

          <div class="flex items-center gap-2 mb-6">
            <UIcon name="i-ph-star-four-duotone" class="w-3 h-3 text-amber-300" />
            <span class="w-2 h-2 rounded-full bg-amber-300 inline-block" />
            <UIcon name="i-ph-cheese-duotone" class="w-4 h-4 text-amber-400" />
            <span class="w-2 h-2 rounded-full bg-amber-300 inline-block" />
            <UIcon name="i-ph-star-four-duotone" class="w-3 h-3 text-amber-300" />
          </div>
          <p class="text-sm sm:text-lg text-amber-800/65 dark:text-zinc-400 font-semibold max-w-md leading-relaxed mb-10">
            {{ t('home.subtitle') }}
          </p>
          <div class="relative inline-block mb-10 group px-4">
            <span class="absolute -top-3 -left-1 sm:-top-5 sm:-left-3 text-3xl sm:text-4xl animate-bounce z-20 select-none" style="animation-duration:3s">✨</span>
            <span class="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-5 text-4xl sm:text-5xl animate-bounce z-20 select-none" style="animation-duration:2.5s">🧀</span>
            <span class="absolute top-1/2 -right-6 sm:-right-8 text-2xl sm:text-3xl animate-bounce z-20 select-none" style="animation-duration:3.5s">🍂</span>
            <span class="absolute bottom-6 -left-6 sm:bottom-8 sm:-left-8 text-xl sm:text-2xl animate-bounce z-20 select-none" style="animation-duration:2.8s">⭐</span>
            <div class="absolute inset-0 rounded-[2.5rem] bg-amber-200/40 dark:bg-amber-900/20 scale-110 blur-xl pointer-events-none" />
            <NuxtImg
              src="/vs-logo.png"
              alt="Vuthy & Somphors Logo"
              class="relative z-10 w-full max-w-[240px] sm:max-w-xs rounded-[2.5rem] bg-amber-50 dark:bg-zinc-800 p-4 sm:p-6 border-4 border-dashed border-amber-300 dark:border-amber-900 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2 shadow-xl dark:shadow-none"
              width="320"
              height="320"
            />
          </div>
          <div class="flex flex-col sm:flex-row flex-wrap gap-3 justify-center mb-8 w-full max-w-xs sm:max-w-none">
            <UButton
              v-for="link in actionLinks"
              :key="link.label"
              v-bind="link"
              class="w-full sm:w-auto"
            />
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<style scoped>

</style>