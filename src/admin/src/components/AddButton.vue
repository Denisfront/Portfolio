<template lang="pug">
    button.add-button.projects-item
        .add-button__circle
        .add-bitton__title Добавить работу
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
    .projects-item {
            width: calc(100% / 3 - 30px);
            box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
            background-color: #ffffff;
            margin-left: 30px;
            margin-bottom: 30px;
        }

    .add-button {
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        background-color: $white;
        display: flex;
        flex-direction: column;
        height: 556px;
        justify-content: center;
        align-items: center;
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