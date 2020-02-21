<template lang="pug">
   .section-reviews
        .container
            page-title
        .reviews-container
            .container
                .reviews-form
                    .reviews-form__title
                        .reviews-form__title-text Новый отзыв
                    form(@submit="send").reviews-form__content
                        .reviews-form__avatar
                            .reviews-form__upload(
                                :class="{filled: renderedPhoto.length}"
                                :style="{backgroundImage: `url(${renderedPhoto})`}"
                            )
                            input(
                                type="file"
                                @change='nandleFile'
                                )#file-rw-input.file-input-hidden
                            label(for="file-rw-input").btn-upload Добавить фото
                        .reviews-form__desc
                            .reviews-form__box
                                label.reviews-form__item
                                    .reviews-form__item-title Имя автора
                                    input(
                                        v-if="editMode === false"
                                        type="text" 
                                        v-model="review.author"
                                        :class="{'valid-error' : validation.hasError('review.author')}"
                                    ).reviews-form__input
                                    div(
                                        :class="{error : validation.hasError('review.author')}"
                                    )
                                      |  {{validation.firstError('review.author')}}
                                label.reviews-form__item
                                    .reviews-form__item-title Титул автора
                                    input(
                                        type="text"
                                        :class="{'valid-error' : validation.hasError('review.author')}"
                                        v-model="review.occ"
                                    ).reviews-form__input
                                    div(
                                        :class="{error : validation.hasError('review.occ')}"
                                    )
                                      |  {{validation.firstError('review.occ')}}
                            label.reviews-form__item-textarea
                                .reviews-form__item-title Отзыв
                                textarea(
                                    type="text"
                                    v-model="review.text"
                                    ).reviews-form__text-desc
                            .reviews-form__buttons
                                button(type="reset").button.button--reset отмена
                                button.button.button--wide сохранить
                .reviews-list
                    add-button
                    reviews-item(
                        v-for="review in reviews" 
                        :key="review.id"
                        :review="review"
                        @editExistedReview="editExistedReview"
                    )
                    

</template>

<script>
import { mapActions, mapState } from 'vuex';
import { Validator } from 'simple-vue-validator';
export default {
    mixin: [require('simple-vue-validator').mixin],
    validators: { 
        'review.author'(value) {
            return Validator.value(value)
             .required('Ой, вы забыли указать имя');         
        },
        'review.occ'(value) {
            return Validator.value(value)
             .required('Ой, вы забыли указать титул');         
        },
    },
    data() {
        return {
            editMode: false,
            renderedPhoto: '',
            review: {
                photo: {},
                author: '',
                occ: '',
                text: ''
            }
        }
    },
    created() {
        this.fetchReview();
    },
    
    components: {
        AddButton: () => import('../addButton'),
        reviewsItem: () => import('../reviewsItem'),
        pageTitle: () => import('../pageTitle') 
    },
    computed: {
        ...mapState('reviews', {
            reviews: state => state.reviews
        })
    },
    methods: {
        ...mapActions('reviews', ['addReview', 'fetchReview']),
        nandleFile(e) {
            const file = e.target.files[0];
            this.review.photo = file;
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

    editExistedReview(review) {
        const fullReview = review;
        console.log(fullReview);
    },

    send() {
        this.$validate().then(success => {
            if(!success) return;

            this.addReview(this.review);
            this.validation.reset();
        })
    }
}
  
}
</script>

<style lang="postcss" scoped>
    @import url('../../../styles/mixins.pcss');

    input {
        border: none;
        border-bottom: 1px solid $text-color-admin;
        outline: none;
        width: 100%;
    }

    .valid-error {
        border-bottom: 1px solid #fb0000;
    }

    .reviews-form {
        box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
        padding: 30px 20px;
        margin-bottom: 30px;
        background-color: $white;

    }

    .reviews-form__content {
        display: flex;
    }

    .reviews-form__avatar {
        width: 21%;
        margin-right: 31px;
        display: flex;
        flex-direction: column;
        align-items: center;

        @include tablets {
            width: 34%;
            margin-right: 22px;
        }
    }


    .reviews-form__title-text {
        font-size: 18px;
        font-weight: 700;
    }

    .reviews-form__item {
        width: 50%;
        margin-right: 30px;
        position: relative;

         @include tablets {
           width: 77%;
        }

        &:last-child {
            margin-right: 0;
        }
    }

    .reviews-form__item-title {
        margin-bottom: 10px;
        font-weight: 600;
        color: $text-color-admin-opacity05;
    }

    .reviews-form__desc {
        width: 58%;
     }

    .reviews-form__input {
        padding-bottom: 18px;
        margin-bottom: 37px;
    }

    .reviews-form__box {
        display: flex;
        justify-content: space-between;

        @include tablets {
            flex-direction: column;
        }
    }

   
    .reviews-form__input,
    .reviews-form__text-desc {
  
        font-weight: 600;
        color: $text-color-admin; 
    }

    .reviews-form__text-desc {
        width: 100%;
        resize: vertical;
        height: 116px;
        padding: 20px 80px 20px 20px;
        margin-bottom: 27px;

         @include tablets {
            height: 148px;
        }
    }

    .reviews-form__title {
        border-bottom: 1px solid rgba(#1f232d, 0.15);
        padding: 0px 2% 20px;
        margin-bottom: 31px;

        @include tablets {
            margin-bottom: 48px;
        }
    }

    .reviews-form__upload {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        overflow: hidden;
        background-color: $bg-color-img;
        position: relative;
        margin-bottom: 23px;

          &:before {
            content: '';
            background: svg-load('man-user.svg', fill=#fff, width=100%, height=100%) center center no-repeat;
            width: 85px;
            height: 113px;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

          &.filled {
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;

                &:before {
                    display: none;
                }
        }
    }

    .reviews-form__upload-text {
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

    .btn-upload {
        font-weight: 600;
        color: $color-active-purple;
        cursor: pointer;
    }

    .reviews-form__buttons {
        display: flex;
        justify-content: flex-end;
    }

    .button  {
        color: $white;
        text-transform: uppercase;
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        padding: 14px 49px;
        border-radius: 25px;

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
    .reviews-list {
        display: flex;
        flex-wrap: wrap;
        margin-left: -30px;
    }

    .error {
        padding: 1.1875rem 1.3125rem;
        background-color: #cd1515;
        position: absolute;
        left: 20px;
        bottom: -17px;
        color: #fff;
        font-size: 0.875rem;

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