<template>
  <v-container fluid>
    <h1 class="text-xs-center">Kanban Section</h1>
    <hr><br />
    <v-layout wrap>
      <v-flex md6>
        <div class="draggable-left">
          <h3 class="titulo-draggable">PENDIENTES</h3>
          <draggable class="list-group" :list="list1" group="people" @change="log">
            <v-card 
              color="grey lighten-4"
              class="blue--text list-group-item cajita"
              v-for="element in list1"
              :key="element.name">
              <v-card-title primary-title>
                <div class="title">{{ element.name }}</div>
                <v-spacer></v-spacer>
                <v-btn flat icon dark color="warning">
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-title>
            </v-card>
          </draggable>
        </div>
      </v-flex>
      <v-flex md6>
        <div class="draggable-right">
          <h3 class="titulo-draggable">COMPLETADOS</h3>
          <draggable class="list-group" :list="list2" group="people" @change="log">
            <v-card 
              color="teal lighten-4" 
              class="teal--text list-group-item cajita"
              v-for="element in list2"
              :key="element.name">
              <v-card-title primary-title>
                <div class="title">{{ element.name }}</div>
                <v-spacer></v-spacer>
                <v-btn flat icon dark color="warning">
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-title>
            </v-card>
          </draggable>
        </div>
      </v-flex>

      <rawDisplayer class="col-3" :value="list1" title="List 1" />

      <rawDisplayer class="col-3" :value="list2" title="List 2" />
    </v-layout>
  </v-container>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        { name: "Aprender VueElectron", id: 1 },
        { name: "Aprender Docker", id: 2 },
        { name: "Desarrollar app con Flutter", id: 3 },
        { name: "Acabar el Desarrollo de la Asamblea", id: 4 }
      ],
      list2: [
        { name: "Acabar la Tesis", id: 5 },
        { name: "Encontrar Trabajo", id: 6 },
        { name: "Aprender Vue", id: 7 }
      ]
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>

<style lang="scss">
 .cajita {
   margin-bottom: 8px;
   border-radius: 10px;
   cursor: move;
 }

 .draggable-left {
   background: rgb(222, 224, 224);
   padding: 15px;
   border-radius: 15px;
   margin-right: 10px;
  
   .titulo-draggable {
     color: black;
     font-size: 1.5rem;
     font-weight: bold;
     margin-bottom: 20px;
   }
 }

 .draggable-right {
   background: rgb(187, 148, 187);
   padding: 15px;
   border-radius: 15px;
   margin-left: 10px;
  
   .titulo-draggable {
     color: black;
     font-size: 1.5rem;
     font-weight: bold;
     margin-bottom: 20px;
   }
 }
</style>
