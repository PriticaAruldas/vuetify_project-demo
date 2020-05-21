<template>
    <div>
         <v-tabs
      background-color="white"
      color="black"
      center
    >
    <h1>MLS Classroom</h1>
      <v-tab>Admin</v-tab>
      <v-tab>Teachers</v-tab>
      <v-tab>Students</v-tab>
    </v-tabs>
      <!-- <v-row>
      <v-btn @click="dialog = true" absolute dark fab right color="orange darken-4">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      </v-row>
      <br>
      <br>
      <br> -->
      <!-- <p class="text-right">Create Class</p> -->

      <v-dialog v-model="dialog" max-width="400px" tile>
      <template v-slot:activator="{ on }">
        <v-btn color="orange darken-4" absolute dark fab right v-on="on"><v-icon>mdi-plus</v-icon></v-btn>
        <h3 class="text-right">Create Class</h3>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create Class</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Class Name" v-model="class_name" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Section" v-model="section" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Subject" v-model="subject" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue" rounded text @click="dialog = false">Close</v-btn>
          <v-btn color="blue" rounded text @click="addclass">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-list >
      <v-row>
        <v-col v-for="c in classes" :key="c.subject">
      <v-card class="mx-auto" max-width="344" tile style="margin-top:20px">
          <!-- <v-toolbar color>
            <v-img src="@/assets/image2.png"></v-img>
            <v-toolbar-title><h2 class="sub_title" style="text-align:center">{{ c.class_name }}</h2></v-toolbar-title>
          </v-toolbar> -->
          <v-img
      class="white--text align-end"
      height="100px"
      src="https://static.vecteezy.com/system/resources/previews/000/541/187/non_2x/vector-abstract-beautiful-sunshine-blue-color-gradient-background.jpg">
      <v-card-title><h1><strong>{{ c.class_name }}</strong></h1></v-card-title>
    </v-img>
          <v-card-text style="background-color:#CFD8DC">
            <h2>Class Name: {{ c.class_name }}</h2>
            <h2>Section: {{ c.section }}</h2>
            <h2>Subject: {{ c.subject }}</h2>
          </v-card-text>
          <v-card-actions>
            <v-row justify="center">
            <v-btn class="mx-2" fab x-small dark color="red" @click="removeclass(i)"><v-icon>mdi-delete</v-icon></v-btn>
            <v-btn class="mx-2" fab x-small dark color="blue"><v-icon>mdi-share</v-icon></v-btn>
            </v-row>
          </v-card-actions>
      </v-card>
      </v-col>
      </v-row>
    </v-list>
    <!-- <v-card class="mx-auto" max-width="344" tile style="margin-top:20px">
      <v-toolbar color>
        <v-toolbar-title>Mathematics-Grade-4</v-toolbar-title>
      </v-toolbar>

    <v-card-text style="background-color:deep-purple accent-1">
      <div v-for="c in classes" :key="c.subject">
        <h2>{{ c.class_name }}</h2>
        <h2>{{ c.section }}</h2>
        <h2>{{ c.subject }}</h2>
      </div>
    </v-card-text>
    <v-card-actions>
     <v-btn fab x-small dark color="red"><v-icon>mdi-delete</v-icon></v-btn>
     <v-btn fab x-small dark color="blue"><v-icon>mdi-share</v-icon></v-btn>
    </v-card-actions>
  </v-card> -->
    </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      class_name: '',
      section: '',
      subject: '',
      classes: []
    }
  },
  methods: {
    addclass () {
      this.classes.push({
        class_name: this.class_name,
        section: this.section,
        subject: this.subject
      })
      this.class_name = ''
      this.section = ''
      this.subject = ''
    },
    removeclass (index) {
      this.classes.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>
