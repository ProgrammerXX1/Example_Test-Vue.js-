<template lang="pug">
footer.footer
  .footer__contacts(:style=`bgColor`)
    .footer__text
      p приглашаем к сотрудничеству дилеров!
    address.footer__adress
      p ул. Большая Конюшенная, д. 19/8 Санкт-Петербург
  .footer__map
    div(style='position:relative;overflow:hidden;')
      a(href='https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps' style='color:#eee;font-size:12px;position:absolute;top:0px;') Санкт‑Петербург
      a(href='https://yandex.ru/maps/2/saint-petersburg/house/bolshaya_konyushennaya_ulitsa_19_8/Z0kYdQVjSEQPQFtjfXVyeXpgYQ==/?ll=30.323117%2C59.938635&utm_medium=mapframe&utm_source=maps&z=16' style='color:#eee;font-size:12px;position:absolute;top:14px;') Большая Конюшенная улица, 19/8 — Яндекс.Карты
      iframe(src='https://yandex.ru/map-widget/v1/-/CCQxRYekdB' width='100%' height='400' frameborder='1' allowfullscreen='true' style='position:relative;border:none;')
  .footer__inner
    .footer__title.title
      router-link(to="/")
        img.title__img(src="./img/footer_logo.svg", alt="Cat Energy", width="128", height="24")
    .footer__social.social
      ul.social__list
        li.social__item
          a.social__link.social__link--vk(href="https://vk.com", target="_blank")
            svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 12" width="22" height="12")
              path(d="M13.66,8.31C14.32,8.31 14.89,8.91 15.5,9.54C15.86,9.92 16.24,10.32 16.59,10.54C17.13,10.87 17.56,10.86 17.62,10.85L17.7,10.84L20.49,10.81C20.61,10.8 20.79,10.75 20.88,10.71C20.87,10.67 20.84,10.63 20.81,10.58C20.48,10.03 19.79,9.31 18.84,8.51C17.97,7.77 17.52,7.39 17.47,6.8C17.42,6.19 17.83,5.7 18.65,4.74C18.85,4.5 19.09,4.22 19.36,3.9C20.5,2.51 20.79,1.89 20.87,1.65C20.74,1.62 20.39,1.63 20.37,1.63L17.17,1.65C17.03,1.65 16.99,1.68 16.99,1.68C16.86,2 16.39,3.06 15.78,4C14.39,6.15 13.74,6.44 13.29,6.44C13.14,6.44 12.99,6.4 12.87,6.33C12.13,5.89 12.16,4.93 12.18,4.23C12.19,4.11 12.19,4 12.19,3.9C12.19,3.41 12.21,2.98 12.23,2.61C12.28,1.33 12.24,1.33 11.95,1.26C11.65,1.2 11.43,1.15 10.59,1.14L10.08,1.14C9.62,1.14 9.09,1.15 8.68,1.21C8.75,1.27 8.81,1.33 8.87,1.4C9.3,1.94 9.31,2.89 9.31,3.07C9.41,4.33 9.36,5.96 8.57,6.36C8.43,6.43 8.28,6.46 8.13,6.46C7.45,6.46 6.77,5.79 5.62,3.97C4.96,2.94 4.47,1.82 4.45,1.78C4.44,1.76 4.41,1.72 4.4,1.7C4.34,1.66 4.23,1.63 4.16,1.62L1.23,1.63C1.21,1.63 1.2,1.64 1.18,1.64C1.61,2.54 3.69,6.66 5.96,8.81C7.97,10.72 10.23,10.81 10.66,10.81L12.02,10.81C12.05,10.8 12.18,10.76 12.22,10.73C12.2,10.75 12.21,10.69 12.21,10.66C12.21,10.46 12.22,8.68 13.37,8.35C13.46,8.32 13.56,8.31 13.66,8.31M17.55,12C17.26,12 16.69,11.93 16.03,11.51C15.56,11.22 15.13,10.78 14.72,10.35C14.4,10.01 13.86,9.45 13.66,9.45C13.46,9.51 13.3,10.15 13.31,10.65C13.31,10.73 13.31,11.24 12.97,11.57C12.65,11.87 12.17,11.94 12.07,11.95L10.66,11.95C9.95,11.95 7.47,11.79 5.21,9.65C2.52,7.1 0.2,2.19 0.1,1.99C-0.03,1.63 -0.07,1.17 0.22,0.86C0.5,0.54 1.01,0.5 1.21,0.49L4.21,0.47L4.29,0.48C4.36,0.49 4.71,0.55 4.99,0.75C5.28,0.93 5.43,1.24 5.45,1.3C5.46,1.32 5.93,2.39 6.53,3.35C7.5,4.86 7.92,5.22 8.08,5.3C8.21,4.98 8.28,4 8.21,3.11C8.21,2.74 8.14,2.27 8.03,2.14C7.95,2.04 7.72,1.94 7.46,1.91L6.93,1.39C6.86,0.89 7.39,0.45 7.77,0.29C8.31,0.05 9.08,0 10.08,0L10.6,0C11.5,0.01 11.79,0.06 12.17,0.14C13.42,0.42 13.38,1.46 13.32,2.67C13.31,3.02 13.29,3.43 13.29,3.9C13.29,4.02 13.29,4.14 13.28,4.27C13.27,4.56 13.26,5.06 13.35,5.26C13.51,5.15 13.97,4.75 14.87,3.37C15.44,2.48 15.9,1.43 15.98,1.23L15.98,1.23C16.12,0.91 16.43,0.52 17.17,0.51L20.3,0.49C20.31,0.49 20.43,0.48 20.58,0.48C21.29,0.48 21.75,0.7 21.92,1.13C22.12,1.63 22.04,2.39 20.19,4.64C19.92,4.97 19.68,5.25 19.47,5.5C19.03,6.01 18.58,6.55 18.57,6.71C18.6,6.84 19.05,7.22 19.48,7.58C20.61,8.53 21.34,9.31 21.71,9.92C22.09,10.5 22.02,10.94 21.9,11.2C21.59,11.86 20.7,11.94 20.52,11.95L17.74,11.99C17.7,11.99 17.64,12 17.55,12")
        li.social__item
          a.social__link.social__link--insta(href="https://instagram.com", target="_blank")
            svg(xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16")
              path(d="M11.82,0L4.17,0C1.87,0 0,1.87 0,4.17L0,11.83C0,14.12 1.87,16 4.17,16L11.82,16C14.12,16 16,14.12 16,11.83L16,4.17C16,1.87 14.12,0 11.82,0M11.82,1.04C13.55,1.04 14.95,2.44 14.95,4.17L14.95,11.83C14.95,13.55 13.55,14.96 11.82,14.96L4.17,14.96C2.44,14.96 1.04,13.55 1.04,11.83L1.04,4.17C1.04,2.44 2.44,1.04 4.17,1.04L11.82,1.04")
              path(class="st0" d="M7.99,3.88C5.72,3.88 3.87,5.72 3.87,8C3.87,10.28 5.72,12.13 7.99,12.13C10.27,12.13 12.12,10.28 12.12,8C12.12,5.72 10.27,3.88 7.99,3.88M7.99,4.92C9.69,4.92 11.08,6.3 11.08,8C11.08,9.7 9.69,11.09 7.99,11.09C6.29,11.09 4.91,9.7 4.91,8C4.91,6.3 6.29,4.92 7.99,4.92")
              path(class="st0" d="M12.27,2.81C12.78,2.81 13.2,3.22 13.2,3.74C13.2,4.25 12.78,4.67 12.27,4.67C11.75,4.67 11.33,4.25 11.33,3.74C11.33,3.22 11.75,2.81 12.27,2.81")
        li.social__item
          a.social__link.social__link--fb(href="https://fb.com", target="_blank")
            svg(xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19")
              path(d="M3.11,17.97L5.94,17.97L5.94,9.13L8.86,9.13L8.86,6.82L5.94,6.82L5.93,6.32C5.9,4.92 5.93,3.73 6.67,3.27L6.81,3.18L8.88,3.18L8.88,1.02L6.49,1.02C5.34,1.08 4.48,1.42 3.91,2.05C3.14,2.89 2.87,4.3 3.1,6.25L3.17,6.82L1.11,6.82L1.11,9.13L3.11,9.13ZM7.05,19L2,19L2,10.16L0,10.16L0,5.79L1.94,5.79C1.79,3.82 2.16,2.37 3.06,1.38C3.83,0.54 4.97,0.07 6.46,0L10,0L10,4.21L7.22,4.21C7.09,4.42 7.03,4.95 7.03,5.79L9.97,5.79L9.97,10.16L7.05,10.16Z")
    .footer__copyright.copyright
      a.copyright__link(href="https://htmlacademy.ru", target="_blank")
        span.copyright__title HTML Academy
        svg(xmlns="http://www.w3.org/2000/svg" width="26.94" height="34.08" viewBox="0 0 26.94 34.08")
          path(class="st0" d="M13.47,0L0,1.41L0,26.07L13.47,34.08L26.9,26.09L26.94,26.07L26.94,1.41L13.61,0.01ZM1.92,3.14L13.47,1.93L25.02,3.14L25.02,12.12L25.01,12.12L13.49,5.33L13.49,5.22L13.4,5.27L13.31,5.22L13.31,5.33L1.92,12.11ZM2.03,13.62L13.4,6.78L24.92,13.49L20.44,16.14L13.35,11.91L13.33,13.33L19.24,16.84L18.38,17.35L13.35,14.36L13.33,15.77L17.16,18.05L16.38,18.57L13.35,16.78L13.33,18.2L15.18,19.29L13.38,20.37ZM21.61,22.17L21.6,16.99L25.02,14.95L25.02,24.97L13.47,31.84L1.92,24.97L1.92,15.12L13.33,21.91L13.35,22.96L5.4,18.23L5.39,19.65L13.37,24.44L13.39,25.52L5.41,20.78L5.4,22.19L13.42,27.01L13.47,27.04Z")
</template>

<script>
import { eventEmitter } from '../../main.js'
export default {
  data () {
    return {
      footerColor: '#fff'
    }
  },
  computed: {
    bgColor () {
      return `background-color: ${this.footerColor}`
    }
  },
  created () {
    eventEmitter.$on('changeBgColorFooter', (color) => {
      this.footerColor = color
    })
  }
}
</script>

<style lang="sass" scoped>
.footer
  box-sizing: border-box
  width: 100%
  max-width: 1440px
  background-color: $bg-gray
  &__contacts
    padding-left: 20px
    padding-right: 20px
    display: flex
    flex-wrap: wrap
    padding-top: 25px
    padding-bottom: 25px
    // background-color: $color-white
  &__text
    margin: 0
    flex-basis: 50%
    font-size: 16px
    font-weight: 400
    line-height: 20px
    text-transform: uppercase
    color: $color-black
    & p
      margin: 0
  &__adress
    flex-basis: 50%
    font-size: 14px
    line-height: 20px
    font-weight: 400
    font-family: $font-monotype
    color: $text-gray
    & p
      margin: 0
  &__map
    height: 360px
    width: 100%
    overflow: hidden
  &__title
    padding-left: 20px
    padding-right: 20px
    display: flex
    justify-content: space-around
    align-items: center
    border-bottom: 1px solid $border-color
    height: 94px
  &__social
    padding-left: 20px
    padding-right: 20px
    border-bottom: 1px solid $border-color
    height: 62px
  &__copyright
    padding-left: 20px
    padding-right: 20px
    height: 78px

.title
  &__img
    width: 128px
    height: 24px
    &:hover
      opacity: 0.8
    &:active
      opacity: 0.6

.social
  &__list
    display: flex
    margin: 0
    padding-left: 70px
    padding-right: 70px
    list-style: none
    justify-content: space-between
    align-items: center
    height: 100%

  &__link
    &--vk svg
      width: 22px
      height: 12px
    &--insta svg
      width: 16px
      height: 16px
    &--fb svg
      width: 10px
      height: 19px
    & path
      fill: $icon-color
    &:hover path
      fill: $icon-color-hover
    &:active path
      fill: $icon-color-hover
      opacity: 0.3

.copyright
  &__title
    font-family: $font-monotype
    font-size: 16px
    font-weight: 400
    color: $footer-text
  &__link
    display: flex
    justify-content: space-between
    align-items: center
    height: 100%
    text-decoration: none
    & svg
      width: 27px
      height: 34px
    & path
      fill: $icon-color
    &:hover path
      fill: $icon-color-hover
    &:active
      opacity: 0.3
      & path
      fill: $icon-color-hover

+md-block
  .footer
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    &__contacts
      flex-wrap: nowrap
      justify-content: space-between
      width: 100%
      height: 200px
      box-sizing: border-box
      padding-left: 30px
      padding-right: 30px
    &__text
      display: flex
      max-width: 165px
      margin-left: 50px
      font-size: 20px
      align-items: center
    &__adress
      display: flex
      font-size: 16px
      align-items: center
      max-width: 165px
      margin-right: 50px
      text-align: right
    &__map
      height: 400px
      width: 100%
    &__inner
      display: flex
      padding-left: 30px
      padding-right: 30px
      height: 150px
      width: 100%
      justify-content: space-between
      align-items: center
    &__title
      border: none
      height: auto
    &__social
      border: none
      height: auto
      width: 125px
    &__copyright
      height: auto

  .social
    &__list
      padding: 0
    &__link
      &--vk svg
        width: 30px
        height: 16px
      &--insta svg
        width: 23px
        height: 23px
      &--fb svg
        width: 14px
        height: 28px

  .copyright
    display: flex
    align-items: center
    justify-content: space-between
    width: 160px
    &__link
      height: auto
      width: 100%
+lg-block
  .footer
    position: relative
    margin: auto
    &__contacts
      position: absolute
      top: 95px
      left: 110px
      width: 570px
      height: 200px
      z-index: 100
      padding-left: 75px
      padding-right: 90px
    &__text
      margin: 0
    &__adress
      margin: 0
      text-align: left
    &__inner
      padding-left: 110px
      padding-right: 110px

</style>
