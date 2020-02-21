<template lang="pug">
    .section-projects
        .container
            page-title
        .projects-container
            .container
                .projects-form
                    .projects-form__title
                        .projects-form__title-text Добавление работы
                    form(@submit="send").projects-form__content
                        .projects-form__preview
                            .projects-form__upload.hidden-element(
                                :class="{filled: renderedPhoto.length}"
                                :style="{backgroundImage: `url(${renderedPhoto})`}"
                            )
                                .projects-form__upload-text(
                                    :class="{'hidden-element': renderedPhoto.length}"
                                )
                                    | Перетащите или загрузите для загрузки изображения
                                input(
                                    type="file"
                                    @change="nandleFile"
                                    )#file-pr-input.file-input-hidden
                                label(
                                    for="file-pr-input"
                                    :class="{'hidden-element': renderedPhoto.length}"
                                    ).button Загрузить
                                div(
                                :class="{error : validation.hasError('project.photo')}"
                                ) {{validation.firstError('project.photo')}}
                        .projects-form__desc
                            label.projects-form__item
                                .projects-form__item__title Название
                                input(
                                    type="text"
                                    v-model="project.title"
                                    ).projects-form__input
                                div(
                                    :class="{error : validation.hasError('project.title')}"
                                    )  {{validation.firstError('project.title')}}
                            label.projects-form__item
                                .projects-form__item__title Ссылка
                                input(
                                    type="text"
                                    v-model="project.link"
                                    ).projects-form__input
                                div(
                                    :class="{error : validation.hasError('project.link')}"
                                    ) {{validation.firstError('project.link')}}
                            label.projects-form__item
                                .projects-form__item__title Описание
                                textarea(
                                    type="text"
                                    v-model="project.description"
                                    ).projects-form__text-desc
                                div(
                                    :class="{error : validation.hasError('project.description')}"
                                    ) {{validation.firstError('project.description')}}
                            label.projects-form__item
                                .projects-form__item__title Добавление тэга
                                input(
                                    type="text"
                                    v-model="project.techs"
                                    @input="tagsChanged"
                                    @keyup="tagsChanged"
                                    ).projects-form__input
                                div(
                                    :class="{error : validation.hasError('project.techs')}"
                                    ) {{validation.firstError('project.techs')}}
                                .tags
                                    ul.tags
                                        li.tags__item {{project.techs}}
                            .projects-form__buttons
                                button(type="reset").button.button--reset отмена
                                button.button.button--wide сохранить
                .projects-list
                    add-button  
                    projects-item(
                        v-for="project in projects"
                        :key="project.id"
                        :project="project"
                    )
   
</template>


 <script>
import { mapActions, mapState } from 'vuex';
import { Validator } from 'simple-vue-validator';
export default {
        mixin: [require('simple-vue-validator').mixin],
        validators: { 
            'project.title'(value) {
                return Validator.value(value)
                .required('Ой, вы не придумали название');         
            },
            'project.link'(value) {
                return Validator.value(value)
                .required('Ой, вы забыли указать ссылку');         
            },
            'project.techs'(value) {
                return Validator.value(value)
                .required('Ой, вы забыли указать технологии');         
            },
            'project.description'(value) {
                return Validator.value(value)
                .required('Ой, вы забыли написать описание');         
            },
            'project.photo'(value) {
                return Validator.value(value)
                .required('Покажите свою работу в кратинке');         
            },
    },


    components: {
        addButton: () => import('../addButton'),
        projectsItem: () => import('../projectsItem'),
        pageTitle: () => import('../pageTitle'),
    },
    data() {
        return {
            renderedPhoto: '',
            project: {
                photo: {},
                title: '',
                techs: '',
                link: '',
                description: ''

            }
        }
    },

    created() {
        this.fetchProjects();
    },

    computed: {
        ...mapState('projects', {
            projects: state => state.projects
        })
    },

    methods: {
        ...mapActions('projects', ['addProject', 'fetchProjects']),
        nandleFile(e) {
            const file = e.target.files[0];
            this.project.photo = file;
            this.renserImageFile(file);
        },
        renserImageFile(file) {
            const reader = new FileReader();
        try {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
            this.renderedPhoto = reader.result;
            }
        } catch (error) {
            throw new Errow('Ошибка при чтении файла')
        }
      
        },
        send() {
            this.$validate().then(success => {
                if(!success) return;

                this.addProject(this.project);
                this.project = '';
                this.validation.reset();
            })
        },
        tagsChanged(e) {
            this.project.techs = e.target.value
            if(e.key === ",") {
                const tag = this.project.techs = e.target.value;
                console.log(tag);
                
                this.project.techs = tag;
            }
        }
    }
   
}
</script>


<style lang="postcss" scoped>
    label {
        position: relative;
    }

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

        &.filled {
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;


        }         
    }

 

    .projects-form__upload-text {
         padding: 0 27%;
         line-height: 33px;
         font-weight: 600;
         color: $text-color-admin-opacity05;
         margin-bottom: 20px;

            &.hidden-element {
                display: none;
            }
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

        &.hidden-element {
            display: none;
        }
        
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

    .tags {
        display: flex;
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
}

    .tags__item {
        padding: 10px 30px 10px 20px;
        color: $color-tags-opacity;
        background-color: #f4f4f4;
        border-radius: 20px;
        margin-right: 15px;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            right: 10px;
            cursor: pointer;
            top: 14px;
            width: 11px;
            height: 11px;
            background: svg-load('cross.svg', fill="$color-active-purple", width=100%, height=100%) center center no-repeat; 
        }
}

.error {
        padding: 1.1875rem 1.3125rem;
        background-color: #cd1515;
        position: absolute;
        left: 116px;
        bottom: -65px;
        color: #fff;
        font-size: 0.875rem;

        &--text {
            bottom: -35px;
        }

        &:before {
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            top: -0.625rem;
            right: 43%;
            border-color: transparent transparent #cd1515;
            border-style: solid;
            border-width: 0 20px 14px;
    }
}
</style>