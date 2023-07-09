<template>
  <div>
    <LinkList :timeline_data="market_data" />
  </div>
</template>

<script setup>
import LinkList from '../components/LinkList.vue'
</script>

<script>
export default {
  data: () => ({
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
 }),
}
</script>