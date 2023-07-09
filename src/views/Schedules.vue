<template>
  <div class="ma-3">
    <v-icon icon="mdi-download" class="left text-green-lighten-2 mr-3"></v-icon>Download the PDF schedule
  </div>
  <div v-if="this.$route.query.group">
    <ScheduleCarousel :group="this.$route.query.group"></ScheduleCarousel>
  </div>
  <div v-else>
    <LinkList :timeline_data="schedule_data" />
  </div>
</template>

<script setup>
import LinkList from '../components/LinkList.vue'
import ScheduleCarousel from '../components/ScheduleCarousel.vue'
</script>

<script>
export default {
  data: () => ({
    group: "",
    schedule_data: [
      {
        name: 'Adults',
        link: '/schedules?group=adult'
      },
      {
        name: 'Pre-K, K',
        link: '/schedules?group=prek'
      },
      {
        name: '1-4',
        link: '/schedules?group=elementary'
      }
    ]
  }),
  methods:{
    showgroup()
    {
      alert(this.$route.query.group)
    }
  },

}
</script>