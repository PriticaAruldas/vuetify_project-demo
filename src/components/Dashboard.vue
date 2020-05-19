<template>
    <v-app>
    <v-container>
     <!-- <v-card
    class="mx-auto overflow-hidden"
    height="700"
  > -->
    <!-- <v-app-bar
      color="deep-purple"
      dark
    > -->
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <!-- <v-toolbar-title>Title</v-toolbar-title> -->
    <!-- </v-app-bar> -->

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color="teal"
      right
    >

    <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Patricia Lebsack</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="white--text text--black"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/userdetails">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Account</v-list-item-title>
          </v-list-item>

          <v-list-item to="/userdetails1">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>User details </v-list-item-title>
          </v-list-item>

          <v-list-item to="/userdetails2">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>User details </v-list-item-title>
          </v-list-item>

          <v-list-item to="/userdetails">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>User details </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

     <v-col cols="12" sm="12" md="6">
        <v-card raised>
          <v-toolbar color="cyan darken-4">
            <template v-slot:extension>
              <v-row justify="center">
               <v-avatar size="150">
                    <img src="https://randomuser.me/api/portraits/women/81.jpg" alt="John">
                </v-avatar>
              </v-row>
            </template>
          </v-toolbar>

          <v-card-text style="margin-top:55px" class="grey lighten-5">
               <div v-for="post in posts" :key="post.id" class="single-blog" style="text-align:center">
                    <h1><strong>{{post.name}}</strong></h1>
                    <h2>{{post.email}}</h2>
                    <h3>{{post.phone}}</h3>
                    <h3>{{post.website}}</h3>
                </div>
          </v-card-text>
        </v-card>
      </v-col>
  <!-- </v-card> -->
  </v-container>
    </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      posts: []
    }
  },
  created () {
    this.$http.get('https://jsonplaceholder.typicode.com/users/4')
      .then(function (res) {
        this.posts = res
        console.log(res)
      })
      .catch(function (error) {
        console.log('Error', error)
      })
  }
}
</script>

<style scoped>

</style>
