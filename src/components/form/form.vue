<template lang="pug">
  section.form
    h1.form__title Подбор программы
    form(action="", method="get")
      span Заполните анкету и мы подберем программу питания для вашего кота
      div
        h2.unvis Данные кота
        label(for="name") Имя:*
        input#name(type="text", name="name", required)
        label(for="weight") Вес (кг):*
        input#weight(type="text", name="weight", required)
        label(for="age") Возраст (лет):
        input#age(type="number", name="age")
      div
        h2.unvis
        input#slimm(type="radio", name="course", checked)
        label(for="slimm") Похудение
        input#fat(type="radio", name="course")
        label(for="fat") Набор массы
        input#advice(type="radio", name="course")
        label(for="advice") Не знаю (нужен ваш совет)
      div
        h2 Контактные данные (владельца кота)
        label(for="email") e-mail:*
        input#email(type="email", name="email")
        label(for="phone") Телефон:*
        input#phone(type="text")
      div
        h2 Комментарий
        textarea(name="comment")
      div
        h2 Дополнительно
        input#sugar(type="checkbox", name="sugar", checked)
        label(for="sugar") Сахарозаменитель
        input#water(type="checkbox", name="water")
        label(for="water") Питьевая вода
        input#milk(type="checkbox", name="milk")
        label(for="milk") Молоко
        input#vitamin(type="checkbox", name="vitamin")
        label(for="vitamin") Витамины
      button(type="submit") Отправить заявку
      span * &ndash; Обязательные поля

</template>

<script>
import { eventEmitter } from '../../main.js'
export default {
  data () {
    return {
    }
  },
  mounted () {
    eventEmitter.$emit('changeTextColorNav', '#000')
  }
}
</script>

<style lang="css" scoped>
</style>
