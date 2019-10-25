<template>
    <v-app>
        <sidebar :drawer="drawer"/>
        <navbar @changeDrawer="updateDrawer"/>
        <v-content>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
  import Navbar from "../components/Navbar";
  import Sidebar from "../components/Sidebar";

  export default {
    name: 'DashboardLayout',
    data: () => ({
      drawer: true,
    }),
    components: {
      navbar: Navbar,
      sidebar: Sidebar
    },
    methods: {
      updateDrawer() {
        this.drawer = !this.drawer;
      }
    }
  }
</script>