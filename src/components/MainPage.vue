<template>
  <v-container>
    <v-list>
    <v-list-item>
      Welcome to the 2023 Southeast Asia / Pacific Islander Heritage Camp.
    </v-list-item>
    <v-list-item>
      <MarketInfo></MarketInfo>
    </v-list-item>
    <v-list-item>
      <MapInfo></MapInfo>
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
import MarketInfo from '../components/MarketInfo.vue'
import MapInfo from '../components/MapInfo.vue'
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
      {
        icon: 'mdi-calendar',
        title: 'Schedules',
        route: 'schedules'
      }
    ],
  }),
  methods: {
    navigate(arg) {
      const loc = {"name" : arg.route }
      alert (arg.route)
      this.$router.push(loc)
    }
  }
}
</script>
