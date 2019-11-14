<template>
    <v-card>
        <v-card-title>Nueva Compra</v-card-title>
        <v-card-text>
            <v-form
                    ref="form"
                    v-model="valid"
                    class="pa-3"
            >
                <h3 class="mt-3">Detalles de la Compra</h3>

                <v-text-field
                        v-model="nroFactura"
                        :rules="nroFacturaRules"
                        label="# Factura"
                        required
                ></v-text-field>

                <v-select
                        :items="items"
                        label="Proveedor"
                ></v-select>

                <h3 class="mt-3">Items de la Compra</h3>

                <v-row align="center" justify="space-between">
                    <v-col>
                        <v-text-field
                                v-model="reactivo"
                                label="Reactivo"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                                v-model="cantidad"
                                label="Cantidad"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                                v-model="precioUnitario"
                                label="Precio Unitario"
                        ></v-text-field>
                    </v-col>

                    <v-col>
                        <v-btn
                                bottom
                                color="pink"
                                dark
                                fab
                                small
                        >
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>

                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-left">Reactivo</th>
                            <th class="text-left">Cantidad</th>
                            <th class="text-left">Precio Unitario</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="item in compraDetails" :key="item.reactivo">
                            <td>{{ item.reactivo }}</td>
                            <td>{{ item.cantidad }}</td>
                            <td>{{ item.precioUnitario }}</td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>


                <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mt-3"
                        @click="save"
                >
                    Guardar
                </v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
  export default {
    name: 'CompraEdit',
    data: () => ({
      compraDetails: [
        {
          reactivo: 'Reactivo 1',
          cantidad: 4,
          precioUnitario: 'Gs. 28.000'
        },
        {
          reactivo: 'Reactivo 1',
          cantidad: 4,
          precioUnitario: 'Gs. 28.000'
        },
        {
          reactivo: 'Reactivo 1',
          cantidad: 4,
          precioUnitario: 'Gs. 28.000'
        },
        {
          reactivo: 'Reactivo 1',
          cantidad: 4,
          precioUnitario: 'Gs. 28.000'
        },
        {
          reactivo: 'Reactivo 1',
          cantidad: 4,
          precioUnitario: 'Gs. 28.000'
        },
      ],
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      valid: false,
      nroFactura: '',
      nroFacturaRules: [
        v => !!v || 'El nombre es requerido',
      ],
      reactivo: '',
      cantidad: '',
      precioUnitario: ''
    }),

    methods: {
      save() {
        if (this.$refs.form.validate()) {
          console.log(this.nombre);
        }
      },
    },
  }
</script>

<style scoped>

</style>
