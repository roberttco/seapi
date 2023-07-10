<template>
  <v-app-bar color="primary">
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>
      SEAPI 2023
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <!-- <v-icon start>mdi-clock</v-icon> <div class="mr-5">{{ clockString }}</div>  -->
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-list nav>
      <v-list-item
        v-for="item in items"
          :key="item.title"
          :prepend-icon="item.icon"
          :title="item.title"
          :to="item.route"
      ></v-list-item>
    </v-list>
    
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      {
        icon: 'mdi-home',
        title: 'Home',
        route: '/',
      },
      {
        icon: 'mdi-map',
        title: 'Maps',
        route: 'maps',
      },
      {
        icon: 'mdi-calendar',
        title: 'Schedules',
        route: 'schedules',
      },
      {
        icon: 'mdi-human-female-boy',
        title: 'Roles',
        route: 'roles',
      },
      {
        icon: 'mdi-store',
        title: 'Market',
        route: 'market',
      },
    ],
    clockString: "12:00:00",
    timer: undefined
  }),

  methods: {
    // setDateTime() {
    //   const date = new Date();
    //   this.clockString = date.toLocaleTimeString();
    // }
  },
  beforeMount() {
    // this.timer = setInterval(this.setDateTime, 1000);
  },
  beforeUnmount() {
    // clearInterval(this.timer);
  }
}
</script>
