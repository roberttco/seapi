<template>
  <div class="pa-2">
  <h3 class="pa-3">{{ this.title }}</h3>
      <v-text-field
        v-model="search"
        prepend-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        clearable
        persistent-clear
      ></v-text-field>
  <div class="ma-1 pl-3 bg-amber">Click/tap on headings to sort.<br>Scroll or rotate to see more.</div>
  <v-data-table
    :headers="headers"
    :items="rows"
    :search="search"
    :sort-by="initialSortKeys"
    class="elevation-5"
    item-value="name"
    density="compact"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default: (function () { return [] })
    },
    rows: {
      type: Array,
      default: (function () { return [] })
    },
    title: {
      type: String,
      default: "Data"
    },
    defaultSortKeys: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    search: "",
    initialSortKeys: [],
  }),
  computed: {
    virtualRows() {
      return [...Array(this.rows.length).keys()].map(i => {
        const row = { ...this.rows[i % 10] }
        row.name = `${row.name} #${i}`
        return row
      })
    },
  },
  beforeMount() {
    this.initialSortKeys = this.defaultSortKeys.split(",")
  }
}
</script>