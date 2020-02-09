<template lang="pug">
    .projects-item
        .projects-item__preview
            .projects-preview
                .preview-preview__img
                     img(src="~images/slider-projects/slider-1.jpg")
                tags
        .projects-item__desc
            .projects-desc
                .projects-desc__titile Сайт школы образования
                .projects-desc__text 
                    | Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="#").projects-desc__link http://loftschool.ru
                .projects-desc__btn
                    btn-editing

                    
</template>

<script>
    import tags from './tags'
    import btnEditing from './btnEditing'
export default {
    components: {
        tags,
        btnEditing
    }
}
</script>

<style lang="postcss" scoped>

     .projects-item {
        width: calc(100% / 3 - 30px);
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

    .projects-item__preview {
        margin-bottom: 40px;
        position: relative;
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
    
</style>