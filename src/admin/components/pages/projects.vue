<template lang="pug">
    .section-projects
        .container
            page-title
        .projects-container
            .container
                .projects-form
                    .projects-form__title
                        .projects-form__title-text Добавление работы
                    form.projects-form__content
                        .projects-form__preview
                            .projects-form__upload
                                .projects-form__upload-text
                                    | Перетащите или загрузите для загрузки изображения
                                input(type="file")#file-pr-input.file-input-hidden
                                label(for="file-pr-input").button Загрузить
                        .projects-form__desc
                            label.projects-form__item
                                .projects-form__item__title Название
                                input(type="text").projects-form__input
                            label.projects-form__item
                                .projects-form__item__title Ссылка
                                input(type="text").projects-form__input
                            label.projects-form__item
                                .projects-form__item__title Описание
                                textarea(type="text").projects-form__text-desc
                            label.projects-form__item
                                .projects-form__item__title Добавление тэга
                                input(type="text").projects-form__input
                                .tags
                            .projects-form__buttons
                                button(type="reset").button.button--reset отмена
                                button.button.button--wide сохранить
                .projects-list
                    add-button  
                    projects-item
   
                    
                

               
                              

</template>


 <script>

export default {

    components: {
        addButton: () => import('../addButton'),
        projectsItem: () => import('../projectsItem'),
        pageTitle: () => import('../pageTitle')
    }
}
</script>


<style lang="postcss" scoped>

    input {
        border: none;
        border-bottom: 2px solid $text-color-admin;
        outline: none;
        width: 100%;
    }
    .projects-form {
        background-color: $white;
        box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
        padding: 30px 20px;
        margin-bottom: 30px;

    }
    .projects-form__content {
        display: flex;
        justify-content: space-between;
    }
    .projects-form__preview {
        width: 50%;
        margin-right: 28px;
    }


    .projects-form__title-text {
        font-size: 18px;
        font-weight: 700;
    }

    .projects-form__item__title {
        margin-bottom: 21px;
    }

    .projects-form__desc {
        width: 50%;
     }

    .projects-form__input {
        padding-bottom: 18px;
    }

    .projects-form__input,
    .projects-form__text-desc {
        margin-bottom: 30px;
        font-weight: 600;
        color: $text-color-admin; 
    }

    .projects-form__text-desc {
        width: 100%;
        resize: vertical;
        height: 146px;
        padding: 20px 80px 20px 20px;
    }

    .projects-form__title {
        border-bottom: 1px solid rgba(#1f232d, 0.15);
        padding: 30px 2%;
        margin-bottom: 48px;
    }

    .projects-form__upload {
       border: 1px dashed #a1a1a1;
       background-color: #dee4ed;
       max-width: 494px;
       height: 276px;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
    }

    .projects-form__upload-text {
         padding: 0 27%;
         line-height: 33px;
         font-weight: 600;
         color: $text-color-admin-opacity05;
         margin-bottom: 20px;
    }


       
    .file-input-hidden {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        position: absolute;
        z-index: -10;

        &:focus + label {
            outline: 1px solid #0078d7;
            outline: -webkit-focus-ring-color auto 5px;
        }
    }
    .projects-form__buttons {
        display: flex;
        justify-content: flex-end;
    }

    .button  {
        color: $white;
        text-transform: uppercase;
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        padding: 14px 49px;
        border-radius: 25px;
        cursor: pointer;

        &--reset {
            text-transform: capitalize;
            font-weight: 600;
            padding: 0;
            border-radius: 0%;
            background-image: none;
            background-color: $white;
            color: $color-active-purple;
            margin-right: 59px;
        }

        &--wide {
            border-radius: 30px;
             padding: 21px 49px;
        }
    }
    .projects-list {
        display: flex;
        flex-wrap: wrap;
        margin-left: -30px;
    }
</style>