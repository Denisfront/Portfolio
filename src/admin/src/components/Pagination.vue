<template lang="pug">
    .pagination
      .container.pagination__container
        ul.pagination__list
          li.pagination__item
            a(href="#").pagination__link.active Обо мне 
          li.pagination__item 
            a(href="#").pagination__link Работы
          li.pagination__item 
            a(href="#").pagination__link Отзывы
</template>

<script>
export default {
    name: 'Pagination'
}
</script>

<style lang="postcss" scoped>
    .pagination__item {
        margin-right: 50px;

        &:last-child{
            margin-right: 0;
        }
    }

    .pagination__container {
      grid-area: pagination;
      align-items: center;
      display: flex;
      height: 100%;
    }

    .pagination__link {
      text-decoration: none;

      &.active {
        color: $color-active-purple;
        position: relative;
        font-weight: 600;

        &:before {
          content: '';
          position: absolute;
          width: 125px;
          bottom: -30px;
          height: 3px;
          left: -50%;
          background-color: $color-active-purple;
        }
      }
    }

    .pagination__list {
      display: flex;
      margin-left: 36px;
    }
</style>