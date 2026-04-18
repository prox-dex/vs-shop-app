<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui'

const openSidebar = ref(true)
const openMobileMenu = ref(false)

const colorMode = useColorMode()

const route = useRoute()

// Close sidebar on navigation (mobile only)
watch(() => route.fullPath, () => {
  openMobileMenu.value = false
})

const teams = ref([
  {
    label: 'Nuxt',
    avatar: {
      src: 'https://github.com/nuxt.png',
      alt: 'Nuxt'
    }
  },
  {
    label: 'Vue',
    avatar: {
      src: 'https://github.com/vuejs.png',
      alt: 'Vue'
    }
  },
  {
    label: 'UnJS',
    avatar: {
      src: 'https://github.com/unjs.png',
      alt: 'UnJS'
    }
  }
])
const selectedTeam = ref(teams.value[0])

const teamsItems = computed<DropdownMenuItem[][]>(() => {
  return [
    teams.value.map((team, index) => ({
      ...team,
      kbds: ['meta', String(index + 1)],
      onSelect() {
        selectedTeam.value = team
      }
    })),
    [
      {
        label: 'Create team',
        icon: 'i-lucide-circle-plus'
      }
    ]
  ]
})

function getItems(state: 'collapsed' | 'expanded') {
  return [
    {
      label: 'Inbox',
      icon: 'i-lucide-inbox',
      badge: '4'
    },
    {
      label: 'Issues',
      icon: 'i-lucide-square-dot'
    },
    {
      label: 'Activity',
      icon: 'i-lucide-square-activity'
    },
    {
      label: 'Settings',
      icon: 'i-lucide-settings',
      defaultOpen: true,
      children:
        state === 'expanded'
          ? [
              {
                label: 'General',
                icon: 'i-lucide-house'
              },
              {
                label: 'Team',
                icon: 'i-lucide-users'
              },
              {
                label: 'Billing',
                icon: 'i-lucide-credit-card'
              }
            ]
          : []
    }
  ] satisfies NavigationMenuItem[]
}

const user = ref({
  name: 'Benjamin Canac',
  avatar: {
    src: 'https://github.com/benjamincanac.png',
    alt: 'Benjamin Canac'
  }
})

const userItems = computed<DropdownMenuItem[][]>(() => [
  [
    {
      label: 'Profile',
      icon: 'i-lucide-user'
    },
    {
      label: 'Billing',
      icon: 'i-lucide-credit-card'
    },
    {
      label: 'Settings',
      icon: 'i-lucide-settings',
      to: '/settings'
    }
  ],
  [
    {
      label: 'Appearance',
      icon: 'i-lucide-sun-moon',
      children: [
        {
          label: 'Light',
          icon: 'i-lucide-sun',
          type: 'checkbox',
          checked: colorMode.value === 'light',
          onUpdateChecked(checked: boolean) {
            if (checked) {
              colorMode.preference = 'light'
            }
          },
          onSelect(e: Event) {
            e.preventDefault()
          }
        },
        {
          label: 'Dark',
          icon: 'i-lucide-moon',
          type: 'checkbox',
          checked: colorMode.value === 'dark',
          onUpdateChecked(checked: boolean) {
            if (checked) {
              colorMode.preference = 'dark'
            }
          },
          onSelect(e: Event) {
            e.preventDefault()
          }
        }
      ]
    }
  ],
  [
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      to: 'https://github.com/nuxt/ui',
      target: '_blank'
    },
    {
      label: 'Log out',
      icon: 'i-lucide-log-out'
    }
  ]
])

defineShortcuts(extractShortcuts(teamsItems.value))
</script>

