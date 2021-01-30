<template lang="pug">
  li.item
    picture.item__picture(:class="getSize")
      source(:media="desktop", :srcset="getImageDesktop")
      source(:media="tablet", :srcset="getImageTablet")
      source(:media="mobile", :srcset="getImageMobile")
      img.item__img(:src="getImageMobile")
    div.item__description
      h3.item__title {{title}} {{type}} {{size}} г
      ul.item__list
        li.item__text
          span Объем:
          span {{size}}
        li.item__text
          span Вкус:
          span {{taste}}
        li.item__text
          span Цена:
          span {{price}} Р.
    app-btn.item__btn Заказать
</template>

<script>
export default {
  name: 'catalogItem',
  props: ['title', 'type', 'size', 'taste', 'price', 'image'],
  data () {
    return {
      desktop: '(min-width: 1220px)',
      tablet: '(min-width: 768px)',
      mobile: '(min-width: 320px)'
    }
  },
  computed: {
    getImageDesktop () {
      return require(`./img/${this.image}-desktop.png`)
    },
    getImageTablet () {
      return require(`./img/${this.image}-tablet.png`)
    },
    getImageMobile () {
      return require(`./img/${this.image}-mobile.png`)
    },
    getSize () {
      switch (this.size) {
        case 500: return 'item__picture--small'
        case 1000: return 'item__picture--big'
      }
      return undefined
    }
  }
}
</script>

<style lang="sass" scoped>
$border-color: #cdcdcd
.item
  display: flex
  flex-wrap: wrap
  padding-left: 20px
  padding-right: 20px
  padding-bottom: 25px
  border-bottom: 1px solid $color-line
  &__picture
    flex-basis: 50%
    height: 144px
  &__description
    flex-basis: 50%
  &__title
    font-size: 16px
    line-height: 20px
    font-weight: 400
    color: $color-black
    text-transform: uppercase
    margin-right: 65px
    margin-top: 25px
  &__list
    list-style: none
    margin: 0
    margin-top: 15px
    padding: 0
  &__text
    display: flex
    justify-content: space-between
    font-size: 12px
    line-height: 16px
    font-weight: 400
    font-family: $font-monotype
    color: $text-gray
+md-block
  .item
    position: relative
    height: 430px
    background-color: $bg-gray
    flex-direction: column
    align-items: center
    flex-wrap: nowrap
    padding-left: 37px
    padding-right: 37px
    padding-bottom: 40px
    &__picture
      position: absolute
      height: auto
      bottom: 305px
      &--small
        left: calc(100%/2 - 75px)
      &--big
        left: calc(100%/2 - 95px)
    &__description
      margin-top: 165px
      width: 100%
      flex-basis: auto
    &__title
      margin: 0
      margin: auto
      width: 140px
      font-size: 20px
      text-align: center
    &__text
      border-bottom: 1px solid $border-color
      height: 30px
      line-height: 30px
      font-size: 16px
    &__btn
      margin-top: auto

</style>
