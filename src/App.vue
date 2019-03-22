<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="title text-uppercase">
        <img src="./assets/svg/logo-nav.svg" alt="indice">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="link.text"
        flat
        class="white--text"
        @click="send(link.url)">
        <span class="mr-2">{{ link.text }}</span>
      </v-btn>
      <v-btn
        flat
        class="white--text"
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

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.3;
    top: 0;
    margin: 0;
  }

  .v-toolbar {
    background: url('./assets/img/menu-vert.png');
    background-color: rgba(0, 0, 0, .8) !important;
    height: 4rem;

    img {
      width: 2.5rem;
    }
  }
</style>
