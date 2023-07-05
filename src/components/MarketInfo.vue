<template>
  <v-expansion-panels>
    <v-expansion-panel>
    <v-expansion-panel-title>
      <v-icon start class="ml-n2">mdi-store</v-icon><div class="ml-6">Market Hours</div>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-timeline density="compact" align="start">
        <v-timeline-item
          v-for="market_time in market_times"
          :key="market_time.day"
          size="x-small"
          dot-color="pink"
        >
          <div class="mb-n3">
            <div class="body-1">
              <strong>{{ market_time.day }}</strong>
            </div>
            <div v-for="time in market_time.times" :key="time">
              <div class="body-2">{{ time.name }} @ {{time.location}} </div>
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-expansion-panel-text>
    </v-expansion-panel>
</v-expansion-panels>
</template>

<script>
export default {
  data: () => ({
    market_times: [
      {
        day: 'Thursday',
        times: ['6:00-7:00pm', '8:00-9:00pm']
      },
      {
        day: 'Friday',
        times: ['8:00-9:00am', '12:00-1:30pm', '6:00-8:30pm']
      },
      {
        day: 'Saturday',
        times: ['8:00-9:00am', '12:00-1:30pm']
      }
    ]
  }),
}
</script>