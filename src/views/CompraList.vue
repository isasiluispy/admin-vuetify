<template>
    <div>

        <v-card>
            <v-card-title>
                Compras
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
        search: '',
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
