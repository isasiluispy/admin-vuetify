<template>
    <div>

        <v-card>
            <v-card-title>
                Clientes
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
            >
                <template v-slot:item.action="{ item }">
                    <v-icon
                            small
                            class="ml-3"
                            @click="openDialogFormCliente(item)"
                    >
                        mdi-eye-outline
                    </v-icon>
                </template>
            </v-data-table>
        </v-card>

        <v-btn
                bottom
                color="pink"
                dark
                fab
                fixed
                right
                @click="openDialogFormCliente(null)"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>

        <v-dialog v-model="dialog" persistent max-width="600px">
            <cliente-edit :type="type" :form="form" @closeDialog="dialog=false"/>
        </v-dialog>


    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import ClienteEdit from "./ClienteEdit";

    export default {
        name: "ClienteList",
        components: {
            'cliente-edit': ClienteEdit,
        },
        created() {
            this.$store.dispatch('getClientes')
        },
        computed: {
            ...mapGetters(['getClientes'])
        },
        methods: {
            openDialogFormCliente(cliente) {
                if (cliente) {
                    this.type = 'update';
                    this.form = cliente;
                } else {
                    this.type = 'create';
                    this.form = {
                        nombre_apellido: '',
                        doc_nro: '',
                        fecha_nacimiento: null,
                        sexo: null,
                        ciudad: '',
                        barrio: '',
                        direccion: '',
                        tel1: '',
                        profesion: '',
                        estado_civil: '',
                        cliente_referencias: [
                            {
                                nombre_apellido: '',
                                tel: ''
                            }
                        ]
                    }
                }

                this.dialog = true;
            }
        },
        data: () => {
            return {
                dialog: false,
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
                    },
                    {
                        text: 'Acciones',
                        value: 'action',
                        sortable: false
                    }
                ],
                form: null,
                type: null
            }
        }
    }
</script>

<style scoped>

</style>
