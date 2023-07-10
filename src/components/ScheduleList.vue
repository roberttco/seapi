<template>
  <div>
    <LinkList :links="appStore.marketHours" />
  </div>
</template>

<script setup>
import LinkList from '../components/LinkList.vue'
import { useAppStore } from '../store/app'

const appStore = useAppStore()

</script>

<script>
export default {
  data: () => ({}),
}
</script>