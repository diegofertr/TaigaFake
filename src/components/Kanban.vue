<template>
  <v-container fluid>
    <div class="kanban-header">
      <header>
        <h1 class="text-xs-left">
          <span class="project-name">ASAMBLEA_LEGISLATIVA v_3.0.0</span>
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
                <div class="counter" v-if="newList.length !== 0">{{ newList.length }}</div>
              </div>
              <div class="options">
                <a href="#" class="option"><v-icon>vertical_align_center</v-icon></a>
                <a href="#" class="option"><v-icon>add</v-icon></a>
                <a href="#" class="option"><v-icon>reorder</v-icon></a>
              </div>
            </h2>
          </div>
          <draggable class="list-group" :list="newList" group="tasks" @change="log">
            <v-card
              raised
              color="white"
              class="grey--text list-group-item draggable-card"
              v-for="element in newList"
              :key="element.name">
              <div class="card-owner">
                <div class="card-owner-info">
                  <img src="../assets/img/indice.png" alt="user-default" class="card-header-img">
                  <span class="card-header-name">Sin Asignar</span>
                </div>
              </div>
              <div class="card-content">
                <h2 class="card-content-title"><strong>#{{ element.id.substring(0, 3) }}</strong> {{ element.name }}</h2>
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
                <div class="counter" v-if="preparedList.length !== 0">{{ preparedList.length }}</div>
              </div>
              <div class="options">
                <a href="#" class="option"><v-icon>vertical_align_center</v-icon></a>
                <a href="#" class="option"><v-icon>add</v-icon></a>
                <a href="#" class="option"><v-icon>reorder</v-icon></a>
              </div>
            </h2>
          </div>
          <draggable class="list-group" :list="preparedList" group="tasks" @change="log($event, 'prepareds')">
            <v-card
              raised
              color="white"
              class="grey--text list-group-item draggable-card"
              v-for="element in preparedList"
              :key="element.name">
              <div class="card-owner">
                <div class="card-owner-info">
                  <img src="../assets/img/indice.png" alt="user-default" class="card-header-img">
                  <span class="card-header-name">Sin Asignar</span>
                </div>
              </div>
              <div class="card-content">
                <h2 class="card-content-title"><strong>#{{ element.id.substring(0, 3) }}</strong> {{ element.name }}</h2>
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
                <div class="counter" v-if="developList.length !== 0">{{ developList.length }}</div>
              </div>
              <div class="options">
                <a href="#" class="option"><v-icon>vertical_align_center</v-icon></a>
                <a href="#" class="option"><v-icon>add</v-icon></a>
                <a href="#" class="option"><v-icon>reorder</v-icon></a>
              </div>
            </h2>
          </div>
          <draggable class="list-group" :list="developList" group="tasks" @change="log">
            <v-card
              raised
              color="white"
              class="grey--text list-group-item draggable-card"
              v-for="element in developList"
              :key="element.name">
              <div class="card-owner">
                <div class="card-owner-info">
                  <img src="../assets/img/indice.png" alt="user-default" class="card-header-img">
                  <span class="card-header-name">Sin Asignar</span>
                </div>
              </div>
              <div class="card-content">
                <h2 class="card-content-title"><strong>#{{ element.id.substring(0, 3) }}</strong> {{ element.name }}</h2>
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
                <div class="counter" v-if="testList.length !== 0">{{ testList.length }}</div>
              </div>
              <div class="options">
                <a href="#" class="option"><v-icon>vertical_align_center</v-icon></a>
                <a href="#" class="option"><v-icon>add</v-icon></a>
                <a href="#" class="option"><v-icon>reorder</v-icon></a>
              </div>
            </h2>
          </div>
          <draggable class="list-group" :list="testList" group="tasks" @change="log">
            <v-card
              raised
              color="white"
              class="grey--text list-group-item draggable-card"
              v-for="element in testList"
              :key="element.name">
              <div class="card-owner">
                <div class="card-owner-info">
                  <img src="../assets/img/indice.png" alt="user-default" class="card-header-img">
                  <span class="card-header-name">Sin Asignar</span>
                </div>
              </div>
              <div class="card-content">
                <h2 class="card-content-title"><strong>#{{ element.id.substring(0, 3) }}</strong> {{ element.name }}</h2>
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
                <div class="counter" v-if="doneList.length !== 0">{{ doneList.length }}</div>
              </div>
              <div class="options">
                <a href="#" class="option"><v-icon>vertical_align_center</v-icon></a>
                <a href="#" class="option"><v-icon>add</v-icon></a>
                <a href="#" class="option"><v-icon>reorder</v-icon></a>
              </div>
            </h2>
          </div>
          <draggable class="list-group" :list="doneList" group="tasks" @change="log">
            <v-card
              raised
              color="white"
              class="grey--text list-group-item draggable-card"
              v-for="element in doneList"
              :key="element.name">
              <div class="card-owner">
                <div class="card-owner-info">
                  <img src="../assets/img/indice.png" alt="user-default" class="card-header-img">
                  <span class="card-header-name">Sin Asignar</span>
                </div>
              </div>
              <div class="card-content">
                <h2 class="card-content-title"><strong>#{{ element.id.substring(0, 3) }}</strong> {{ element.name }}</h2>
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
                <div class="counter" v-if="archivedList.length !== 0">{{ archivedList.length }}</div>
              </div>
              <div class="options">
                <a href="#" class="option"><v-icon>vertical_align_center</v-icon></a>
                <a href="#" class="option"><v-icon>add</v-icon></a>
                <a href="#" class="option"><v-icon>reorder</v-icon></a>
              </div>
            </h2>
          </div>
          <draggable class="list-group" :list="archivedList" group="tasks" @change="log">
            <v-card
              color="teal lighten-5"
              class="grey--text list-group-item draggable-card"
              v-for="element in archivedList"
              :key="element.name">
              <div class="card-owner">
                <div class="card-owner-info">
                  <img src="../assets/img/indice.png" alt="user-default" class="card-header-img">
                  <span class="card-header-name">Sin Asignar</span>
                </div>
              </div>
              <div class="card-content">
                <h2 class="card-content-title"><strong>#{{ element.id.substring(0, 3) }}</strong> {{ element.name }}</h2>
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
import { db } from '../main'

