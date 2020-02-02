<template lang="pug">
  .about
    header.header
      .container.header__container
        .header__left
          .user
            .user__avatar
              .avatar
                img(src="../images/content/user.jpg")
            .user__username.subtitle Санников Денис
          .header__slogan Панель разработчика 
        .header__right
          a(href="#").btn Выйти
    .breadcrumbs
      .container.breadcrumbs__container
        ul.breadcrumbs__list
          li.breadcrumbs__item
            a(href="#").breadcrumbs__link.active Обо мне 
          li.breadcrumbs__item 
            a(href="#").breadcrumbs__link Работы
          li.breadcrumbs__item 
            a(href="#").breadcrumbs__link Отзывы
    .content
      .container.content__container
        .content__header
          h1.content-title__title Блок «Обо мне»
          button.content-title__btn Добавить группу
        .content__items
          .new-group
            form.new-group__skills
</template>

<style lang="postcss">
    .about {
      color: $text-color-admin;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: minmax(80px, max-content) 77px 1fr;
      grid-template-areas: 
          "header"
          "breadcrumbs"
          "content"
    }

    .header {
      grid-area: header;
      background-color: $bg-color-header;
      color: $white;
    }

    .header__container {
      display: grid;
      grid-template: 
        "left right" 1fr 
        / 1fr 1fr;
      align-items: center;
      height: 100%;
    }

    .header__left {
      grid-area: left;
      display: flex;
      align-items: center;
    }

    .header__right {
      grid-area: right;
      justify-self: end;
    }

    .header__slogan {
      color: $white-opacity5;
      font-size: 14px;
    }

    .user {
      display: flex;
      align-items: center;
      margin-right: 28px;
    }

    .breadcrumbs__item {
      margin-right: 50px;

      &:last-child{
        margin-right: 0;
      }
    }

    .breadcrumbs__container {
      grid-area: breadcrumbs;
      align-items: center;
      display: flex;
      height: 100%;
    }

    .breadcrumbs__link {
      text-decoration: none;

      &.active {
        color: $color-active-purple;
        position: relative;
        font-weight: 600;

        &:before {
          content: '';
          position: absolute;
          width: 125px;
          bottom: -30px;
          height: 3px;
          left: -50%;
          background-color: $color-active-purple;
        }
      }
    }

    .breadcrumbs__list {
      display: flex;
      margin-left: 36px;
    }

    
    
    .content {
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
    .avatar {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 20px;
    }

    .btn {
      color: $white-opacity7;
    }

</style>