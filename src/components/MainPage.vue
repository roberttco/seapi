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
          <LinkList :links="appStore.marketHours" />
        </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title>
            <v-icon start class="ml-n2">mdi-calendar-multiple</v-icon><div class="ml-6">Schedule</div>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <LinkList :links="appStore.schedule_groups" />
            
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
import { useAppStore } from '../store/app'

const appStore = useAppStore()

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
    ]
  })
}
</script>
