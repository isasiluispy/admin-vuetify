<template>
    <div>

        <v-row no-gutters align="start" justify="space-between" class="mt-3">
            <v-col md="auto">
                <h4>Compras</h4>
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
                :to="{name: 'compraCreate'}"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>

    </div>
</template>

<script>
  export default {
    name: 'CompraList',
    data() {
      return {
        headers: [
          {
            text: '# Factura',
            align: 'left',
            value: 'nro_factura',
          },
          {text: 'Proveedor', value: 'proveedor'},
          {text: 'Saldo', value: 'saldo'},
          {text: 'Total', value: 'total'},
        ],
        rows: [
          {
            nro_factura: '001-002-23244',
            proveedor: 'Javier Gimenez SA',
            saldo: 'Gs. 450.000',
            total: 'Gs. 2.350.000',
          },
          {
            nro_factura: '001-002-23244',
            proveedor: 'Javier Gimenez SA',
            saldo: 'Gs. 450.000',
            total: 'Gs. 2.350.000',
          },
          {
            nro_factura: '001-002-23244',
            proveedor: 'Javier Gimenez SA',
            saldo: 'Gs. 450.000',
            total: 'Gs. 2.350.000',
          },
          {
            nro_factura: '001-002-23244',
            proveedor: 'Javier Gimenez SA',
            saldo: 'Gs. 450.000',
            total: 'Gs. 2.350.000',
          },
          {
            nro_factura: '001-002-23244',
            proveedor: 'Javier Gimenez SA',
            saldo: 'Gs. 450.000',
            total: 'Gs. 2.350.000',
          },
        ],
      }
    },
  }
</script>

<style scoped>

</style>
