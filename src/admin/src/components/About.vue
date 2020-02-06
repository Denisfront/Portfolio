<template lang="pug">
    .about
        //- login
        main-header
        Pagination
        Projects
        //- Content
</template>

<script>
import MainHeader from './Header.vue'
import Pagination from './Pagination.vue'
import Content from './Content.vue'
import Login from './Login.vue'
import Projects from './Projects.vue'

export default {
    components: {
        Login,
        MainHeader,
        Pagination,
        Content,
        Projects
    }
}
</script>

<style lang="postcss" scoped>  
    .about {
      color: $text-color-admin;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: minmax(80px, max-content) 77px 1fr;
      grid-template-areas: 
          "header"
          "pagination"
          "content"
    }
</style>