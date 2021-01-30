<template lang="pug">
  li.show-more
    h3.show-more__title Показать еще 100500 товаров
    p.show-more__text На самом деле вкусов гораздо больше!
    button.show-more__btn Показать все
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="sass" scoped>
$border-color: #cdcdcd
.show-more
  display: flex
  flex-direction: column
  align-items: center
  box-sizing: border-box
  padding-left: 20px
  padding-right: 20px
  padding-bottom: 25px
  height: 210px
  background-image: url('./img/cross.svg')
  background-repeat: no-repeat
  background-position: top 25px center
  background-size: 30px 30px
  border-bottom: 1px solid $color-line
  &__title
    margin: 0
    margin-top: auto
    font-size: 16px
    font-weight: 400
    text-transform: uppercase
    color: $color-black
  &__text
    margin: 0
    margin-top: 10px
    font-size: 12px
    font-family: $font-monotype
    color: $text-gray
  &__btn
    cursor: pointer
    margin-top: 20px
    height: 40px
    width: 100%
    outline: none
    border: none
    background-color: $bg-gray
    font-size: 16px
    text-transform: uppercase
    color: $btn-text
    &:hover
      background-color: #ebebeb
    &:active
      color: rgba($btn-text, 0.3)
+md-block
  .show-more
    border: 1px solid $border-color
    height: 430px
    padding-left: 37px
    padding-right: 37px
    padding-bottom: 40px
    justify-content: space-between
    background-size: 60px 60px
    background-position: top 55px center
    &__title
      margin-top: 165px
      width: 155px
      font-size: 20px
      text-align: center
    &__text
      width: 170px
      font-size: 16px
      line-height: 1.2
      text-align: center
</style>
