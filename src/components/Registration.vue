<template>
    <v-container>
    <!-- <v-card class="mx-auto" max-width="700">
    <v-toolbar color="purple darken-1">
      <v-toolbar-title>Register</v-toolbar-title>
    </v-toolbar>
    <v-form ref="form" v-model="form" class="pa-8 pt-8">
        <v-row>
            <v-text-field label="first name"></v-text-field>
        </v-row>
        <v-row>
            <v-text-field label="last name"></v-text-field>
        </v-row>
        <v-text-field label="Email Id"></v-text-field>
        <v-select
          v-model="e7"
          :items="courses"
          label="Select Courses"
          multiple
          chips
          persistent-hint
        ></v-select>
        <v-row justify="center">
          <v-col col-6 justify="center">
            <v-btn rounded color="green accent-4">Register</v-btn>
          </v-col>
          <v-col col-6 justify="center">
              <v-btn rounded color="light-blue darken-4">Reset</v-btn>
          </v-col>
        </v-row>
    </v-form>
    </v-card> -->

    <v-card class="mx-auto" max-width="400" raised>
        <v-toolbar color="deep-purple darken-1">
          <v-toolbar-title>
            <h1><strong>Registration</strong></h1>
        </v-toolbar-title>
        </v-toolbar>
      <v-form ref="form" v-model="reg_form" max-width="350" class="pa-8 pt-8">
        <v-row>
          <v-icon>mdi-account</v-icon>
          <v-text-field label="First Name" solo rounded dense>
          </v-text-field>
        </v-row>
        <v-row>
          <v-icon>mdi-account</v-icon>
          <v-text-field label="Last Name" solo rounded dense>
          </v-text-field>
        </v-row>
        <v-row>
          <v-icon>mdi-email</v-icon>
          <v-text-field label="Email" solo rounded dense>
          </v-text-field>
        </v-row>
        <v-row>
          <v-icon>mdi-phone</v-icon>
          <v-text-field label="Contact Number" solo rounded dense>
          </v-text-field>
        </v-row>
        <v-row>
        <v-icon>mdi-book</v-icon>
        <v-text-field label="Enter the Course" solo rounded dense>
        </v-text-field>
        </v-row>
        <v-row justify="center">
          <v-col col-6 justify="center">
            <v-btn rounded color="green accent-4">Register</v-btn>
          </v-col>
          <v-col col-6 justify="center">
              <v-btn rounded color="light-blue darken-4">Reset</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      courses: [
        'Github',
        'Dita-Ot',
        'Vuejs',
        'Technical-writing',
        'Angular'
      ]
    }
  }
}
</script>

<style scoped>

</style>
