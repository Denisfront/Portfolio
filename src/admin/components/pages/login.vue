<template lang="pug">
    .login
        .login__wrapper
            form(@submit.prevent="login").login__form#form-login
                .login__title Авторизация
                .login__row
                    label.login__item
                        .login__item-title Логин
                        input(v-model="user.name" type="text").login__input
                .login__row
                    label.login__item
                        .login__item-title Пароль
                        input(v-model="user.password" type="password").login__input
                .login__button
                    button(type="submit").btn Отправить     
                        
</template>

<script>

import axios from 'axios';

export default {
    template: '#form-login',
    data() {
        return {
            user: {
                name: '',
                password: ''
            }
        }
       
    },
    methods: {
        login() {
            const baseUrl = ' https://webdev-api.loftschool.com/';
            const token = '"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI1NiwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1ODA5MjczNjcsImV4cCI6MTU4MDk0NTM2NywibmJmIjoxNTgwOTI3MzY3LCJqdGkiOiJzZEJ0b2dHQlN4OUUzUmNkIn0.GAunUO_daRwV3cnGcyBvjMXziTrZNTjYfCNKFQ4QhOs"'
            axios.post(baseUrl + '/login', this.user).then( response => {
                console.log(response.data);
            }).catch(error =>{
                console.log(error.response.data);
            })
            console.log(this.user)
        }
    }
}
</script>
<style lang="postcss" scoped>
    @import url('../../../styles/mixins.pcss'); 
    .login {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('~images/background/mountain_baloon.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        background-position: center center;

        @include phones {
            background-image: none;
        }

        &:before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: 0.5;
            background: $text-color;

             @include phones {
                background-color: $white;
                opacity: 1;
            }
        }
    }

    .login__wrapper {
        position: relative;
    }

    .login__form {
        width: 563px;
        padding: 62px 77px;
        background-color: $white;

        @include phones {
            width: 100%;
            padding: 0;
        }
    }

    .login__row {
        margin-bottom: 40px;
    }

    .login__button{
        text-align: center;
    }

    .login__title {
        color: $text-color-admin;
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 28px;
        text-align: center;
    }

    .login__item-title {
        color: $text-color-admin-opacity3;
        font-weight: 600;
        margin-left: 40px;
    }

    .login__input {
        border: none;
        outline: none;
        border-bottom: 2px solid $text-color;
        padding: 20px 40px;
        width: 100%;
        font-size: 18px;
        font-weight: 700;
        color: $text-color-admin;
        position: relative;
        background-color: transparent;
        position: relative;

        &:focus {
            border-color: $hover-color-purple;
        }

    }

    .btn {
         border: none;
        cursor: pointer;
        outline: none;
        padding: 30px 120px;
        background-image: linear-gradient(to right, #9300e8 0%, #4a00ed 100%);
        text-transform: uppercase;
        font-size: 18px;
        color: $white;
        border-radius: 39px 3px;

        @include phones {
            border-radius: 40px 5px;
            padding: 35px 96px;
        }
    }
</style>

