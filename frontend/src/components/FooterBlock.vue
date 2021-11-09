<template lang="pug">
.block-footer
  .block-footer__coutainer
    img.block-footer__logo(src="@/assets/img/block-footer__logo.png")
    ul.block-footer__info.html__main-text_white О школе
      li.block-footer__text.html__subtext_white Отзывы
      li.block-footer__text.html__subtext_white Вопросы и ответы
      li.block-footer__text.html__subtext_white Контактные данные

    ul.block-footer__info.html__main-text_white Контакты
      li.block-footer__text.html__subtext_white f.avdeev@list.ru
      li.block-footer__text.html__subtext_white +7 9027369322
      li.block-footer__text.html__subtext_white WatsApp
      li.block-footer__text.html__subtext_white Viber
      li.block-footer__text.html__subtext_white Telegram

  img.block-footer__img1(src="@/assets/img/block-footer__img1.png")
  img.block-footer__img2(src="@/assets/img/block-footer__img2.png")
</template>

<script>

export default {
  name:'block-footer',
};
</script>

<style lang="sass">
.block-footer
  position: relative
  display: flex
  background-color: #4800df
  height: 500px
  justify-content: center

.block-footer__coutainer
  display: flex
  margin-top: 47px
  z-index: 1

block-footer__logo
  width: 209px
  height: 36px

.block-footer__img1
  position: absolute
  left: 0
  top: -1px
  width: 495px

.block-footer__img2
  position: absolute
  bottom: 0
  right: 0
  width: 396px

.block-footer__info
  margin: 0 20px

.block-footer__text
  list-style-type: none
  margin: 20px 0
  cursor: pointer

.block-footer__logo
  width: 209px
  height: 36px

@media screen and (max-width: 1280px)
  .block-footer__logo
    width: 130px
    height: 22px

@media screen and (max-width: 992px)
  .block-footer
    height: 384px

  .block-footer__logo
    width: 101px
    height: 17px

  .block-footer__img1
    height: 384px

  .block-footer__img2
    width: 273px
    height: 289px

@media screen and (max-width: 750px)
  .block-footer
    height: 243px

  .block-footer__logo
    width: 90px
    height: 15px

  .block-footer__img1
    width: 243.69px
    height: 256.4px

  .block-footer__img2
    width: 174px
    height: 186.5px

  .block-footer__text
    margin: 10px 0

@media screen and (max-width: 400px)
  .block-footer
    height: 550px

  .block-footer__coutainer
    flex-direction: column

  .block-footer__info
    margin: 0
    margin-bottom: 75px

  .block-footer__logo
    margin-bottom: 75px

  .block-footer__img1, .block-footer__img2
    width: 100%
</style>