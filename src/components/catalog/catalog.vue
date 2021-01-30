<template lang="pug">
  main.catalog
    h1.catalog__title Каталог продукции
    products.catalog__products
    extraProducts.catalog__extra-products

</template>

<script>
import { eventEmitter } from '../../main.js'
import products from './products.vue'
import extraProducts from './extraProducts.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    products,
    extraProducts
  },
  mounted () {
    if (window.innerWidth >= 1220) {
      eventEmitter.$emit('changeBgColorFooter', '#fff')
    } else {
      eventEmitter.$emit('changeBgColorFooter', '#f2f2f2')
    }
    eventEmitter.$emit('changeTextColorNav', '#000')
  }
}
</script>

<style lang="sass" scoped>
.catalog
  margin: auto
  &__title
    display: flex
    justify-content: space-around
    align-items: center
    font-size: 36px
    font-weight: 400
    color: $color-black
    height: 105px
    margin: 0
    border-bottom: 1px solid $color-line
+md-block
  .catalog
    &__title
      font-size: 60px
      justify-content: start
      align-items: flex-end
      height: 130px
      padding-left: 30px
      padding-right: 30px
      padding-bottom: 15px
      border: none
+lg-block
  .catalog
    max-width: 1440px
    margin-bottom: 85px
    &__title
      height: auto
      margin-top: 195px
      padding: 0
      padding-left: 110px
      padding-right: 110px
    &__products
      max-width: 1220px
      margin: auto
</style>
