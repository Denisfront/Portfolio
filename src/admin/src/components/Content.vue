<template lang="pug">
    .content
        .container.content__container
          .content__header
            h1.content-title__title Блок «Обо мне»
            button.content-title__btn.btn Добавить группу
          .content__items
            group-skills
            group-skills
</template>

<script>
    import GroupSkills from './GroupSkills.vue'
    export default {
        name: 'Content',
        components: {
            GroupSkills
        }
    }
</script>

<style lang="postcss" scoped>
    .content {
      background-image: url('~images/background/mountain_baloon.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      grid-area: content;
      position: relative;
    }

    .content__container {
      display: grid;
      grid-template-rows: 139px 1fr;
      grid-template-areas: 
        "content-header" 
        "items"
    }

    .content__header {
      grid-area: content-header;
      height: 100%;
      display: flex;
      align-items: center;
    }

    .content__items{
      grid-area: items;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 32px;
    }

    .content-title__title {
      font-size: 21px;
      font-weight: 600;
      margin-right: 93px;
    }
    .content-title__btn {
      color: $color-active-purple;
      font-weight: 600;
      background-color: transparent;
      position: relative;
      padding: 0 0 0 35px;

      /* &:before {
        content: '+';
        position: absolute;
        left: 0;
        display: block;
        font-weight: 600;
        width: 21px;
        height: 21px;
        background-color: $color-active-purple;
        border-radius: 50%;
      } */
    }
    .btn {
      position: relative;
       &:before {
        content: '+';
        position: absolute;
        left: 0;
        display: block;
        font-weight: 600;
        width: 21px;
        height: 21px;
        background-color: $color-active-purple;
        border-radius: 50%;
      }
    }
</style>