export default {
  name: 'two-lists',
  display: 'Two Lists',
  order: 1,
  components: {
    draggable
  },
  data () {
    return {
      newList: [],
      preparedList: [],
      developList: [],
      testList: [],
      doneList: [],
      archivedList: []
    }
  },
  created () {
    // Obteniendo tareas nuevas de firestore
    this.getNews()

    // Obteniendo tareas preparadas de firestore
    this.getPrepareds()

    // Obteniendo tareas archivadas de firestore
    this.getArchiveds()
  },
  methods: {
    log: function (evt, pLista) {
      window.console.log(evt)
      if (evt.added) {
        window.console.log('Nuevo Elemento en la lista de ', pLista)
        const data = {
          description: evt.added.element.name
        }
        db.collection(pLista).doc(evt.added.element.id).set(data).then(response => {
          window.console.log('Guardado tarea en firestore')
          this.getPrepareds()
        })
      }

      if (evt.removed) {
        db.collection('news').doc(evt.removed.element.id).delete().then(response => {
          window.console.log('Eliminando tarea de firestore')
        })
      }
    },
    getNews () {
      db.collection('news').onSnapshot(snapshot => {
        this.newList = []
        snapshot.forEach(doc => {
          this.newList.push({
            id: doc.id,
            name: doc.data().description
          })
        })
      })
    },
    getPrepareds () {
      this.preparedList = []
      db.collection('prepareds').onSnapshot(snapshot => {
        snapshot.forEach(doc => {
          this.preparedList.push({
            id: doc.id,
            name: doc.data().description
          })
        })
      })
    },
    getArchiveds () {
      this.archivedList = []
      db.collection('archiveds').onSnapshot(snapshot => {
        snapshot.forEach(doc => {
          this.archivedList.push({
            id: doc.id,
            name: doc.data().description
          })
        })
      })
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
    // background-color: red;
    border-top: solid 3px #999999;
    padding: 10px;
    margin: 0 5px 0 0;
    overflow-y: auto;
    height: 100%;
  }

  .draggable-box-prepared {
    background-color: #f5f5f5;
    margin: 0 5px 0 0;
    overflow-y: auto;
    height: 100%;
    border-top: solid 3px #f57900;
    padding: 10px;
  }

  .draggable-box-development {
    background-color: #f5f5f5;
    margin: 0 5px 0 0;
    overflow-y: auto;
    height: 100%;
    border-top: solid 3px #8aafd6;
    padding: 10px;
  }

  .draggable-box-test {
    background-color: #f5f5f5;
    margin: 0 5px 0 0;
    overflow-y: auto;
    height: 100%;
    border-top: solid 3px #4e9a06;
    padding: 10px;
  }

  .draggable-box-ready {
    background-color: #f5f5f5;
    margin: 0 5px 0 0;
    overflow-y: auto;
    height: 100%;
    border-top: solid 3px #cc0000;
    padding: 10px;
  }

  .draggable-box-archived {
    background-color: #f5f5f5;
    margin: 0 5px 0 0;
    overflow-y: auto;
    height: 100%;
    border-top: solid 3px #5c3566;
    padding: 10px;
  }

</style>
