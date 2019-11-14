<template>
    <div>

        <v-row no-gutters align="start" justify="space-between" class="mt-3">
            <v-col md="auto">
                <h4>Reactivos</h4>
            </v-col>
        </v-row>

        <v-row align="start" justify="space-between" class="mt-3">
            <v-col>
                <v-data-table
                        :headers="headers"
                        :items="rows"
                        :items-per-page="5"
                        class="elevation-1"
                ></v-data-table>
            </v-col>
        </v-row>

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
            nombre: 'Reactivo Nombre de Prueba',
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