<template>
  <div class="flex flex-1 h-screen overflow-hidden">
    <!-- Desktop Sidebar -->
    <USidebar
      v-model:open="openSidebar"
      collapsible="icon"
      rail
      class="hidden md:flex"
      :ui="{
        container: 'h-full',
        inner: 'bg-elevated/25 divide-transparent',
        body: 'py-0'
      }"
    >
      <template #header>
        <UDropdownMenu
          :items="teamsItems"
          :content="{ align: 'start', collisionPadding: 12 }"
          :ui="{ content: 'w-(--reka-dropdown-menu-trigger-width) min-w-48' }"
        >
          <UButton
            v-bind="selectedTeam"
            trailing-icon="i-lucide-chevrons-up-down"
            color="neutral"
            variant="ghost"
            square
            class="w-full data-[state=open]:bg-elevated overflow-hidden"
            :ui="{
              trailingIcon: 'text-dimmed ms-auto'
            }"
          />
        </UDropdownMenu>
      </template>

      <template #default="{ state }">
        <UNavigationMenu
          :key="state"
          :items="getItems(state)"
          orientation="vertical"
          :ui="{ link: 'p-1.5 overflow-hidden' }"
        />
      </template>

      <template #footer>
        <UDropdownMenu
          :items="userItems"
          :content="{ align: 'center', collisionPadding: 12 }"
          :ui="{ content: 'w-(--reka-dropdown-menu-trigger-width) min-w-48' }"
        >
          <UButton
            v-bind="user"
            :label="user?.name"
            trailing-icon="i-lucide-chevrons-up-down"
            color="neutral"
            variant="ghost"
            square
            class="w-full data-[state=open]:bg-elevated overflow-hidden"
            :ui="{
              trailingIcon: 'text-dimmed ms-auto'
            }"
          />
        </UDropdownMenu>
      </template>
    </USidebar>

    <!-- Mobile Sidebar Drawer -->
    <UDrawer v-model:open="openMobileMenu" direction="left" class="md:hidden">
      <template #content>
        <div class="w-72 h-full flex flex-col bg-(--ui-bg)">
          <div class="p-4 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800">
            <UDropdownMenu
              :items="teamsItems"
              :content="{ align: 'start', collisionPadding: 12 }"
              :ui="{ content: 'w-64' }"
            >
              <UButton
                v-bind="selectedTeam"
                trailing-icon="i-lucide-chevrons-up-down"
                color="neutral"
                variant="ghost"
                class="flex-1 justify-start overflow-hidden px-2 mr-2"
                :ui="{ trailingIcon: 'text-dimmed ms-auto' }"
              />
            </UDropdownMenu>
            <UButton
              icon="i-lucide-x"
              color="neutral"
              variant="ghost"
              @click="openMobileMenu = false"
            />
          </div>
          <div class="flex-1 overflow-y-auto p-4">
            <UNavigationMenu
              :items="getItems('expanded')"
              orientation="vertical"
              class="w-full"
            />
          </div>
          <div class="p-4 border-t border-zinc-100 dark:border-zinc-800">
            <UDropdownMenu
              :items="userItems"
              :content="{ align: 'center', collisionPadding: 12 }"
              :ui="{ content: 'w-64' }"
            >
              <UButton
                v-bind="user"
                :label="user?.name"
                trailing-icon="i-lucide-chevrons-up-down"
                color="neutral"
                variant="ghost"
                class="w-full justify-start overflow-hidden px-2"
                :ui="{ trailingIcon: 'text-dimmed ms-auto' }"
              />
            </UDropdownMenu>
          </div>
        </div>
      </template>

      <!-- Mobile Toggle Button (Visible on mobile only) -->
      <div class="flex md:hidden h-(--ui-header-height) shrink-0 items-center px-4 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-20 bg-(--ui-bg)/80 backdrop-blur-md w-full">
        <UButton
          icon="i-lucide-panel-left"
          color="neutral"
          variant="ghost"
          aria-label="Toggle sidebar"
          @click="openMobileMenu = true"
        />
      </div>
    </UDrawer>

    <div class="flex-1 flex flex-col min-w-0">
      <!-- Desktop Header (Visible on desktop only) -->
      <div class="hidden md:flex h-(--ui-header-height) shrink-0 items-center px-4 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-20 bg-(--ui-bg)/80 backdrop-blur-md">
        <UButton
          icon="i-lucide-panel-left"
          color="neutral"
          variant="ghost"
          aria-label="Toggle sidebar"
          @click="openSidebar = !openSidebar"
        />
      </div>

      <div class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <slot />
      </div>
    </div>
  </div>
</template>
