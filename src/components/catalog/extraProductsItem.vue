<template lang="pug">
  li.item
    h3.item__title {{title}}
    p.item__text
      span.item__name {{name}}
      span.item__price {{price}} Р.
    app-btn.item__btn Заказать
</template>

<script>
export default {
  props: ['title', 'name', 'price']
}
</script>

<style lang="sass" scoped>
$color-title: #222
$color-text: #444
$border-color: #cdcdcd
.item
  border-bottom: 1px solid $border-color
  margin-left: 20px
  margin-right: 20px
  padding-bottom: 15px
  &:first-child
    border-top: 1px solid $border-color
  &__title
    font-size: 16px
    color: $color-title
    text-transform: uppercase
    font-weight: 400
  &__text
    display: flex
    justify-content: space-between
    font-size: 14px
    font-family: $font-monotype
    color: $color-text
    font-weight: 400
+md-block
  .item
    display: flex
    flex-wrap: wrap
    align-items: center
    border: 1px solid $border-color
    border-top: none
    padding: 28px 37px
    margin-left: 30px
    margin-right: 30px
    &__title
      flex-basis: 65%
      font-size: 20px
      margin: 0
    &__text
      flex-basis: 35%
      margin: 0
      font-size: 16px
    &__name
      flex-basis: 60%
      text-align: right
    &__price
      flex-basis: 40%
      text-align: right
    &__btn
      margin-top: 25px
      flex-basis: 100%
+lg-block
  .item
    box-sizing: border-box
    margin: 0
    padding: 0
    flex-wrap: nowrap
    height: 72px
    border-left: none
    border-right: none
    &__title
      flex-basis: 33%
    &__text
      flex-basis: 33%
    &__name
      text-align: left
      flex-basis: 80%
    &__price
      flex-basis: 20%
      text-align: left
    &__btn
      flex-basis: 245px
      margin: 0
      margin-left: auto

</style>
