<template lang="pug">
    div 
        .categories__list
            table.skills-item
                skill-item(
                    v-for="skill in category.skills"
                    :key="skill.id"
                    :skill="skill"
                )
      
        .categories__add-skill
            form(
                @submit.prevent="addNewSkill"
                :class={blocked: loading}
                ).skills-form
                input(type="text" placeholder="Новый навык" v-model="skill.title").skills-form__name-skill
                input(type="number" placeholder="0" v-model="skill.percent").skills-form__percent
                button(
                    type="submit"
                    :disabled="loading"
                    ).btn

</template>

<script>
import { mapActions } from 'vuex';
import skillItem from './skillItem'
    export default {

        components: {
            skillItem
        },

        data() {
            return {
                loading: false,

                skill: {
                    title: '',
                    percent: 0,
                    category: this.category.id
                }
            }
        },
        props: {
            category: {
                type: Object,
                default: () => {},
                required: true
            }
        },
        methods: {
            ...mapActions('skills',['addSkill']),
            async addNewSkill() {
               await this.addSkill(this.skill)
                this.skill.title = '';
                this.skill.percent = '';
            },
      
        }
    };
</script>

<style lang="postcss" scoped>
    input {
        border: none;
        border-bottom: 1px solid black;
        outline: none;
    }

    
    .categories__list {
        min-height: 240px;
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

    .skills-form.blocked {
        opacity: 0.5;
        filter: grayscale(100%);
        pointer-events: none;
        user-select: none;
    }
</style>