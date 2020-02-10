<template lang="pug">
    div.root-wrapper-container
      div.root-container
        template
          header.header-container
            app-header
          section.pagination-container
            pagination
          main.content-container 
            router-view
      
</template>

<script>

  export default {
    components: {
      appHeader: () => import('./components/header'),
      pagination: () => import('./components/pagination'),
    }
  }

</script>

<style lang="postcss">

  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');


  .root-wrapper-container {
    height: 100%;
  }

  .header-container {
    background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
    padding: 15px 0;
  }
    .avatar {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 20px;
    }

  .page-title {
    margin-bottom: 60px;
    font-size: 21px;
    font-weight: 600;
  }


  .content-container {
    background-image: url('~images/background/mountain_baloon.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    flex: 1;
    padding-top: 60px;

    @include phones {
      padding-top: 30px;
    }
  }
   
</style>