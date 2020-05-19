<template>
    <v-app>
       <!-- <v-col cols="12" sm="12" md="6">
        <v-card raised>
          <v-toolbar color="cyan darken-4">
            <template v-slot:extension>
              <v-row justify="center">
               <v-avatar size="150">
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-avatar>
              </v-row>
            </template>
          </v-toolbar>

          <v-card-text style="margin-top:55px" class="grey lighten-5">
               <div v-for="post in posts" :key="post.id" class="single-blog" style="text-align:center">
                    <h1><strong>Name : {{post.name}}</strong></h1>
                    <h2>city : {{post.address.city}}</h2>
                    <h3>Contact Number : {{post.phone}}</h3>
                    <h3>Website : {{post.website}}</h3>
                </div>
          </v-card-text>
        </v-card>
      </v-col> -->
      <v-card class="mx-auto" max-width="400">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" height="230px">
          <v-row justify="center" style="margin-top:15px">
          <v-avatar size="130px">
              <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
          </v-avatar>
          </v-row>
           <div style="margin-top:4px; color:white" v-for="user in users" :key="user.id">
            <v-row justify="center">
              <h1><strong>{{ user.name }}</strong></h1>
            </v-row>
          </div>
        </v-img>
         <v-row justify="center">
           <v-col col-2 sm="2" >
             <v-icon medium color="teal darken-2">mdi-email</v-icon>
           </v-col>
           <v-col col-10 sm="10">
             <div v-for="user in users" :key="user">
                <h3><strong>{{ user.email }}</strong></h3>
              </div>
           </v-col>
         </v-row>
         <v-row>
           <v-col col-2 sm="2">
             <v-icon medium color="blue">mdi-earth</v-icon>
           </v-col>
           <v-col col-10 sm="10">
             <div v-for="user in users" :key="user">
                <h3><strong>{{ user.website }}</strong></h3>
              </div>
           </v-col>
         </v-row>
        <v-row justify="center" style="margin-bottom:10px">
          <v-btn class="mx-2" fab dark x-small color="red accent-3"><v-icon dark>mdi-instagram</v-icon></v-btn>
          <v-btn class="mx-2" fab dark x-small color="blue accent-3"><v-icon>mdi-twitter</v-icon></v-btn>
          <v-btn class="mx-2" fab dark x-small color="indigo darken-2"><v-icon>mdi-linkedin</v-icon></v-btn>
        </v-row>
      </v-card>
    </v-app>
</template>

<script>
export default {
  data () {
    return {
      users: []
    }
  },
  methods: {
  },
  created () {
    this.$http.get('https://jsonplaceholder.typicode.com/users/5')
      .then(function (res) {
        this.users = res
        console.log(res)
      })
      .catch(function (error) {
        console.log('Error', error)
      })
  }
}
</script>

<style scoped>
.img-container{
    text-align: center;
      display: block;
}
</style>
