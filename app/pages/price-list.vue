<script setup lang="ts">
const products = [
  { category: 'Soft-Fresh Cheese', name: 'Fresh Burrata 80gr', packing: '1 Pcs = 80gr', as: 'Jar', price: 2.75 },
  { category: 'Soft-Fresh Cheese', name: 'Fresh Burrata 125gr', packing: '1 Pcs = 125gr+', as: 'Jar', price: 3.25 },
  { category: 'Soft-Fresh Cheese', name: 'Fresh Stracciatella', packing: '1 Jar = 250gr', as: 'Jar', price: 5.00 },
  { category: 'Soft-Fresh Cheese', name: 'Treccia Mozzarella', packing: '1 Kg', as: 'Kg', price: 15.00 },
  { category: 'Soft-Fresh Cheese', name: 'Cherry Mozzarella balls', packing: '1 Jar = 200gr', as: 'Jar', price: 5.00 },
  { category: 'Soft-Fresh Cheese', name: 'Bocconcini Mozzarella balls', packing: '1 Jar = 100gr / 1 Pcs', as: 'Jar', price: 2.10 },
  { category: 'Soft-Fresh Cheese', name: 'Ricotta', packing: '1 Pcs = 500gr+', as: 'Pcs/Kg', price: 8.00 },
  { category: 'Soft-Fresh Cheese', name: 'Feta', packing: '1000gr', as: 'Kg', price: 16.00 },
  { category: 'Soft-Fresh Cheese', name: 'Smoked Scamorza', packing: '1 Kg', as: 'Kg', price: 20.00 },
  
  { category: 'Yogurt', name: 'Vanilla Yogurt', packing: '110 ml', as: 'Jar', price: 0.50 },
  { category: 'Yogurt', name: 'Coconut Yogurt', packing: '110 ml', as: 'Jar', price: 0.50 },
  { category: 'Yogurt', name: 'Orange Yogurt', packing: '110 ml', as: 'Jar', price: 0.50 },
  { category: 'Yogurt', name: 'Pliant Yogurt', packing: '110 ml', as: 'Jar', price: 0.50 },
  { category: 'Yogurt', name: 'Pineapple Yogurt', packing: '110 ml', as: 'Jar', price: 0.50 },
  { category: 'Yogurt', name: 'Strawberry Yogurt', packing: '110 ml', as: 'Jar', price: 0.50 },
  { category: 'Yogurt', name: 'Passion Yogurt', packing: '110 ml', as: 'Jar', price: 0.50 },
  { category: 'Yogurt', name: 'Pliant Yogurt', packing: '500 ml', as: 'Jar', price: 3.00 },
  { category: 'Yogurt', name: 'Pliant Yogurt', packing: '1000 ml', as: 'Jar', price: 5.50 },
  
  { category: 'Meats', name: 'Smoked Bacon Slice', packing: '1 Kg', as: 'Kg', price: 11.10 },
  { category: 'Meats', name: 'Cooked Ham', packing: '1 Kg', as: 'Kg', price: 14.00 },
  { category: 'Meats', name: 'Breakfast sausage (Chicken)', packing: '1 Kg (25-26 Pcs)', as: 'Kg', price: 9.90 },
  { category: 'Meats', name: 'Smoke Duck Breast', packing: '1 Kg', as: 'Kg', price: 16.90 },
  { category: 'Meats', name: 'Smoke Chicken Breast', packing: '1 Kg', as: 'Kg', price: 13.90 }
]

const { t } = useI18n()

const searchQuery = ref('')

