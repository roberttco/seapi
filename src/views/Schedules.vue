<template>
  <div class="ma-3">
    <v-icon icon="mdi-download" class="left text-green-lighten-2 mr-3"></v-icon>Download the PDF schedule
  </div>
  <div v-if="this.$route.query.group">
    <ScheduleCarousel :group="this.$route.query.group"></ScheduleCarousel>
  </div>
  <div v-else>
    <LinkList :links="appStore.schedule_groups" />
  </div>
</template>

<script setup>
import LinkList from '../components/LinkList.vue'
import ScheduleCarousel from '../components/ScheduleCarousel.vue'
import { useAppStore } from '../store/app'

const appStore = useAppStore()

</script>

<script>
export default {
  data: () => ({})
}
</script>