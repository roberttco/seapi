<template>
  <v-expansion-panels>
    <v-expansion-panel>
    <v-expansion-panel-title>
      <v-icon start class="ml-n2">mdi-human</v-icon><div class="ml-6">Adults</div>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-list>
        <v-list-item
          v-for="schedule_record in schedule_records"
          :key="schedule_record.day"
          
        >
          <h5>{{schedule_record.day}}</h5>
          <ul>
            <li v-for="time in schedule_record.times" :key="time" :text="time.location">{{time.name}}</li>
          </ul>
        </v-list-item>
      </v-list>
    </v-expansion-panel-text>
    </v-expansion-panel>
</v-expansion-panels>
</template>

<script>
export default {
  data: () => ({
    schedule_records: [
      {
        day: 'Friday - 10:15-11:45am',
        times: [
          {
            name: "Filipino Healing with Singing Bowls",
            location: "Arkansas"
          },
          {
            name: "Adult Adoptee Panel",
            location: "Lewis Dick Hall"
          },
          {
            name: "Thai Fruit Carving",
            location: "Assembly Hall A"
          }
        ]
      },
      {
        day: 'Friday - 1:10-2:30pm',
        times: [
          {
            name: "HeArt Talks for Parents",
            location: "Arkansas"
          },
          {
            name: "Courageous Conversations",
            location: "Lewis Dick Hall"
          },
          {
            name: "Vietnamese Cooking: Gettin’ Saucy with ATG",
            location: "Everhart Cabin"
          }
        ]
      }
    ]
  }),
}
</script>