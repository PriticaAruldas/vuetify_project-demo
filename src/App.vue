<template>
  <v-app>
    <nav>
      <!-- Start of app toolbar -->
      <v-toolbar app color="indigo darken-4">
          <v-app-bar-nav-icon @click="drawer = true" color="white"></v-app-bar-nav-icon>
        <v-toolbar-title class="headline text-uppercase" style="color:white">Classroom</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <!-- End of app toolbar -->

      <!-- Start of mobile side menu -->
      <v-navigation-drawer app v-model="drawer" left>
        <!-- Menu title -->
        <v-toolbar flat>
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="title">Menu</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list-item-group>
          <v-list-item to="/home">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
          <v-list-item to="/loginpage">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
           <v-list-item to="/register">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item>
          <v-list-item to="/dashboard">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item to="/screen">
            <v-list-item-title>screen</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-navigation-drawer>
      <!-- End of mobile side menu -->
    </nav>

   <v-content>
      <!-- Display view pages here based on route -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      drawer: false // Hide mobile side menu by default
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
