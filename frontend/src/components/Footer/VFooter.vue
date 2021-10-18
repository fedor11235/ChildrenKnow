<template lang="pug">
.block-footer
  .block-footer__coutainer
    ul.block-footer__info О школе
      li.block-footer__text Отзывы
      li.block-footer__text Вопросы и ответы
      li.block-footer__text Контактные данные

    ul.block-footer__info Контакты
      li.block-footer__text f.avdeev@list.ru
      li.block-footer__text +7 9027369322
      li.block-footer__text WatsApp
      li.block-footer__text Viber
      li.block-footer__text Telegram

  img.block-footer__img1(src="static/Vector3.png")
  img.block-footer__img2(src="static/Vector4.png")
</template>

<style>
.block-footer {
  position: relative;
  display: flex;
  background-color: #4800df;
  height: 500px;
  justify-content: center;
}

.block-footer__coutainer {
  display: flex;
  margin-top: 50px;
  z-index: 1;
}

.block-footer__img1 {
  position: absolute;
  top: -1px;
  left: 0;
  width: 495px;
}

.block-footer__img2 {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 396px;
}

.block-footer__info {
  margin: 20px;
  color: #ffffff;
  font: normal 30px Roboto;
}

.block-footer__info {
  margin: 20px;
  font: normal 30px Roboto;
  color: #ffffff;
}

.block-footer__text {
  font: normal 24px Roboto;
  list-style-type: none;
  margin: 20px 0;
  cursor: pointer;
}
</style>