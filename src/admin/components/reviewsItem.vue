<template lang="pug">
   .reviews-item
        .reviews-item__desc
            .reviews-item__author
                .reviews-item__author-avatar
                    .avatar.avatar--tiny
                        img(src="~images/content/dmk.jpg").avatar__userpic
                .reviews__author-desc
                    .reviews-item__author-username Ковальчук Дмитрий
                    .reviews-item__author-subtitle Основатель Loftshcool
            .reviews-desc
                .reviews-desc__text 
                    | Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах.
                .reviews-desc__btn
                    btn-editing
                  
</template>

<script>
      import btnEditing from './btnEditing'
      
    export default {
        components: {
            btnEditing
        }
}
</script>

<style lang="postcss" scoped>
    
     .reviews-item {
        width: 340px;
        box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
        background-color: $white;
        margin-bottom: 30px;
        position: relative;
        margin-left: 29px;

        &:hover:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: $white-opacity7;
            box-shadow: none;
        }
     }

    .reviews-item__preview {
        margin-bottom: 40px;
        position: relative;
     }

    .preview-preview__img {
        height: 190px;
     }

    .reviews-item__desc {
        color: $text-color-admin;
        padding: 30px 31px;
     }
    .reviews-desc__titile {
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 20px;
    }

     .reviews-desc__text  {
        font-weight: 600;
        color: $text-color-admin-opacity07;
        margin-bottom: 74px;
        line-height: 30px;
     }

     .reviews-desc__link {
         color: $color-active-purple;
         font-weight: 600;
         text-decoration: none;
     }

    .reviews-desc__btn {
        margin-top: 35px;
    }


    .reviews-item__author {
    display: flex;
    align-items: center;
    margin-bottom: 29px;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(#1f232d, 0.15);
}

.reviews-item__author-avatar {
    width: 20%;
    margin-right: 10px;
}

.reviews-item__author-desc {
    width: 70%;
    color: $text-color;
    white-space: nowrap;
}

.reviews-item__author-username {
    font-size: 18px;
    font-weight: 700;
}

.reviews-item__author-subtitle {
    color: $text-color-opacity3;
    font-weight: 600;
}
     
</style>