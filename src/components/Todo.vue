<template>
  <v-container fluid>
    <div class="todos-container">
      <h1>Lista de Tareas</h1>
      <div class="todos-add">
        <input type="text" v-model="tarea" placeholder="Nueva Tarea">
        <v-input v-model="tarea" placeholder="Ingrese la Nueva Tarea"></v-input>
        <v-btn color="info" @click="addTodo">Añadir Tarea</v-btn>
      </div>
      <v-data-table
        :headers="headers"
        :items="todos"
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>{{ props.item.text }}</td>
          <td>
            <!-- {{ props.item.completed }} -->
            <v-switch
              v-model="props.item.completed"
              @click="updateCompleted(props.$index, props.item)"
              :label="props.item.completed ? 'Completo' : 'Incompleto'"
            ></v-switch>
          </td>
          <td>
            <v-btn
              flat 
              icon 
              @click="editTodo(props.item)"
              color="warning">

              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn flat icon color="red">
              <v-icon>delete</v-icon>
            </v-btn>
          </td>
        </template>
      </v-data-table>
    </div>
    <v-dialog
      v-model="dialog"
      width="700">
      <v-card>
        <v-card-title
          class="title grey lighten-2"
          primary-title
        >
          <v-icon>edit</v-icon>
          Editar Tarea
          <v-spacer></v-spacer>
          <v-btn
            flat icon small
            @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-layout wrap>
            <v-flex md12>
              <v-text-field
                label="Tarea"
                v-model="tareaEdit"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout wrap>
            <v-flex md12>
              <v-checkbox
                v-model="completadoEdit"
                label="Completado"
              ></v-checkbox>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            @click="saveEdit"
            color="primary">
            <v-icon>edit</v-icon>
            Guardar
          </v-btn>
          <v-btn
            color="default"
            @click="dialog = false">
            <v-icon>close</v-icon>
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      tarea: '',
      tareaEdit: '',
      completadoEdit: '',
      dialog: false,
      idEdit: 0,
      todos: [
        { id: 1, text: 'Copiar datos de plantillas iniciales a finales', completed: false },
        { id: 2, text: 'Añadir De, PARA y CARGO en la vista de resumen', completed: false },
        { id: 3, text: 'Asignación de correlativos en los instrumentos camarales', completed: false },
        { id: 4, text: 'Añadir funcionalidades a los botones de instrumentos', completed: false }
      ],
      headers: [
        { text: 'Descripcion', value: 'text', sortable: false },
        { text: 'Completado', value: 'completed', sortable: false },
        { text: 'AccioneS', value: 'actions', sortable: false }
      ]
    }
  },
  methods: {
    addTodo () {
      let data = {
        text: this.tarea,
        completed: false
      }
      this.todos.push(data)
      this.tarea = ''
    },
    updateCompleted (index, todo) {
      console.log('TODO :: ', todo)
      console.log('INDEX :: ', index)
    },
    editTodo (todo) {
      this.dialog = true
      this.tareaEdit = todo.text
      this.completadoEdit = todo.completed
      this.idEdit = todo.id
    },
    saveEdit () {
      console.log('guardando...');
    }
  }
}
</script>

<style lang="scss">
  .todos-container {
    padding-left: 10px;

    p {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  .todos-add {
    margin-top: 10px;
    margin-bottom: 20px;
  }
</style>

