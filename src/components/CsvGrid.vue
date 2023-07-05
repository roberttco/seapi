<template>
  <v-card>
    <v-card-title>
      {{ this.title }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        prepend-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        clearable
        persistent-clear
        variant="outlined"
      ></v-text-field>
    </v-card-title>
  <v-data-table
    :headers="headers"
    :items="rows"
    :search="search"
    :sort-by="initialSortKeys"
    class="elevation-5"
    item-value="name"
    density="compact"
    ></v-data-table>
  </v-card>
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