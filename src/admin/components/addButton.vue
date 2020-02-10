<template lang="pug">
    button.add-button
        .add-button__circle
        .add-bitton__title Добавить работу
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>

    .add-button {
        width: 340px;
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        background-color: $white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 31px;
        margin-bottom: 30px;
        padding: 3% 0;
    }

    .add-button__circle {
        width: 150px;
        height: 150px;
        border: 2px solid $white;
        border-radius: 50%;
        position: relative;
        margin-bottom: 30px;

        &:before {
            content: '+';
            font-size: 72px;
            color: $white;
            font-weight: 300;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .add-bitton__title {
        color: $white;
        font-size: 18px;
        font-weight: 700;
        padding: 0 1%;
        line-height: 30px;
    }

</style>