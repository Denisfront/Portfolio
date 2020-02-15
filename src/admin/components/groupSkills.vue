<template lang="pug">  
    .group-skills
        .categories(v-for="category in categories" :key="category.id")
            form(@submit.prevent="addNewCategories").categories-form
                .categories-form__wrap
                    label.categories-form__row
                        input(v-if='displayName === false' type="text" placeholder="Название новой группы" v-model="groupTitle").categories-form__name
                        div(v-else) {{category.category}}
                    .buttons
                        button.approval-btn.approval-btn--tick
                        button(type="reset").approval-btn.approval-btn--cross
                skills-list(
                    :category="category"
                )
            //- .categories__list
            //-     skills-item
            //- .categories__add-skill
            //-     form.skills-form
            //-         input(type="text" placeholder="Название навыка" ).skills-form__name-skill
            //-         input(type="number" placeholder="0" ).skills-form__percent
            //-         button(type="submit").btn

</template>

<script>
    import skillsList from './skillsList';
    import {mapActions, mapState} from 'vuex';
export default {
    data() {
        return {
        groupTitle: '',
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
        ...mapActions('categories', ['addCategory', 'fetchCategories']),
        async addNewCategories() {
             await this.addCategory(this.title)
                .catch(error => {
                    alert(error.message);
                })
            // try {
            //     await this.addCategory(this.title)
            // } catch (error) {
            //     alert(error.message);
            // }
        },
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