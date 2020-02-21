<template lang="pug">
    .header
      .container.header__container
          .header__left
              .user
                  .user__avatar
                      .avatar
                          img(src="~/images/content/user.jpg")
                  .user__username.subtitle Санников Денис
              .header__slogan Панель разработчика 
          .header__right
              a(@click="logoutUser").btn Выйти
</template>

<script>
import { mapActions } from 'vuex';
    export default {
      methods: {
        ...mapActions('user', ['logout']),
        logoutUser() {
          this.logout();
          this.$router.replace('/login'); 
        }
      }
    };
</script>

<style lang="postcss" scoped>
    .header {
        color: $white;
        }

    .header__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header__left {
      display: flex;
      align-items: center;
      white-space: nowrap;

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

    .btn {
      color: $white-opacity7;
    }
</style>