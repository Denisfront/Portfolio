<template lang="pug">
    .group-skills
        form(@submit.prevent="addNewCategories").group-skills__form
            .group-skills__wrap
                label.group-skills__row
                    input(type="text" placeholder="Название новой группы" v-model="title").group-skills__name-group
                    .group-skills__btn
                        button.approval-btn.approval-btn--tick
                        button(type="reset").approval-btn.approval-btn--cross

                .group-skills__items(v-for="category in categories")
                    skills-item
                label.group-skills__row-skill
                    input(type="text" placeholder="Название навыка").group-skills__name-skill
                    input(type="number" placeholder="0").group-skills__parcent
                    button.btn
</template>

<script>
    import skillsItem from './skillsItem';
    import {mapActions, mapState} from 'vuex';
export default {

    data: () => ({
        title: ''
    }),
    
    components: {
        skillsItem
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

    .group-skills {
        background-color: $white;
        box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
        width: calc(100% / 2 - 30px);
        margin-left: 30px;
        margin-bottom: 30px;
    }

  

    .group-skills__wrap {
        padding: 30px;
        position: relative;
        display: grid;
        grid-template-rows: minmax(74px, max-content) minmax(239px, max-content) minmax(31px, max-content);


        &:before {
            content: '';
            position: absolute;
            height: 1px;
            width: 92%;
            background-color: $line-admin-gray;
            top: 18%;
            left: 4%;
        }
    }

        .group-skills__form {
            background-color: $white;
        }

    .group-skills__name-group {
        font-size: 18px;
        font-weight: 600;
        color: $text-color-admin;
        padding: 0 45px 10px 0;
    }
    .group-skills__row {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    .group-skills__name-skill {
        font-size: 16px;
        color: $text-color-admin;
        padding: 0 30px 16px 20px;
        margin-right: 10px;
        width: 40%;
    }

    .group-skills__parcent {
        width: 19%;
        margin-right: 30px;
        padding: 0 21px 1rem 0.6875rem;
    }

    .group-skills__row-skill {
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