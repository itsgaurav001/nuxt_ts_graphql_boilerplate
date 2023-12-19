<template>
  <NuxtLink :to="item.url">{{ item.title }}</NuxtLink>
</template>

<script lang="ts" setup>
import type { ComponentNavItem } from '../types'

const props = defineProps({
  item: {
    type: Object as PropType<ComponentNavItem>,
    required: true
  }
})

</script>