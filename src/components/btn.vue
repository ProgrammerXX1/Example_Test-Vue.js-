<template lang="pug">
button.btn
  slot

</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.btn
  cursor: pointer
  height: 40px
  width: 100%
  font-size: 16px
  text-transform: uppercase
  border: none
  background-color: $btn-color
  color: $color-white
  outline: none
  &:hover
    background-color: $btn-hover
  &:active
    color: rgba($color-white, 0.3)
</style>
