<template>
  <div>
    <TopHeader v-if="topHeaderData?.topHeader.data?.attributes" :topHeader="topHeaderData.topHeader.data.attributes" />
    <Nav v-if="navData?.navigation.data?.attributes" :navigation="navData.navigation.data.attributes"/>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { getNavigation } from '../gql/getNavigation'
import { getTopHeader } from '../gql/getTopHeader'
import { NavigationEntityResponse, TopHeaderEntityResponse } from '../types'

type resNav = { navigation: NavigationEntityResponse }
const { data : navData , error: navError } = await useAsyncQuery<resNav>(getNavigation)

type resTopHeader = { topHeader: TopHeaderEntityResponse }
const { data: topHeaderData, error: topHeaderError } = await useAsyncQuery<resTopHeader>(getTopHeader)

</script>