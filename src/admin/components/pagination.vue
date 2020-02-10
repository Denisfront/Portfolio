<template lang="pug">
    .pagination-container
      .container
        ul.pagination
          li.pagination__item
            a(href="#").pagination__link.active Обо мне 
          li.pagination__item 
            a(href="#").pagination__link Работы
          li.pagination__item 
            a(href="#").pagination__link Отзывы
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>

  .pagination-container {
    background-color: $white;
  }

  .pagination {
    display: flex;
    height: 77px;
  }
    .pagination__item {
        margin-right: 50px;
        height: 100%;

        &:last-child{
            margin-right: 0;
        }
    }

    .pagination__link {
      vertical-align: middle;
      white-space: nowrap;
      display: flex;
      height: 100%;
      align-items: center;
      cursor: pointer;
      width: 125px;
      justify-content: center;
      border-bottom: 3px solid transparent;
      text-decoration: none;

      &:hover,
      &.active {
        color: $color-active-purple;
        font-weight: 600;
        border-color: currentColor;
      }
    }

</style>