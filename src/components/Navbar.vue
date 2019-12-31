<template>
    <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            app
            color="blue darken-3"
            dark
    >
        <v-app-bar-nav-icon @click="changeDrawer" />
        <v-toolbar-title
                style="width: 300px"
                class="ml-0 pl-4"
        >
            <span class="hidden-sm-and-down">Google Contacts</span>
        </v-toolbar-title>
        <v-text-field
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
                class="hidden-sm-and-down"
        />
        <v-spacer/>
        <v-menu bottom left>
            <template v-slot:activator="{ on }">
                <v-btn
                        dark
                        icon
                        v-on="on"
                >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item @click="onLogout">
                    <v-list-item-title>Cerrar Sesión</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
  export default {
    name: "Navbar",
    methods: {
      changeDrawer() {
        this.$emit('changeDrawer');
      },
      onLogout() {
        console.log('logout action');
      }
    }
  }
</script>

<style scoped>

</style>
