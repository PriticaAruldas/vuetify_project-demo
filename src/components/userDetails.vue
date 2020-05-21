<template>
    <v-app>
       <v-row style="margin-left:5px; margin-top:5px">
     <v-btn fab small color="purple darken-4" to="/udashboard">
     <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
   </v-row>
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
