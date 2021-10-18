<template lang="pug">
.face.margin-html
  .face__info
    .face__header.html__main-title_black Изучи<br>будующую<br>профессию с<br>интузиазмом
    .face__content.html__main-text_black Обучаем детей профессям <br> будующего,<br>индивитульные онлайн-занятия
    button.face__button.html__text_white Пробный урок
  img.face__img(src="static/main.png")
</template>

<style>

.face__info {
  width: 50%;
}

.face__header {
  margin-bottom: 11px;
}

.face__content {
  margin-bottom: 50px;
}

.face__button {
  width: 295.54px;
  height: 63.01px;
  background: #014dd6;
  border-radius: 13px;
  border: none;
  cursor: pointer;

  margin-right: 20px;
}

.face__button:active {
  background: #5200ff;
}

.face__img {
  position: absolute;
  top: 75px;
  right: 0;
  text-align: center;
}
</style>
