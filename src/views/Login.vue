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
                        color="primary"
                        dark
                        flat
                >
                    <v-toolbar-title>Login form</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                    href="#"
                                    icon
                                    large
                                    target="_blank"
                                    v-on="on"
                            >
                                <v-icon>mdi-code-tags</v-icon>
                            </v-btn>
                        </template>
                        <span>Source</span>
                    </v-tooltip>
                    <v-tooltip right>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                    icon
                                    large
                                    href="https://codepen.io/johnjleider/pen/pMvGQO"
                                    target="_blank"
                                    v-on="on"
                            >
                                <v-icon>mdi-codepen</v-icon>
                            </v-btn>
                        </template>
                        <span>Codepen</span>
                    </v-tooltip>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field
                                label="Login"
                                name="login"
                                prepend-icon="mdi-account"
                                type="text"
                                v-model="username"
                        />

                        <v-text-field
                                id="password"
                                label="Password"
                                name="password"
                                prepend-icon="mdi-lock"
                                type="password"
                                v-model="password"
                        />
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn color="primary" :loading="loading" :disabled="loading" @click="login">Login</v-btn>
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
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: '',
        loading: false,
        snackbar: false
      }
    },
    methods: {
      async login() {
        const {username, password} = this;

        this.loading = true;

        try {
          await this.$store.dispatch('login', {username, password});
          await this.$router.push('/');
        } catch (e) {
          this.snackbar = true;
        } finally {
          // deactivate loading
          this.loading = false;
        }

      }
    }
  }
</script>
