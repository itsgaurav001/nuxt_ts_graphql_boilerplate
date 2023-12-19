<template>
  <img :src="$getImageUrl(data?.image.data?.attributes?.url)" :alt="data?.image.data?.attributes?.name"/>
</template>

<script lang="ts" setup>
import type { ComponentBlocksSingleImage } from '../../types'
const { $getImageUrl } = useNuxtApp()

const props = defineProps({
  data: Object as PropType<ComponentBlocksSingleImage>
})

</script>