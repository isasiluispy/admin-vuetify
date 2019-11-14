<template>
    <div>

        <v-row no-gutters align="start" justify="space-between" class="mt-3">
            <v-col md="auto">
                <h4>Proveedores</h4>
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
                :to="{name: 'proveedorCreate'}"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>

    </div>
</template>

<script>
  export default {
    name: 'ProveedorList',
    data() {
      return {
        headers: [
          {
            text: 'Nombre',
            align: 'left',
            value: 'nombre',
          },
          {text: 'Dirección', value: 'direccion'},
        ],
        rows: [
          {
            nombre: 'Proveedor Nombre de Prueba',
            direccion: 'Direccion de prueba para el proveedor',
          },
          {
            nombre: 'Proveedor Nombre de Prueba',
            direccion: 'Direccion de prueba para el proveedor',
          },
          {
            nombre: 'Proveedor Nombre de Prueba',
            direccion: 'Direccion de prueba para el proveedor',
          },
          {
            nombre: 'Proveedor Nombre de Prueba',
            direccion: 'Direccion de prueba para el proveedor',
          },
          {
            nombre: 'Proveedor Nombre de Prueba',
            direccion: 'Direccion de prueba para el proveedor',
          },
          {
            nombre: 'Proveedor Nombre de Prueba',
            direccion: 'Direccion de prueba para el proveedor',
          },
          {
            nombre: 'Proveedor Nombre de Prueba',
            direccion: 'Direccion de prueba para el proveedor',
          },
          {
            nombre: 'Proveedor Nombre de Prueba',
            direccion: 'Direccion de prueba para el proveedor',
          },
        ],
      }
    },
  }
</script>

<style scoped>

</style>
