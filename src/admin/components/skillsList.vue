<template lang="pug">
    div
        .categories__list
            table.skills-item
                tr(v-for="skill in category.skills").skills-item__row
                    td {{skill.title}}
                    td {{skill.percent}}
                    td
                        button(type="button").approval-btn.approval-btn--pencil
                        button(type="button").approval-btn.approval-btn--trash
                tr.skills-item__row
                    td 
                        input(type="text")
                    td 
                        input(type="number")
                    td
                        button(type="button").approval-btn.approval-btn--tick
                        button(type="button").approval-btn.approval-btn--cross
        .categories__add-skill
            form(@submit.prevent="addNewSkill").skills-form
                input(type="text" placeholder="Название навыка" v-model="skill.title").skills-form__name-skill
                input(type="number" placeholder="0" v-model="skill.percent").skills-form__percent
                button(type="submit").btn

</template>

<script>
import { mapActions } from 'vuex';
    export default {
        data() {
            return {
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
            ...mapActions('skills', ['addSkill']),
            async addNewSkill() {
               await this.addSkill(this.skill)
            }
        }
    };
</script>

<style lang="postcss" scoped>
    input {
        border: none;
        border-bottom: 1px solid black;
        outline: none;
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

        &--pencil {
            width: 16px;
            height: 15px;
            background: svg-load('pencil.svg',fill="$text-color-admin", width=100%, height=100%) center center no-repeat;
        }

        &--trash {
            width: 13px;
            height: 15px;
            background: svg-load('trash.svg', fill="$text-color-admin", width=100%, height=100%) center center no-repeat;
        }
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