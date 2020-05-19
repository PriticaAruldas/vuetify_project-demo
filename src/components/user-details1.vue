<template>
<v-app>
<div v-for="country in countries" :key="country.numericCode">
    <h1>{{ country.name }}</h1>
    <h1>{{ country.numericCode }}</h1>
    <h1>{{ country.population }}</h1>
    <h1>{{ country.languages.name }}</h1>
</div>
</v-app>
</template>

<script>
export default {
  data () {
    return {
      countries: []
    }
  },
  mounted () {
    this.$http.get('https://restcountries.eu/rest/v2/lang/es')
      .then(function (response) {
        this.countries = response.body
        console.log(response)
      })
      .catch(function (error) {
        console.log('Error', error)
      })
  }
}
</script>

<style scoped>

</style>
