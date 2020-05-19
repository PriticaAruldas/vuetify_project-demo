<template>
<v-app>
 <v-container-fluid>
   <v-row style="margin-left:5px; margin-top:5px">
     <v-btn fab small color="purple darken-4" to="/">
     <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
   </v-row>
   <br>
     <v-card
    class="mx-auto"
    style="max-width:500px;">
    <v-toolbar color="blue-grey" cards dark flat>
      <v-card-title class="title font-weight-regular">Sign In</v-card-title>
    </v-toolbar>
    <v-form ref="form" v-model="form" class="pa-8 pt-8">
      <v-text-field v-model="email" label="Enter Email Id"  :rules="emailRules" outlined shaped required></v-text-field>
      <v-text-field  v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1" label="Enter Password"  hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"  outlined shaped required></v-text-field>

      <v-row justify="center">
        <v-btn class="ma-2" rounded color="deep-purple">Login</v-btn>
      </v-row>
    </v-form>
  </v-card>
 </v-container-fluid>
 </v-app>

</template>

<script>
export default {
  data () {
    return {
      show1: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match'),
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ]
      }
    }
  }

  // data () {
  //   return {
  //     valid: false,
  //     required(propertyType=any){
  //       return (v=string) =>
  //       (v && v.length > 0) || 'You must input a ${propertyType}'
  //     },
  //     minLength:(propertyType=string, minLength=number){
  //       return(v=string) =>
  //       (v && v.length >= minLength) ||
  //       '${propertyType} must be less than ${minLength} characters'
  //     }
  //   }
  // }
}
</script>

<style scoped>

</style>
