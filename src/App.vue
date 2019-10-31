<template>
    <v-app>
        <sidebar v-if="!isSimpleView" :drawer="drawer"/>
        <navbar v-if="!isSimpleView" @changeDrawer="updateDrawer"/>
        <v-content>
            <v-container fluid :class="{'fill-height': isSimpleView}">
                <router-view/>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
  import Navbar from "./components/Navbar";
  import Sidebar from "./components/Sidebar";
  import {Types as authTypes} from "./store/modules/auth/types";

  export default {
    name: 'App',
    data: () => ({
      drawer: true
    }),
    components: {
      navbar: Navbar,
      sidebar: Sidebar
    },
    methods: {
      updateDrawer() {
        this.drawer = !this.drawer;
      }
    },
    computed: {
      isSimpleView() {
        return ['login'].indexOf(this.$route.name) > -1;
      }
    },
    created() {
      this.$http.interceptors.response.use(undefined, function (err) {
        return new Promise(function () {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            // if you ever get an unauthorized, logout the user
            this.$store.dispatch(authTypes.actions.LOGOUT);
            // you can also redirect to /login if needed !
          }
          throw err;
        });
      });
    }
  };
</script>
