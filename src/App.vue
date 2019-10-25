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
    }
  };
</script>
