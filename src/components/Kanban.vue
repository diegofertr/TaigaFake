<template>
  <v-container fluid>
    <h1 class="text-xs-left"> <span class="title-kanban">PROJECT </span> <span class="subtitle-kanban">KANBAN</span></h1>
    <br />
    <v-layout wrap>
      <v-flex md2>
        <div class="draggable-box-new">
          <div class="draggable-header">
            <h3 class="draggable-header-title">NUEVA</h3>
          </div>
          <draggable class="list-group" :list="list1" group="people" @change="log">
            <v-card
              raised
              color="white"
              class="grey--text list-group-item draggable-card"
              v-for="element in list1"
              :key="element.name">
              <v-card-title primary-title>
                <div class="title">{{ element.name }}</div>
                <v-spacer></v-spacer>
                <!-- <v-btn flat icon dark color="warning">
                  <v-icon>edit</v-icon>
                </v-btn> -->
              </v-card-title>
            </v-card>
          </draggable>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="draggable-box-prepared">
          <div class="draggable-header">
            <h3 class="draggable-header-title">PREPARADA</h3>
          </div>
          <draggable class="list-group" :list="list1" group="people" @change="log">
            <v-card
              raised
              color="white"
              class="grey--text list-group-item draggable-card"
              v-for="element in list1"
              :key="element.name">
              <v-card-title primary-title>
                <div class="title">{{ element.name }}</div>
                <v-spacer></v-spacer>
                <!-- <v-btn flat icon dark color="warning">
                  <v-icon>edit</v-icon>
                </v-btn> -->
              </v-card-title>
            </v-card>
          </draggable>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="draggable-box-development">
          <div class="draggable-header">
            <h3 class="draggable-header-title">EN CURSO</h3>
          </div>
          <draggable class="list-group" :list="list1" group="people" @change="log">
            <v-card
              raised
              color="white"
              class="grey--text list-group-item draggable-card"
              v-for="element in list1"
              :key="element.name">
              <v-card-title primary-title>
                <div class="title">{{ element.name }}</div>
                <v-spacer></v-spacer>
                <!-- <v-btn flat icon dark color="warning">
                  <v-icon>edit</v-icon>
                </v-btn> -->
              </v-card-title>
            </v-card>
          </draggable>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="draggable-box-test">
          <div class="draggable-header">
            <h3 class="draggable-header-title">LISTA PARA TESTEAR</h3>
          </div>
          <draggable class="list-group" :list="list1" group="people" @change="log">
            <v-card
              raised
              color="white"
              class="grey--text list-group-item draggable-card"
              v-for="element in list1"
              :key="element.name">
              <v-card-title primary-title>
                <div class="title">{{ element.name }}</div>
                <v-spacer></v-spacer>
                <!-- <v-btn flat icon dark color="warning">
                  <v-icon>edit</v-icon>
                </v-btn> -->
              </v-card-title>
            </v-card>
          </draggable>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="draggable-box-ready">
          <div class="draggable-header">
            <h3 class="draggable-header-title">HECHA</h3>
          </div>
          <draggable class="list-group" :list="list1" group="people" @change="log">
            <v-card
              raised
              color="white"
              class="grey--text list-group-item draggable-card"
              v-for="element in list1"
              :key="element.name">
              <v-card-title primary-title>
                <div class="title">{{ element.name }}</div>
                <v-spacer></v-spacer>
                <!-- <v-btn flat icon dark color="warning">
                  <v-icon>edit</v-icon>
                </v-btn> -->
              </v-card-title>
            </v-card>
          </draggable>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="draggable-box-archived">
          <div class="draggable-header">
            <h3 class="draggable-header-title">ARCHIVADA</h3>
          </div>
          <draggable class="list-group" :list="list2" group="people" @change="log">
            <v-card
              color="teal lighten-5"
              class="grey--text list-group-item draggable-card"
              v-for="element in list2"
              :key="element.name">
              <v-card-title primary-title>
                <div class="title">{{ element.name }}</div>
                <v-spacer></v-spacer>
                <!-- <v-btn flat icon dark color="warning">
                  <v-icon>edit</v-icon>
                </v-btn> -->
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
import draggable from 'vuedraggable'
export default {
  name: 'two-lists',
  display: 'Two Lists',
  order: 1,
  components: {
    draggable
  },
  data () {
    return {
      list1: [
        { name: 'Aprender VueElectron', id: 1 },
        { name: 'Aprender Docker', id: 2 },
        { name: 'Desarrollar app con Flutter', id: 3 },
        { name: 'Acabar el Desarrollo de la Asamblea', id: 4 }
      ],
      list2: [
        { name: 'Acabar la Tesis', id: 5 },
        { name: 'Encontrar Trabajo', id: 6 },
        { name: 'Aprender Vue', id: 7 }
      ]
    }
  },
  methods: {
    add: function () {
      this.list.push({ name: 'Juan' })
    },
    replace: function () {
      this.list = [{ name: 'Edgard' }]
    },
    clone: function (el) {
      return {
        name: `${el.name} cloned`
      }
    },
    log: function (evt) {
      window.console.log(evt)
    }
  }
}
</script>

<style lang="scss">
  .title-kanban {
    color: #311820;
  }

  .subtitle-kanban {
    color: #849c5e;
  }

  .draggable-left {
    background: rgb(222, 224, 224);
    padding: 15px;
    border-radius: 15px;
    margin-right: 10px;
  }

  .draggable-right {
    background: rgb(187, 148, 187);
    padding: 15px;
    border-radius: 15px;
    margin-left: 10px;
  }

  .draggable-header-title {
    color: gray;
    margin-bottom: 10px;
    margin-top: -5px;
  }

  .draggable-card {
    margin-bottom: 15px;
    background-color: white;
    cursor: move;
  }

  .draggable-box-new {
    background-color: #f5f5f5;
    margin-left: 5px;
    margin-right: 5px;
    border-top: solid 3px #999999;
    padding: 15px;
  }

  .draggable-box-prepared {
    background-color: #f5f5f5;
    margin-left: 5px;
    margin-right: 5px;
    border-top: solid 3px #f57900;
    padding: 15px;
  }

  .draggable-box-development {
    background-color: #f5f5f5;
    margin-left: 5px;
    margin-right: 5px;
    border-top: solid 3px #8aafd6;
    padding: 15px;
  }

  .draggable-box-test {
    background-color: #f5f5f5;
    margin-left: 5px;
    margin-right: 5px;
    border-top: solid 3px #4e9a06;
    padding: 15px;
  }

  .draggable-box-ready {
    background-color: #f5f5f5;
    margin-left: 5px;
    margin-right: 5px;
    border-top: solid 3px #cc0000;
    padding: 15px;
  }

  .draggable-box-archived {
    background-color: #f5f5f5;
    margin-left: 5px;
    margin-right: 5px;
    border-top: solid 3px #5c3566;
    padding: 15px;
  }

</style>