const filteredProducts = computed(() => {
  if (!searchQuery.value) return products
  return products.filter(p => p.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

const categories = computed(() => {
  const cats = [...new Set(filteredProducts.value.map(p => p.category))]
  return cats
})

const getProductsByCategory = (cat: string) => {
  return filteredProducts.value.filter(p => p.category === cat)
}
useSeoMeta({
  title: t('price_list.seo_title'),
  description: t('price_list.seo_description')
})
</script>

<template>
  <div class="min-h-screen bg-amber-50/40 dark:bg-zinc-950 flex flex-col items-center px-4 py-14 transition-colors duration-500 overflow-hidden">
    <div class="relative w-full max-w-5xl mx-auto">
      <div class="absolute -top-10 -right-10 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-amber-200/30 dark:bg-amber-900/10 blur-3xl pointer-events-none" />
      <div class="absolute -bottom-12 -left-10 w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-orange-100/50 dark:bg-orange-900/10 blur-3xl pointer-events-none" />

      <div class="mb-12 text-center relative z-10">
        <h1 class="text-5xl sm:text-6xl font-black text-amber-900 dark:text-amber-50 tracking-tight mb-4">
          {{ t('price_list.title') }}
        </h1>
        <p class="text-amber-800/60 dark:text-zinc-400 font-semibold max-w-lg mx-auto mb-8">
          {{ t('price_list.subtitle') }}
        </p>
        
        <div class="max-w-md mx-auto relative group">
          <UInput
            v-model="searchQuery"
            icon="i-ph-magnifying-glass-duotone"
            :placeholder="t('price_list.search_placeholder')"
            size="xl"
            class="rounded-2xl"
            :ui="{ 
              base: 'rounded-2xl bg-white dark:bg-zinc-900 ring-0 h-14 font-semibold shadow-lg shadow-amber-200/20 dark:shadow-none transition-all'
            }"
          >
            <template #trailing>
              <div class="flex items-center pr-2">
                <UIcon name="i-ph-cheese-duotone" class="w-6 h-6 text-amber-400 opacity-50" />
              </div>
            </template>
          </UInput>
        </div>
      </div>

      <UCard
        :ui="{
          root: 'overflow-visible bg-white dark:bg-zinc-900 rounded-[2.5rem] sm:rounded-[3rem] ring-0 dark:ring-1 dark:ring-zinc-800 divide-y-0 shadow-2xl shadow-amber-200/50 dark:shadow-none',
          body: 'relative z-10 px-4 py-6 sm:px-8 sm:py-8'
        }"
      >
        <div class="absolute inset-0 rounded-[3rem] pointer-events-none" />

        <div v-if="categories.length === 0" class="py-20 text-center">
          <UIcon name="i-ph-smiley-blank-duotone" class="w-16 h-16 text-zinc-300 mb-4" />
          <p class="text-zinc-500 font-bold">{{ t('price_list.no_items') }}</p>
        </div>

        <div v-for="cat in categories" :key="cat" class="mb-12 last:mb-0">
          <div class="px-8 mb-6 flex items-center gap-3">
             <h2 class="text-2xl font-black text-amber-900 dark:text-amber-50 tracking-tight">{{ cat }}</h2>
             <div class="flex-1 h-px bg-amber-100 dark:bg-zinc-800 ml-4 opacity-50" />
          </div>

          <div class="overflow-x-auto sm:overflow-visible">
            <table class="w-full text-left">
              <thead>
                <tr class="text-amber-800/40 dark:text-zinc-600 text-[10px] sm:text-xs font-black uppercase tracking-widest border-b border-amber-100/50 dark:border-zinc-800/50">
                  <th class="px-4 sm:px-8 py-4">{{ t('price_list.columns.item_name') }}</th>
                  <th class="hidden sm:table-cell px-8 py-4">{{ t('price_list.columns.packing') }}</th>
                  <th class="hidden md:table-cell px-8 py-4">{{ t('price_list.columns.as') }}</th>
                  <th class="px-4 sm:px-8 py-4 text-right">{{ t('price_list.columns.price') }}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-amber-50/50 dark:divide-zinc-800/50">
                <tr 
                  v-for="product in getProductsByCategory(cat)" 
                  :key="product.name"
                  class="group hover:bg-amber-50/30 dark:hover:bg-amber-900/5 transition-colors"
                >
                  <td class="px-4 sm:px-8 py-4 sm:py-5">
                    <div class="flex flex-col">
                      <span class="font-bold text-amber-900 dark:text-amber-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors text-sm sm:text-base">
                        {{ product.name }}
                      </span>
                      <span class="sm:hidden text-[10px] font-bold text-amber-800/40 dark:text-zinc-500 uppercase tracking-tighter mt-0.5">
                        {{ product.packing }} • {{ product.as }}
                      </span>
                    </div>
                  </td>
                  <td class="hidden sm:table-cell px-8 py-5">
                    <span class="text-amber-800/60 dark:text-zinc-500 font-semibold text-sm">{{ product.packing }}</span>
                  </td>
                  <td class="hidden md:table-cell px-8 py-5">
                    <UBadge variant="soft" color="neutral" class="rounded-full font-bold px-3 py-1 bg-amber-100 dark:bg-zinc-800 text-amber-700 dark:text-zinc-400 border-0 text-[10px]">
                      {{ product.as }}
                    </UBadge>
                  </td>
                  <td class="px-4 sm:px-8 py-4 sm:py-5 text-right">
                    <span class="text-base sm:text-lg font-black text-amber-600 dark:text-amber-500">
                      ${{ product.price.toFixed(2) }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>
