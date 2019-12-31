<template>
    <v-card>
        <v-card-title>
            <span class="headline" v-if="localType === 'create'">Crear Cliente</span>
            <span class="headline" v-if="localType === 'update'">Actualizar Cliente</span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-tabs v-model="tab" grow>
                    <v-tab>Infomación General</v-tab>
                    <v-tab>Referencias</v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field v-model="localForm.nombre_apellido"
                                              label="Nombres y Apellidos"
                                              @blur="$v.localForm.nombre_apellido.$touch()"
                                              :error-messages="requiredError('nombre_apellido')"/>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="localForm.doc_nro"
                                              label="Nro. de Documento"
                                              @blur="$v.localForm.doc_nro.$touch()"
                                              :error-messages="requiredError('doc_nro')"/>
                            </v-col>
                            <v-col cols="6">
                                <v-dialog
                                        ref="dialog"
                                        v-model="modal"
                                        :return-value.sync="localForm.fecha_nacimiento"
                                        persistent
                                        width="290px"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                                v-model="computedDateFormatted"
                                                label="Fecha de Nacimiento"
                                                readonly
                                                v-on="on"
                                                @blur="$v.localForm.fecha_nacimiento.$touch()"
                                                :error-messages="requiredError('fecha_nacimiento')"
                                        />
                                    </template>
                                    <v-date-picker v-model="localForm.fecha_nacimiento" scrollable>
                                        <v-spacer/>
                                        <v-btn text color="primary" @click="modal = false">Cancelar</v-btn>
                                        <v-btn text color="primary"
                                               @click="$refs.dialog.save(localForm.fecha_nacimiento)">OK
                                        </v-btn>
                                    </v-date-picker>
                                </v-dialog>
                            </v-col>
                            <v-col cols="6">
                                <v-select v-model="localForm.sexo"
                                          :items="[{text: 'Masculino', value: 0}, {text: 'Femenino', value: 10}]"
                                          label="Sexo"
                                          @blur="$v.localForm.sexo.$touch()"
                                          :error-messages="requiredError('sexo')"/>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="localForm.ciudad"
                                              label="Ciudad"
                                              @blur="$v.localForm.ciudad.$touch()"
                                              :error-messages="requiredError('ciudad')"/>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="localForm.barrio"
                                              label="Barrio"
                                              @blur="$v.localForm.barrio.$touch()"
                                              :error-messages="requiredError('barrio')"/>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="localForm.direccion"
                                              label="Dirección"
                                              @blur="$v.localForm.direccion.$touch()"
                                              :error-messages="requiredError('direccion')"/>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="localForm.tel1"
                                              label="Teléfono"
                                              @blur="$v.localForm.tel1.$touch()"
                                              :error-messages="telError()"/>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="localForm.profesion"
                                              label="Profesión"
                                              @blur="$v.localForm.profesion.$touch()"
                                              :error-messages="requiredError('profesion')"/>
                            </v-col>
                            <v-col cols="6">
                                <v-select v-model="localForm.estado_civil"
                                          :items="[{text: 'Soltero', value: 0}, {text: 'Casado', value: 10}]"
                                          label="Estado Civil"
                                          @blur="$v.localForm.estado_civil.$touch()"
                                          :error-messages="requiredError('estado_civil')"/>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                    <v-tab-item>
                        <v-row v-for="(v, index) in $v.localForm.cliente_referencias.$each.$iter" :key="index">
                            <v-col cols="5">
                                <v-text-field v-model="v.nombre_apellido.$model"
                                              label="Nombres y Apellidos"
                                              @blur="v.nombre_apellido.$touch()"
                                              :error-messages="nestedRequiredError(v.nombre_apellido)"/>
                            </v-col>
                            <v-col cols="5">
                                <v-text-field v-model="v.tel.$model"
                                              label="Teléfono"
                                              @blur="v.tel.$touch()"
                                              :error-messages="nestedTelError(v.tel)"/>
                            </v-col>

                            <v-col cols="2">
                                <v-btn
                                        color="red darken-3"
                                        dark
                                        fab
                                        x-small
                                        class="mt-4"
                                        @click="removeDetalle(index)"
                                >
                                    <v-icon>mdi-minus</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-btn
                                    color="green darken-3"
                                    dark
                                    fab
                                    x-small
                                    @click="addDetalle"
                            >
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-row>

                    </v-tab-item>
                </v-tabs-items>


            </v-container>
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn color="blue darken-1" text @click="$emit('closeDialog') && $v.$reset()">Cerrar</v-btn>
            <v-btn color="success darken-3" text @click="save" :disabled="$v.$invalid || !$v.$anyDirty">
                <span v-if="localType === 'create'">Guardar</span>
                <span v-if="localType === 'update'">Actualizar</span>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import {formatDate, phoneRegex} from "@/utils";
    import {required, minLength} from "vuelidate/lib/validators";

    // validacion para numeros de telefono
    const isValidPhoneNumber = (value) => phoneRegex.test(value);

    export default {
        name: "ClienteEdit",
        props: ['form', 'type'],
        data() {
            return {
                modal: false,
                localForm: Object.assign({}, this.form),
                tab: null,
                localType: this.type
            }
        },
        methods: {
            save() {
                if (this.localType === 'create') {
                    this.$store.dispatch('createCliente', {...this.localForm})
                        .then(() => {
                            this.$emit('closeDialog');
                            this.$v.$reset();
                        })
                        .catch(error => {
                            console.log('Ocurrió un error', error);
                        })
                }

                if (this.localType === 'update') {
                    this.$store.dispatch('updateCliente', {id: })
                        .then(() => {
                            this.$emit('closeDialog');
                            this.$v.$reset();
                        })
                        .catch(error => {
                            console.log('Ocurrió un error', error);
                        })

                }

            },
            nestedRequiredError(type) {
                const errors = [];
                if (!type.$dirty) return errors;
                !type.required && errors.push(`Este campo es requerido.`);
                return errors
            },
            requiredError(type) {
                const errors = [];
                if (!this.$v.localForm[type].$dirty) return errors;
                !this.$v.localForm[type].required && errors.push(`Este campo es requerido.`);
                return errors
            },
            telError() {
                const errors = [];
                if (!this.$v.localForm.tel1.$dirty) return errors;
                !this.$v.localForm.tel1.required && errors.push(`Este campo es requerido.`);
                !this.$v.localForm.tel1.isValidPhoneNumber && errors.push(`El formato es inadecuado.`);
                return errors
            },
            nestedTelError(type) {
                const errors = [];
                if (!type.$dirty) return errors;
                !type.required && errors.push(`Este campo es requerido.`);
                !type.isValidPhoneNumber && errors.push(`El formato es inadecuado.`);
                return errors
            },
            addDetalle() {
                this.localForm.cliente_referencias.push({
                    nombre_apellido: '',
                    tel: ''
                })
            },
            removeDetalle(index) {
                if (this.localForm.cliente_referencias.length > 1) {
                    this.localForm.cliente_referencias.splice(index, 1);
                }
            }
        },
        computed: {
            computedDateFormatted() {
                return formatDate(this.localForm.fecha_nacimiento);
            },

        },
        watch: {
            form(newForm) {
                this.localForm = Object.assign({}, newForm);
            },
            type(newType) {
                console.log('new type');
                this.localType = newType;
            }
        },
        validations: {
            localForm: {
                nombre_apellido: {required},
                doc_nro: {required},
                fecha_nacimiento: {required},
                sexo: {required},
                ciudad: {required},
                barrio: {required},
                direccion: {required},
                tel1: {required, isValidPhoneNumber},
                profesion: {required},
                estado_civil: {required},
                cliente_referencias: {
                    required,
                    minLength: minLength(1),
                    $each: {
                        nombre_apellido: {required},
                        tel: {required, isValidPhoneNumber}
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
