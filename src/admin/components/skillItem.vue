<template lang="pug">
    tr(v-if="editMode === false").skills-item__row
        td {{skill.title}}
        td {{skill.percent}}
        td
            button(type="button" @click="editMode = true").approval-btn.approval-btn--pencil 
            button(type="button" @click="removeExistedSkill").approval-btn.approval-btn--trash
    tr(v-else).skills-item__row
        td 
            input(type="text" v-model="editedSkill.title") 
        td 
            input(type="number" v-model="editedSkill.percent")
        td
            button(type="button" @click="editExistedSkill").approval-btn.approval-btn--tick
            button(type="button" @click="editMode = false").approval-btn.approval-btn--cross
</template>

<script>
 import { mapActions } from 'vuex';
export default {
    data() {
        return {
            editMode: false,
            editedSkill: { ...this.skill}
        }
    },
    props: {
        skill: {
            type: Object,
            default: () => {},
            required: true
        }  
    },
    methods: {
        ...mapActions('skills', ['removeSkill', 'editSkill']),
        async removeExistedSkill() {
            await this.removeSkill(this.skill);
        },
        async editExistedSkill() {
            await this.editSkill(this.editedSkill);
            this.editMode = false
        }
    }
}
</script>

<style lang="postcss" scoped>
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
</style>