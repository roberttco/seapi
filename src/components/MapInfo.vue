<template>
  <v-expansion-panels>
    <v-expansion-panel>
    <v-expansion-panel-title>
      <v-icon start class="ml-n2">mdi-map</v-icon><div class="ml-6">Maps</div>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-timeline density="compact" align="start">
        <v-timeline-item
          v-for="map in maps"
          :key="map.name"
          size="x-small"
          dot-color="pink"
        >
          <v-btn size="small" class="mt-n2 ">{{map.name}}</v-btn>
          <!-- <div class="body-2" @click="map_click(map.value)">{{ map.name }}</div> -->
        </v-timeline-item>
      </v-timeline>
    </v-expansion-panel-text>
    </v-expansion-panel>
</v-expansion-panels>
</template>

<script>
export default {
  data: () => ({
    maps: [
      {
        name: 'Camp',
        value: 'camp'
      },
      {
        name: 'YMCA',
        value: 'YMCA'
      },
    ]
  }),

  methods: {
    map_click(map) {
      alert("map " + map + " clicked")
    }
  }
}
</script>