<template lang="pug">
    .about
        //- login
        main-header
        Pagination
        Content
</template>

<script>
import MainHeader from './Header.vue'
import Pagination from './Pagination.vue'
import Content from './Content.vue'
import Login from './Login.vue'

export default {
    components: {
        Login,
        MainHeader,
        Pagination,
        Content
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