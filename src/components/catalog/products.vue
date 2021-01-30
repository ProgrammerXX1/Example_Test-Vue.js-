<template lang="pug">
  section.catalog.products
    h2.unvis Продукция
    ul.catalog__list
      li.catalog__item(
        is="productItem"
        v-for = "(product, index) in products"
        :key="index"
        :title="product.title"
        :type="product.type"
        :size="product.size"
        :taste="product.taste"
        :price="product.price"
        :image="product.image"
      )
      li.catalog__item(
        is="showMore"
      )
</template>

<script>
import productItem from './productItem.vue'
import showMore from './showMore.vue'
import { products } from '../../assets/products.js'
export default {
  data () {
    return {
      products
    }
  },
  components: {
    productItem,
    showMore
  }
}
</script>

<style lang="sass" scoped>
.catalog
  &__list
    list-style: none
    padding: 0
    margin: 0
+md-block
  .catalog
    padding-left: 30px
    padding-right: 30px
    &__list
      display: grid
      grid-template-columns: 1fr 1fr
      column-gap: 60px
    &__item
      box-sizing: border-box
      // border: none
      margin-top: 140px
+lg-block
  .catalog
    padding: 0
    &__list
      grid-template-columns: repeat(4, 245px)
      justify-items: space-between
      margin: auto

</style>
