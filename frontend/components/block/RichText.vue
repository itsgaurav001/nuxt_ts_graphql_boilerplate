<template>
  <p>This is component {{ data?.__typename }} with text "{{ data?.text }}"</p>
</template>

<script lang="ts" setup>
import type { ComponentBlocksRichText } from '../../types'

const props = defineProps({
  data: Object as PropType<ComponentBlocksRichText>
})

</script>