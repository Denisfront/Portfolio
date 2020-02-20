<template lang="pug">  
    .group-skills
        .categories(v-for="(category, index) in categories" :key="category.id")
            form(@submit.prevent="addNewCategories(index)").categories-form
                .categories-form__wrap
                    label.categories-form__row
                        input(  type="text" 
                                placeholder="Название новой группы" 
                                v-model="title").categories-form__name
                    .buttons
                        button.approval-btn.approval-btn--tick
                        button(type="button" @click="removeExistedCaregorirs").approval-btn.approval-btn--cross
                skills-list(
                    :category="category"
                )


</template>

<script>
    import skillsList from './skillsList';
    import {mapActions, mapState} from 'vuex';
export default {
    data() {
        return {
            title: '',
            displayName: false,
        }
    },

    components: {
        skillsList
    },
    created() {
        this.fetchCategories();
    },
    computed: {
        ...mapState('categories',{
           categories: state => state.categories
        })
    },
    methods: {
        ...mapActions('categories', ['addCategory', 'fetchCategories', 'removeCaregorirs']),
        async addNewCategories(categoryIndex) {
            console.log(categoryIndex)
            this.categories[categoryIndex]
             await this.addCategory(this.title)
                .catch(error => {
                    alert(error.message);
                })
        },
        async removeExistedCaregorirs() {
            // await this.removeCaregorirs(this.category)
           console.log(this.categories.id);
           
            
        }
    }
}
</script>

<style lang="postcss" scoped>
    input {
        border: none;
        border-bottom: 1px solid black;
        outline: none;
    }
    
    .categories {
        padding: 30px 20px;
        background-color: $white;
        box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
        width: calc(100% / 2 - 30px);
        margin-left: 30px;
        margin-bottom: 30px;
    }
    .categories__list {
        min-height: 240px;
    }

    .group-skills {
      display: flex;
      flex-wrap: wrap;
    }

        .group-skills__form {
            background-color: $white;
        }

    .categories-form__name {
        font-size: 18px;
        font-weight: 600;
        color: $text-color-admin;
        padding: 0 45px 10px 0;
    }
    .categories-form__wrap {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    .skills-form__name-skill {
        font-size: 16px;
        color: $text-color-admin;
        padding: 0 30px 16px 20px;
        margin-right: 10px;
        width: 40%;
    }

    .skills-form__percent {
        width: 19%;
        margin-right: 30px;
        padding: 0 21px 1rem 0.6875rem;
    }

    .skills-form {
        display: flex;
        justify-content: flex-end;
    }

    .btn {
        display: block;
        width: 40px;
        height: 40px;
        background-color: $color-active-purple;
        border-radius: 50%;
        padding: 0;
        position: relative;

        &:before {
            content: '+';
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 30px;
            color: $white;
            font-weight: 400;
        }
    }

    .approval-btn {
        margin-right: 19px;

        &:last-child {
            margin-right: 0;
        }
        
        &--tick {
            width: 15px;
            height: 12px;
            background: svg-load('tick.svg', fill=green, width=100%, height=100%) center center no-repeat;
        }

        &--cross {
            width: 14px;
            height: 12px;
            background: svg-load('cross.svg', fill=#bf2929, width=100%, height=100%) center center no-repeat;
        }
    }
</style>