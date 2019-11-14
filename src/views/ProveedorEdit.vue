<template>
    <v-form
            ref="form"
            v-model="valid"
            class="pa-3"
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
