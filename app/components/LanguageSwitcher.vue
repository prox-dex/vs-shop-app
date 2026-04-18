<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const currentLocale = computed(() => locales.value.find(l => l.code === locale.value))

const items = computed(() => [
  locales.value.map(l => ({
    label: l.name,
    icon: l.code === 'en' ? 'i-ph-translate-duotone' : 'i-ph-text-aa-duotone',
    onSelect: () => setLocale(l.code)
  }))
])
</script>

<template>
  <UDropdownMenu 
    :items="items" 
    :content="{ 
      align: 'end',
      sideOffset: 8
    }"
    :ui="{ content: 'min-w-[120px]' }"
    portal
  >
    <UButton
      color="neutral"
      variant="ghost"
      square
      aria-label="Change language"
    >
      <template #leading>
        <span class="text-xs font-black uppercase tracking-widest text-amber-600 dark:text-amber-400">
          {{ locale }}
        </span>
      </template>
      <template #trailing>
        <UIcon name="i-ph-caret-down-bold" class="w-3 h-3 opacity-50" />
      </template>
    </UButton>
  </UDropdownMenu>
</template>
