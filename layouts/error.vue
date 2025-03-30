<template>
  <v-app dark>
   
    <img v-if="error.statusCode === 404"
     src="/woman.png" style="margin: 320px auto 30px auto;"
    />
    <NuxtLink to="/">
      Retour a l'Accueil
    </NuxtLink>
    
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>

*{
  box-sizing: border-box;
}

.v-application{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
}
h1 {
  font-size: 20px;
}
</style>
