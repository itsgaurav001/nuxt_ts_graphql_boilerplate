<template>
  <h3>Navigation</h3>
  <ul>
    <li v-for="item, index in navigation.navItems" :key="index">
      <NavSubItem v-if="item" :item="item"></NavSubItem>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { Navigation } from '../types'

const props = defineProps({
  navigation: { type: Object as PropType<Navigation>, required: true }
})
</script>