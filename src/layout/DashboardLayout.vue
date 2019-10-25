<template>
    <v-app id="inspire">
        <sidebar :drawer="drawer"/>
        <navbar @changeDrawer="updateDrawer"/>
        <router-view/>
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