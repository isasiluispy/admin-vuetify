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
    name: 'ReactivoEdit',
    data: () => ({
      valid: false,
      nombre: '',
      nombreRules: [
        v => !!v || 'El nombre es requerido',
      ],
    }),

    methods: {
      save () {
        if (this.$refs.form.validate()) {
          console.log(this.nombre);
        }
      },
    },
  }
</script>

<style scoped>

</style>
