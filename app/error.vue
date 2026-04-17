<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen bg-amber-50/40 dark:bg-zinc-950 flex items-center justify-center px-4 py-14 transition-colors duration-500">
    <div class="relative w-full max-w-2xl">
      <div class="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-amber-200/30 dark:bg-amber-900/10 blur-3xl pointer-events-none" />
      <div class="absolute -bottom-12 -left-10 w-72 h-72 rounded-full bg-orange-100/50 dark:bg-orange-900/10 blur-3xl pointer-events-none" />

      <UCard
        :ui="{
          root: 'overflow-visible bg-white dark:bg-zinc-900 rounded-[3rem] ring-0 dark:ring-1 dark:ring-zinc-800 divide-y-0 shadow-2xl shadow-amber-200/50 dark:shadow-none',
          body: 'relative z-10 px-8 py-14 sm:px-14 sm:py-20'
        }"
      >
        <div class="absolute inset-0 rounded-[3rem] border-[5px] border-amber-200 dark:border-amber-900/30 pointer-events-none" />

        <div class="relative z-10 flex flex-col items-center text-center">
          
          <div class="relative mb-10">
            <h2 class="text-8xl sm:text-9xl font-black text-amber-500/20 dark:text-amber-500/10 select-none">
              {{ error.statusCode }}
            </h2>
            <div class="absolute inset-0 flex items-center justify-center">
               <span class="text-6xl animate-bounce">🧀</span>
            </div>
          </div>

          <h1 class="text-4xl font-black text-amber-900 dark:text-amber-50 tracking-tight mb-4">
            Oops! Something went wrong.
          </h1>
          
          <p class="text-lg text-amber-800/60 dark:text-zinc-400 font-semibold max-w-sm mb-12">
            {{ error.message || 'It seems the mouse ate this page. Let\'s get you back to safety!' }}
          </p>

          <UButton
            label="Back to Safety"
            icon="i-ph-house-duotone"
            size="xl"
            color="neutral"
            class="rounded-full font-extrabold px-10 py-4 hover:scale-105 active:scale-95 transition-all duration-300 bg-amber-500 hover:bg-amber-600 text-white border-0"
            @click="handleError"
          />
        </div>
      </UCard>
    </div>
  </div>
</template>

