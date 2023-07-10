<template>
  <div>
    <v-carousel :show-arrows="showArrows" hide-delimiter-background>
      <v-carousel-item
        v-for="(day, i) in appStore.campDays"
        :key="i"
      >
      <v-card :class="this.cardMargins" elevation="4">
        <v-card-title>{{ group }} - {{ day }}</v-card-title>
        <v-card-text>
          <ScheduleList></ScheduleList>
        </v-card-text>
      </v-card>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
import ScheduleList from '../components/ScheduleList.vue'
import { useDisplay } from 'vuetify'

import { useAppStore } from '../store/app'

const appStore = useAppStore()


</script>

<script>
export default {
  props: {
    group: {
      type: String,
    }
  },
  data: () => ({
    showArrows: false,
    cardMargins: "ml-2 mr-2",
    mobile: useDisplay().mobile

  }),
  mounted() {
    if (this.mobile == false)
    {
      this.showArrows = true
      this.cardMargins = "ml-14 mr-14"
    }
  }
}
</script>
