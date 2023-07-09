<template>
  <div>
    <v-carousel :show-arrows="false" hide-delimiter-background>
      <v-carousel-item
        v-for="(day, i) in days"
        :key="i"
      >
      <v-card>
        <v-card-title>{{upperGroup}} - {{ day }}</v-card-title>
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
</script>

<script>
export default {
  props: {
    group: {
      type: String,
    },
    days: {
      type: Array,
      default: (function() { return ['Thursday', 'Friday', 'Saturday', 'Sunday']})
    }
  },
  data: () => ({}),
  computed: {
    upperGroup()
    {
      return this.group.toUpperCase()
    }
  }
}
</script>
