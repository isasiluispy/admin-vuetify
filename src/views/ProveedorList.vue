<template>
    <div>

        <v-card>
            <v-card-title>
                Proveedores
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
        search: '',
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
            nombre: 'Reykon Pa Mi',
            direccion: 'Soy disitnto',
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
