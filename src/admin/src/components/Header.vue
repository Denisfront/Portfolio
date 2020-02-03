<template lang="pug">
    header.header
        .container.header__container
            .header__left
                .user
                    .user__avatar
                        .avatar
                            img(src="~/images/content/user.jpg")
                    .user__username.subtitle Санников Денис
                .header__slogan Панель разработчика 
            .header__right
                a(href="#").btn Выйти
</template>

<script>
    export default {
        name: 'MainHeader',
    };
</script>

<style lang="postcss" scoped>
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
</style>