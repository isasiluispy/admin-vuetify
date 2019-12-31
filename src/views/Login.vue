<template>
    <v-row align="center"
           justify="center">
        <v-col
                cols="12"
                sm="8"
                md="4"
        >
            <v-card class="elevation-12">
                <v-toolbar
                        color="success darken-3"
                        dark
                        flat
                >
                    <v-toolbar-title>SAR Préstamos</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <form>
                        <v-text-field
                                label="Nombre de usuario"
                                name="login"
                                prepend-icon="mdi-account"
                                type="text"
                                v-model="form.username"
                                @input="$v.form.username.$touch()"
                                :error-messages="usernameErrors"
                        />

                        <v-text-field
                                id="password"
                                label="Contraseña"
                                name="password"
                                prepend-icon="mdi-lock"
                                type="password"
                                v-model="form.password"
                                @input="$v.form.password.$touch()"
                        />
                    </form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn color="success darken-3" :loading="loading" :disabled="loading || $v.$invalid"
                           @click="login">Iniciar Sesión
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-snackbar v-model="snackbar">
            Usuario y/o contraseña incorrecta.
            <v-btn color="pink"
                   text
                   @click="snackbar = false">
                Cerrar
            </v-btn>
        </v-snackbar>
    </v-row>
</template>

<script>
    import {required} from "vuelidate/lib/validators";

    export default {
        name: 'Login',
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                },
                loading: false,
                snackbar: false
            }
        },
        validations: {
            form: {
                username: {required},
                password: {required}
            }
        },
        computed: {
            usernameErrors() {
                const errors = [];
                if (!this.$v.form.username.$dirty) return errors;
                !this.$v.form.username.required && errors.push('Usuario es requerido.');
                return errors
            },
        },
        methods: {
            login() {
                this.$v.form.$touch();
                // if its still pending or an error is returned do not submit
                if (this.$v.form.$pending || this.$v.form.$error) return;
                // to form submit after this
                this.loading = true;

                this.$store.dispatch('login', {...this.form})
                    .then(() => {
                        this.$router.push({name: 'dashboard'});
                    })
                    .catch(error => {
                        this.snackbar = true;
                        console.log('error', error);
                    })
                    .finally(() => {
                        this.loading = false;
                    })
            },
        }
    }
</script>
