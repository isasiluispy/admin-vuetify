<template>

    <v-card>
        <v-card-title>Nuevo Proveedor</v-card-title>
        <v-card-text>
            <v-form
                    ref="form"
                    v-model="valid"
            >
                <v-text-field
                        v-model="nombre"
                        :rules="nombreRules"
                        label="Nombre"
                        required
                ></v-text-field>

                <v-text-field
                        v-model="direccion"
                        label="Dirección"
                ></v-text-field>

                <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
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
    name: 'ProveedorEdit',
    data: () => ({
      valid: false,
      nombre: '',
      direccion: '',
      nombreRules: [
        v => !!v || 'El nombre es requerido',
      ],
    }),

    methods: {
      save () {
        if (this.$refs.form.validate()) {
          console.log(this.nombre, this.direccion);
        }
      },
    },
  }
</script>

<style scoped>

</style>
