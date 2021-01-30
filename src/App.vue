<template lang="pug">
  #app
    main-menu
    transition(name="fade", mode="out-in")
      router-view
    app-footer
</template>

<script>
import mainMenu from './components/mainMenu/main-menu.vue'
import appFooter from './components/footer/appFooter.vue'

export default {
  components: {
    mainMenu,
    appFooter
  }
}
</script>

<style lang="sass">
.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
  opacity: 0

body
  font-family: "Oswald", Arial, Helvetica, sans-serif
</style>
