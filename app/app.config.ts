export default defineAppConfig({
  ui: {
    header: {
      slots: {
        root: 'bg-white/75 dark:bg-zinc-950/75 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50',
        container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-(--ui-header-height)'
      }
    },
    colors: {
      primary: 'green',
      neutral: 'zinc'
    }
  }
})
