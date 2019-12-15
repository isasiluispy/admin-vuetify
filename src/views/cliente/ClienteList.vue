<template>
    <div>

        <v-card>
            <v-card-title>
                Proveedores
                <v-spacer/>
                <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Buscar"
                        single-line
                        hide-details
                />
            </v-card-title>
            <v-data-table
                    :headers="headers"
                    :items="getClientes"
                    :search="search"
            />
        </v-card>

        <v-btn
                bottom
                color="pink"
                dark
                fab
                fixed
                right
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "ClienteList",
        created() {
            this.$store.dispatch('getClientes')
        },
        computed: {
            ...mapGetters(['getClientes'])
        },
        data: () => {
            return {
                search: '',
                headers: [
                    {
                        text: 'Nombres y Apellidos',
                        align: 'left',
                        value: 'nombre_apellido'
                    },
                    {
                        text: 'Nro. De Documento',
                        value: 'doc_nro'
                    },
                    {
                        text: 'Teléfono',
                        value: 'tel1'
                    },
                    {
                        text: 'Profesión',
                        value: 'profesion'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
