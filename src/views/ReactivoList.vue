<template>
    <div>

        <v-card>
            <v-card-title>
                Reactivos
                <v-spacer></v-spacer>
                <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Buscar"
                        single-line
                        hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                    :headers="headers"
                    :items="rows"
                    :search="search"
            ></v-data-table>
        </v-card>

        <v-btn
                bottom
                color="pink"
                dark
                fab
                fixed
                right
                :to="{name: 'reactivoCreate'}"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>

    </div>
</template>

<script>
  export default {
    name: 'ReactivoList',
    data() {
      return {
        search: '',
        headers: [
          {
            text: 'Nombre',
            align: 'left',
            value: 'nombre',
          },
        ],
        rows: [
          {
            nombre: 'Reactivo Nombre de Prueba',
          },
          {
            nombre: 'Reactivo Nombre de Prueba',
          },
          {
            nombre: 'Reactivo Nombre de Prueba',
          },
          {
            nombre: 'Reactivo Nombre de Prueba',
          },
          {
            nombre: 'Sigo aqui',
          },
          {
            nombre: 'Reactivo Nombre de Prueba',
          },
        ],
      }
    },
  }
</script>

<style scoped>

</style>
