<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/img/logo-color.png')"
          class="my-3"
          contain
          height="150"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Bienvenido a Taiga Fake
        </h1>
        <p class="subheading font-weight-regular">
          Aplicacion para la gestión de proyectos colaborativa,
          <br>página oficial
          <a href="https://taiga.io/" target="_blank">TaigaIO</a>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }

    ]
  })
}
</script>

<style>

</style>
