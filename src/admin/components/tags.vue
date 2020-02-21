<template lang="pug">
   ul.tags
        li.tags__item Html
        li.tags__item Css
        li.tags__item Javascript
</template>

<script>
 
    export default {
        props: {
            type: Object,
            default: () => {},
            required: true
        },
    }
</script>

<style lang="postcss" scoped>
    .tags {
    display: flex;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    position: absolute;
    bottom: 10px;
    right: 0;
    /* opacity: 0; */
}

.tags__item {
    padding: 10px 20px;
    color: $color-tags-opacity;
    background-color: $white;
    border-radius: 20px;
    margin-right: 15px;
}

</style>