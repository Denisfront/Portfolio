<template lang="pug">
    .projects-item
        .projects-item__preview
            .projects-preview
                .preview-preview__img
                     img(src="~images/slider-projects/slider-1.jpg")
        .projects-item__desc
            .projects-desc
                .projects-desc__titile Сайт школы образования
                .projects-desc__text 
                    | Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="#").projects-desc__link http://loftschool.ru
                .projects-desc__btn
                    .btn-editing
                        button.btn-editing.btn-editing--remove Править
                        button.btn-editing.btn-editing--change Удалить

                    
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>

     .projects-item {
        width: calc(100% / 3 - 30px);
        box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
        background-color: #ffffff;
        margin-left: 30px;
        margin-bottom: 30px;
     }
    .projects-item__preview {
        margin-bottom: 40px;
     }

    .preview-preview__img {
        height: 190px;
     }

    .projects-item__desc {
        color: $text-color-admin;
        padding: 0 30px 31px;
     }
    .projects-desc__titile {
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 20px;
    }

     .projects-desc__text  {
        font-weight: 600;
        color: $text-color-admin-opacity07;
        margin-bottom: 20px;
        line-height: 30px;
     }

     .projects-desc__link {
         color: $color-active-purple;
         font-weight: 600;
         text-decoration: none;
     }

    .projects-desc__btn {
        margin-top: 35px;
    }
     .btn-editing {
        background-color: $white;
        font-weight: 600;
        color: $text-color-admin-opacity05;
        padding: 0;
        display: flex;
        justify-content: space-between;
      

        &--remove {
            padding-right: 30px;
              position: relative;

            &:before {
                content: '';
                position: absolute;
                right: 0;
                width: 17px;
                height: 17px;
                background: svg-load('pencil.svg', fill="$color-active-purple", width=100%, height=100%) center center no-repeat;
            }
           
        }

        &--change {
            padding-right: 30px;
              position: relative;

            &:before {
                content: '';
                position: absolute;
                right: 0;
                width: 15px;
                height: 15px;
                background: svg-load('cross.svg', fill="red", width=100%, height=100%) center center no-repeat;
            }
           
        }
     }

</style>