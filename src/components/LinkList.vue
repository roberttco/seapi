<template>
  <v-list density="compact">
    <v-list-item 
    v-for="(item,i) in links"
    :key = "i"
    :value="item"
    :to="item.link"
    >
      <template v-slot="append">
        <div v-if="item.link" class="body-1 text-link" >
          <strong>{{ item.name }}</strong>
        </div>
        <div v-else class="body-1" >
          <strong>{{ item.name }}</strong>
        </div>
        <div v-if="item.times">
          <ul>
            <li v-for="(t,j) in item.times">
              {{ t }}
            </li>
          </ul>
        </div>
      </template>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "ExpandingTimesList"
    },
    links: {
      type: Array,
      default: (function () { return [{}] })
    }
  },
  data: () => ({
  }),
}
</script>

<style lang="css" scoped>
.row-pointer :hover {
  cursor: pointer;
}
</style>