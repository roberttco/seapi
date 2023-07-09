<template>
  <v-container>
    <v-list>
    <v-list-item>
      Welcome to the 2023 Southeast Asia / Pacific Islander Heritage Camp.
    </v-list-item>
    <v-list-item>
      <v-expansion-panels variant="accordion">
        <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon start class="ml-n2">mdi-store</v-icon><div class="ml-6">Market Hours</div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <LinkList :timeline_data="market_data" />
        </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-icon start class="ml-n2">mdi-calendar-multiple</v-icon><div class="ml-6">Schedule</div>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <LinkList :timeline_data="schedule_data" />
            
          </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels> 
    </v-list-item>
    <v-list-item>
      <v-list nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item.title"
          :prepend-icon="item.icon"
          :to="item.route"
        >
        {{ item.title }}
        </v-list-item>
      </v-list>
    </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import LinkList from '../components/LinkList.vue'
</script>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: 'mdi-account-group',
        title: 'Adult Roles',
        route: 'roles'
      },
    ],
    market_data: [
      {
        name: 'Thursday',
        times: ['6:00-7:00pm', '8:00-9:00pm'],
      },
      {
        name: 'Friday',
        times: ['8:00-9:00am', '12:00-1:30pm', '6:00-8:30pm'],
      },
      {
        name: 'Saturday',
        times: ['8:00-9:00am', '12:00-1:30pm'],
      }
    ],

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
  methods: {
    navigate(arg) {
      const loc = { "name": arg.route }
      alert(arg.route)
      this.$router.push(loc)
    }
  }
}
</script>
