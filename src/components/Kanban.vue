<template>
  <v-container fluid>
    <div class="kanban-header">
      <header>
        <h1 class="text-xs-left">
          <span class="project-name">ASAMBLEA v_3.0.0</span>
          <span class="greeen">KANBAN</span>
        </h1>
      </header>
    </div>
    <v-layout wrap>
      <v-flex md2>
        <div class="draggable-box-new">
          <div class="draggable-header">
            <h2 class="draggable-header-title">
              <div class="tittle">
                <div class="name">NUEVA</div>
                <div class="counter">1</div>
              </div>
              <div class="options">
                <a href="#" class="option"><v-icon>vertical_align_center</v-icon></a>
                <a href="#" class="option"><v-icon>add</v-icon></a>
                <a href="#" class="option"><v-icon>reorder</v-icon></a>
              </div>
            </h2>
          </div>
          <draggable class="list-group" :list="list1" group="people" @change="log">
            <v-card
              raised
              color="white"
              class="grey--text list-group-item draggable-card"
              v-for="(element, index) in list1"
              :key="element.name">
              <div class="card-owner">
                <div class="card-owner-info">
                  <img src="../assets/img/indice.png" alt="user-default" class="card-header-img">
                  <span class="card-header-name">Sin Asignar</span>
                </div>
              </div>
              <div class="card-content">
                <h2 class="card-content-title">#{{ index }} {{ element.name }}</h2>
              </div>
              <div class="card-data">
                <span>No estimada</span>
                <div class="card-statistics">
                  <div class="statistic card-votes">
                    <span>
                      <v-icon small>keyboard_capslock</v-icon>
                      0
                    </span>
                  </div>
                  <div class="statistic card-watchers">
                    <span>
                      <v-icon small>visibility</v-icon>
                      0
                    </span>
                  </div>
                  <div class="statistic card-comments">
                    <span>
                      <v-icon small>chat_bubble_outline</v-icon>
                      0
                    </span>
                  </div>
                  <div class="statistic card-attachements">
                    <span>
                      <v-icon small>attach_file</v-icon>
                      0
                    </span>
                  </div>
                </div>
              </div>
            </v-card>
          </draggable>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="draggable-box-prepared">
          <div class="draggable-header">
            <h2 class="draggable-header-title">
              <div class="tittle">
                <div class="name">PREPARADA</div>
                <div class="counter">1</div>
              </div>
              <div class="options">
                <a href="#" class="option"><v-icon>vertical_align_center</v-icon></a>
                <a href="#" class="option"><v-icon>add</v-icon></a>
                <a href="#" class="option"><v-icon>reorder</v-icon></a>
              </div>
            </h2>
          </div>
          <draggable class="list-group" :list="list1" group="people" @change="log">
            <v-card
              raised
              color="white"
              class="grey--text list-group-item draggable-card"
              v-for="(element, index) in list1"
              :key="element.name">
              <div class="card-owner">
                <div class="card-owner-info">
                  <img src="../assets/img/indice.png" alt="user-default" class="card-header-img">
                  <span class="card-header-name">Sin Asignar</span>
                </div>
              </div>
              <div class="card-content">
                <h2 class="card-content-title">#{{ index }} {{ element.name }}</h2>
              </div>
              <div class="card-data">
                <span>No estimada</span>
                <div class="card-statistics">
                  <div class="statistic card-votes">
                    <span>
                      <v-icon small>keyboard_capslock</v-icon>
                      0
                    </span>
                  </div>
                  <div class="statistic card-watchers">
                    <span>
                      <v-icon small>visibility</v-icon>
                      0
                    </span>
                  </div>
                  <div class="statistic card-comments">
                    <span>
                      <v-icon small>chat_bubble_outline</v-icon>
                      0
                    </span>
                  </div>
                  <div class="statistic card-attachements">
                    <span>
                      <v-icon small>attach_file</v-icon>
                      0
                    </span>
                  </div>
                </div>
              </div>
            </v-card>
          </draggable>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="draggable-box-development">
          <div class="draggable-header">
            <h2 class="draggable-header-title">
              <div class="tittle">
                <div class="name">EN CURSO</div>
                <div class="counter">1</div>
              </div>
              <div class="options">
                <a href="#" class="option"><v-icon>vertical_align_center</v-icon></a>
                <a href="#" class="option"><v-icon>add</v-icon></a>
                <a href="#" class="option"><v-icon>reorder</v-icon></a>
              </div>
            </h2>
          </div>
          <draggable class="list-group" :list="list1" group="people" @change="log">
            <v-card
              raised
              color="white"
              class="grey--text list-group-item draggable-card"
              v-for="(element, index) in list1"
              :key="element.name">
              <div class="card-owner">
                <div class="card-owner-info">
                  <img src="../assets/img/indice.png" alt="user-default" class="card-header-img">
                  <span class="card-header-name">Sin Asignar</span>
                </div>
              </div>
              <div class="card-content">
                <h2 class="card-content-title">#{{ index }} {{ element.name }}</h2>
              </div>
              <div class="card-data">
                <span>No estimada</span>
                <div class="card-statistics">
                  <div class="statistic card-votes">
                    <span>
                      <v-icon small>keyboard_capslock</v-icon>
                      0
                    </span>
                  </div>
                  <div class="statistic card-watchers">
                    <span>
                      <v-icon small>visibility</v-icon>
                      0
                    </span>
                  </div>
                  <div class="statistic card-comments">
                    <span>
                      <v-icon small>chat_bubble_outline</v-icon>
                      0
                    </span>
                  </div>
                  <div class="statistic card-attachements">
                    <span>
                      <v-icon small>attach_file</v-icon>
                      0
                    </span>
                  </div>
                </div>
              </div>
            </v-card>
          </draggable>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="draggable-box-test">
          <div class="draggable-header">
            <h2 class="draggable-header-title">
              <div class="tittle">
                <div class="name">LISTA PARA TESTEAR</div>
                <div class="counter">1</div>
              </div>
              <div class="options">
                <a href="#" class="option"><v-icon>vertical_align_center</v-icon></a>
                <a href="#" class="option"><v-icon>add</v-icon></a>
                <a href="#" class="option"><v-icon>reorder</v-icon></a>
              </div>
            </h2>
          </div>
          <draggable class="list-group" :list="list1" group="people" @change="log">
            <v-card
              raised
              color="white"
              class="grey--text list-group-item draggable-card"
              v-for="(element, index) in list1"
              :key="element.name">
              <div class="card-owner">
                <div class="card-owner-info">
                  <img src="../assets/img/indice.png" alt="user-default" class="card-header-img">
                  <span class="card-header-name">Sin Asignar</span>
                </div>
              </div>
              <div class="card-content">
                <h2 class="card-content-title">#{{ index }} {{ element.name }}</h2>
              </div>
              <div class="card-data">
                <span>No estimada</span>
                <div class="card-statistics">
                  <div class="statistic card-votes">
                    <span>
                      <v-icon small>keyboard_capslock</v-icon>
                      0
                    </span>
                  </div>
                  <div class="statistic card-watchers">
                    <span>
                      <v-icon small>visibility</v-icon>
                      0
                    </span>
                  </div>
                  <div class="statistic card-comments">
                    <span>
                      <v-icon small>chat_bubble_outline</v-icon>
                      0
                    </span>
                  </div>
                  <div class="statistic card-attachements">
                    <span>
                      <v-icon small>attach_file</v-icon>
                      0
                    </span>
                  </div>
                </div>
              </div>
            </v-card>
          </draggable>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="draggable-box-ready">
          <div class="draggable-header">
            <h2 class="draggable-header-title">
              <div class="tittle">
                <div class="name">HECHA</div>
                <div class="counter">1</div>
              </div>
              <div class="options">
                <a href="#" class="option"><v-icon>vertical_align_center</v-icon></a>
                <a href="#" class="option"><v-icon>add</v-icon></a>
                <a href="#" class="option"><v-icon>reorder</v-icon></a>
              </div>
            </h2>
          </div>
          <draggable class="list-group" :list="list1" group="people" @change="log">
            <v-card
              raised
              color="white"
              class="grey--text list-group-item draggable-card"
              v-for="(element, index) in list1"
              :key="element.name">
              <div class="card-owner">
                <div class="card-owner-info">
                  <img src="../assets/img/indice.png" alt="user-default" class="card-header-img">
                  <span class="card-header-name">Sin Asignar</span>
                </div>
              </div>
              <div class="card-content">
                <h2 class="card-content-title">#{{ index }} {{ element.name }}</h2>
              </div>
              <div class="card-data">
                <span>No estimada</span>
                <div class="card-statistics">
                  <div class="statistic card-votes">
                    <span>
                      <v-icon small>keyboard_capslock</v-icon>
                      0
                    </span>
                  </div>
                  <div class="statistic card-watchers">
                    <span>
                      <v-icon small>visibility</v-icon>
                      0
                    </span>
                  </div>
                  <div class="statistic card-comments">
                    <span>
                      <v-icon small>chat_bubble_outline</v-icon>
                      0
                    </span>
                  </div>
                  <div class="statistic card-attachements">
                    <span>
                      <v-icon small>attach_file</v-icon>
                      0
                    </span>
                  </div>
                </div>
              </div>
            </v-card>
          </draggable>
        </div>
      </v-flex>
      <v-flex md2>
        <div class="draggable-box-archived">
          <div class="draggable-header">
            <h2 class="draggable-header-title">
              <div class="tittle">
                <div class="name">ARCHIVADA</div>
                <div class="counter">1</div>
              </div>
              <div class="options">
                <a href="#" class="option"><v-icon>vertical_align_center</v-icon></a>
                <a href="#" class="option"><v-icon>add</v-icon></a>
                <a href="#" class="option"><v-icon>reorder</v-icon></a>
              </div>
            </h2>
          </div>
          <draggable class="list-group" :list="list2" group="people" @change="log">
            <v-card
              color="teal lighten-5"
              class="grey--text list-group-item draggable-card"
              v-for="(element, index) in list2"
              :key="element.name">
              <div class="card-owner">
                <div class="card-owner-info">
                  <img src="../assets/img/indice.png" alt="user-default" class="card-header-img">
                  <span class="card-header-name">Sin Asignar</span>
                </div>
              </div>
              <div class="card-content">
                <h2 class="card-content-title">#{{ index }} {{ element.name }}</h2>
              </div>
              <div class="card-data">
                <span>No estimada</span>
                <div class="card-statistics">
                  <div class="statistic card-votes">
                    <span>
                      <v-icon small>keyboard_capslock</v-icon>
                      0
                    </span>
                  </div>
                  <div class="statistic card-watchers">
                    <span>
                      <v-icon small>visibility</v-icon>
                      0
                    </span>
                  </div>
                  <div class="statistic card-comments">
                    <span>
                      <v-icon small>chat_bubble_outline</v-icon>
                      0
                    </span>
                  </div>
                  <div class="statistic card-attachements">
                    <span>
                      <v-icon small>attach_file</v-icon>
                      0
                    </span>
                  </div>
                </div>
              </div>
            </v-card>
          </draggable>
        </div>
      </v-flex>
      <!-- <rawDisplayer class="col-3" :value="list1" title="List 1" /> -->
      <!-- <rawDisplayer class="col-3" :value="list2" title="List 2" /> -->
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
        { name: 'Acabar con el Desarrollo de la Asamblea Legislativa', id: 4 }
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
  .kanban-header {
    align-items: center;
    display: flex;
    justify-content: space-between;

    header {
      display: block;
      min-height: 70px;
      font-size: 1rem;

      .project-name {
        display: inline-block;
        margin-bottom: 0;
        margin-right: .5rem;
        vertical-align: bottom;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: uppercase;
        color: #311820;
        font-weight: 300;
      }

      .greeen {
        color: #5b8200;
        fill: #5b8200;
        font-weight: 300;
      }
    }
  }

  .draggable-header {
    display: flex;
    overflow: hidden;
    position: relative;

    .draggable-header-title {
      // margin-bottom: 10px;
      font-size: 1rem;
      align-items: center;
      color:#555;
      display: flex;
      flex-basis: 296px;
      flex-grow: 0;
      flex-shrink: 0;
      justify-content: space-between;
      margin: -10px 5px 0 -5px;
      max-width: 296px;
      padding: .5rem 1rem;
      position: relative;
      text-transform: uppercase;

      .tittle {
        align-items: flex-end;
        display: flex;
        width: 100%;
        font-weight: 400;

        .name {
          display: inline-block;
          max-width: 65%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }

        .counter {
          font-size: .75rem;
          line-height: 1.6;
          margin: 0 .5rem;
        }
      }

      .options {
        display: flex;

        .option {
          margin-right: .3rem;
          font-weight: inherit;
          color: #444;
          text-decoration: none;
        }
      }
    }
  }

  .draggable-card {
    margin-bottom: 15px;
    background-color: #f5f5f5;
    cursor: move;
    border-radius: .25rem;
    display: block;
  }

  .card-owner {
    position: relative;
    vertical-align: baseline;

    .card-owner-info {
      display: flex;
      align-items: center;

      img {
        height: 2.5rem;
        margin-right: .5rem;
        width: 2.5rem;
      }

      .card-header-name {
        color: #767676;
      }
    }
  }

  .card-content {
    .card-content-title {
      color: #050505;
      font-size: 1rem;
      line-height: 1.25;
      margin-bottom: .25rem;
      padding: 1rem 1rem 0;
      font-weight: 400;
    }
  }

  .card-data {
    color: #767676;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    padding: 0 1rem .5rem;

    .card-statistics {
      font-size: .9rem;
      color: #b6b6b6;
      display: flex;
      margin-left: auto;

      .statistic {
        align-content: center;
        display: flex;
        margin-left: .5rem;

        .iconn {
          display: block;
        }
      }
    }
  }

  .draggable-box-new {
    background-color: #f5f5f5;
    margin-left: 5px;
    margin-right: 5px;
    border-top: solid 3px #999999;
    padding: 10px;
  }

  .draggable-box-prepared {
    background-color: #f5f5f5;
    margin-left: 5px;
    margin-right: 5px;
    border-top: solid 3px #f57900;
    padding: 10px;
  }

  .draggable-box-development {
    background-color: #f5f5f5;
    margin-left: 5px;
    margin-right: 5px;
    border-top: solid 3px #8aafd6;
    padding: 10px;
  }

  .draggable-box-test {
    background-color: #f5f5f5;
    margin-left: 5px;
    margin-right: 5px;
    border-top: solid 3px #4e9a06;
    padding: 10px;
  }

  .draggable-box-ready {
    background-color: #f5f5f5;
    margin-left: 5px;
    margin-right: 5px;
    border-top: solid 3px #cc0000;
    padding: 10px;
  }

  .draggable-box-archived {
    background-color: #f5f5f5;
    margin-left: 5px;
    margin-right: 5px;
    border-top: solid 3px #5c3566;
    padding: 10px;
  }

</style>
