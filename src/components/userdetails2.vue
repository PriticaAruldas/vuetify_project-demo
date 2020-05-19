<template>
    <v-app>
        <div>
            User Profile
            <v-card class="mx-auto" max-width="700px" raised>
                <v-row>
                    <v-col col-6>
                            <v-row justify="center">
                                <v-badge bordered bottom color="deep-purple accent-4" dot offset-x="50" offset-y="10">
                                    <v-avatar size="150">
                                    <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                                    </v-avatar>
                                </v-badge>
                            </v-row>
                            <div v-for="user in users" :key="user.id">
                                <h1 style="text-align:center"><strong>{{ user.name }}</strong></h1>
                            </div>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col col-6>
                        <v-row>
                            <v-col col-2 sm="4">
                                <h3>Email Id:</h3>
                            </v-col>
                            <v-col col-10 sm="8">
                                <div v-for="user in users" :key="user">
                                <h3><strong>{{ user.email }}</strong></h3>
                                </div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col col-2 sm="4">
                                <h3>Contact Number:</h3>
                            </v-col>
                            <v-col col-10 sm="8">
                                <div v-for="user in users" :key="user">
                                <h3><strong>{{ user.phone }}</strong></h3>
                                </div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col col-2 sm="4">
                                <h3>Website:</h3>
                            </v-col>
                            <v-col col-10 sm="8">
                                <div v-for="user in users" :key="user">
                                <h3><strong>{{ user.website }}</strong></h3>
                                </div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-btn class="mx-2" fab dark small color="indigo darken-4"><v-icon dark>mdi-facebook</v-icon></v-btn>
                            <v-btn class="mx-2" fab dark small color="blue accent-3"><v-icon>mdi-twitter</v-icon></v-btn>
                            <v-btn class="mx-2" fab dark small color="indigo darken-2"><v-icon>mdi-linkedin</v-icon></v-btn>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
        </div>
    </v-app>
</template>

<script>
export default {
  data () {
    return {
      users: []
    }
  },
  created () {
    this.$http.get('https://jsonplaceholder.typicode.com/users/7')
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

</style>
