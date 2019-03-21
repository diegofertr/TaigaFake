<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>TaigaFake</span>
        <!-- <span class="font-weight-light">_ _</span> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="link.text"
        flat
        @click="send(link.url)">
        <span class="mr-2">{{ link.text }}</span>
      </v-btn>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      links: [
        { text: 'Inicio', url: '/' },
        { text: 'Kanban', url: '/kanban' },
        { text: 'Tareas', url: '/todos' },
        { text: 'About', url: '/about' }
      ]
    }
  },
  methods: {
    send (url) {
      this.$router.push(url)
    }
  }
}
</script>
