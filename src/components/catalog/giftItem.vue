<template lang="pug">
  .item
    .gift__item
      span.gift__text Закажите все и получите чехол для кота в подарок!
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.gift
  &__item
    height: 290px
    width: 280px
    padding-top: 40px
    padding-bottom: 35px
    margin: auto
    background-position: center top 65px, center center
    background-repeat: no-repeat
    background-image: url('./img/gift.png'), url('./img/gift_photo_mobile.jpg')
  &__text
    display: inline-block
    margin-left: 60px
    margin-right: 60px
    margin-top: 190px
    text-align: center
    color: $color-white
    font-size: 16px
    line-height: 20px
    font-weight: 400
    font-family: $font-monotype
+md-block
  .gift
    &__item
      width: 708px
      height: 200px
      padding-top: 70px
      padding-bottom: 75px
      background-image: url('./img/gift.png'), url('./img/gift_photo_tablet.jpg')
      background-position: top 135px left 90px, center center
    &__text
      margin-left: 425px
      margin-right: 125px
      margin-top: 75px
      text-align: left
+lg-block
  .gift
    &__item
      width: 245px
      height: 290px
      background-image: url('./img/gift.png'), url('./img/gift_photo_desktop.jpg')
      background-position: top 65px left 95px, center center
      padding: 0
    &__text
      margin-left: 40px
      margin-right: 40px
      margin-top: 190px
      text-align: center

</style>
