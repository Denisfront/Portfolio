<template lang="pug">
    .content
        .container.content__container
          .content__header
            h1.content-title__title Блок «Обо мне»
            button.content-title__btn.btn Добавить группу
          .content__items
            group-skills
            group-skills
            group-skills
</template>

<script>
  import groupSkills from '../groupSkills';

    export default {
      components: {
        groupSkills
      }
    }
</script>

<style lang="postcss" scoped>

    .content__header {
      display: flex;
    }

    
    .content-title__title {
      font-size: 21px;
      font-weight: 600;
      margin-right: 93px;
    }

     .content__items {
      display: flex;
      flex-wrap: wrap;
      margin-left: -30px;
     }
     
    .content-title__btn {
      color: $color-active-purple;
      font-weight: 600;
      border: none;
      padding: 0;
      display: flex;
      align-items: center;
      background-color: transparent;

      &:before {
        content: "+";
        display: block;
        width: 21px;
        height: 21px;
        border-radius: 50%;
        background-image: linear-gradient(to right, #006aed, #3f35cb);
        line-height: 20px;
        color: #fff;
        margin-right: 13px;
        flex-shrink: 0;
        flex-basis: 20px;
      }
    }
</style>