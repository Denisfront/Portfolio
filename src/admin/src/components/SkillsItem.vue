<template lang="pug">
    table.skills-item
        tr.skills-item__row
            td Git
            td 100 %
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
</template>

<script>
    export default {
        
    }
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
</style>