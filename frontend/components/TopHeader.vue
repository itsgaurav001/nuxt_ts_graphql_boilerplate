<template>
  <div>
    <h1>{{ topHeader.logoTitle }}</h1><h2>{{ topHeader.logoSubtitle }}</h2>
    <ul>
    <li v-for="item, index in topHeader.leftLinks" :key="index">
      <NavSubItem v-if="item" :item="item"></NavSubItem>
    </li>
  </ul>
  </div>
</template>

<script lang="ts" setup>
import type { TopHeader } from '../types'

const props = defineProps({
  topHeader: { type: Object as PropType<TopHeader>, required: true }
})
</script>