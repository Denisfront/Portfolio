<template lang="pug">
    .btn-editing
        button.btn-editing.btn-editing--remove Править
        button.btn-editing.btn-editing--change Удалить

</template>

<script>
    
export default {

}
</script>

<style lang="postcss" scoped>
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