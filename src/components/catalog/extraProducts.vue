<template lang="pug">
  section.products
    h2.products__title Дополнительные товары
    ul.products__list
      li(
        v-for="(extra, index) in extraItems"
        :key="index"
        is="extraItem"
        :title="extra.title"
        :name="extra.name"
        :price="extra.price"
      )
    gift-item.products__gift
</template>

<script>
import { extraItems } from '../../assets/products.js'
import extraItem from './extraProductsItem.vue'
import giftItem from './giftItem.vue'
export default {
  data () {
    return {
      extraItems
    }
  },
  components: {
    extraItem,
    giftItem
  }
}
</script>

<style lang="sass" scoped>
$border-color: #cdcdcd
.products
  position: relative
  &::before
    content: ''
    display: block
    position: absolute
    top: 45px
    left: 267px
    right: 0
    height: 3px
    background-color: $color-green
  &__list
    list-style: none
    padding: 0
    margin: 0
  &__title
    display: inline-block
    padding-left: 20px
    font-size: 24px
    font-weight: 400
    color: $color-black
    line-height: 85px
    margin-top: 0
    margin-bottom: 0

+md-block
  .products
    &::before
      top: 93px
      left: 0
      z-index: -10
    &__title
      padding-left: 35px
      padding-right: 35px
      margin-left: 30px
      font-size: 36px
      line-height: 180px
      background-color: $color-white
+lg-block
  .products
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    &::before
      top: 101px
    &__title
      margin-top: 80px
      margin-right: 200px
      margin-left: 75px
      line-height: 36px
    &__list
      flex-basis: 62%
      flex-shrink: 2
      margin-top: 75px
      margin-left: 110px
    &__gift
      flex-basis: 245px
      flex-shrink: 0
      margin-top: 75px
      margin-right: 110px
</style>
