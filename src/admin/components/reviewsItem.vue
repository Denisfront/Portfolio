<template lang="pug">
   .reviews-item
        .reviews-item__desc
            .reviews-item__author
                .reviews-item__author-avatar
                    .avatar.avatar--tiny
                        img(:src="baseURL + pathToTheImage"
                        ).avatar__userpic
                .reviews__author-desc
                    .reviews-item__author-username {{review.author}}
                    .reviews-item__author-subtitle {{review.occ}}
            .reviews-desc
                .reviews-desc__text {{review.text}}
                .reviews-desc__btn
                    .btn-editing
                        button(
                            type="button"
                            @click="editExistedReview"
                        ).btn-editing.btn-editing--remove Править
                        button(
                            type="button"
                            @click="removeExistedReview"
                        ).btn-editing.btn-editing--change Удалить
                    //- btn-editing(
                    //-     :review="review"
                    //- )
                  
</template>

<script>
        import btnEditing from './btnEditing';
        import { mapActions } from 'vuex';
      
    export default {
        data() {
            return {
                baseURL: 'https://webdev-api.loftschool.com/',
                pathToTheImage: this.review.photo
            }    
        },
        props:{
            review: {
                type: Object,
                default: () => {},
                required: true
            }
        },
        components: {
            btnEditing
        },
        methods: {
            ...mapActions('reviews', ['removeReviews', 'editReview']),
            async removeExistedReview() {
                await this.removeReviews(this.review)
                .catch()
            },
            async editExistedReview() {
                this.$emit('editExistedReview', this.review);
                await this.editReview(this.review)
            }
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
/* 
        &:hover:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: $white-opacity7;
            box-shadow: none;
        } */
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