<template lang="pug">
.block-how-lessons#block-how-lessons
  .block-how-lessons__title Как проходят уроки
  .block-how-lessons__coutainer
    .block-how-lessons__border
      .block-how-lessons__text Вспоминаем тему прошлого урока и проверяем<br> домашнее задание.
      img(src="static/arrow.png")
      .block-how-lessons__text Изучаем новую тему и решаем новые задачи<br> вместе с преподователем
      img(src="static/arrow.png")

      .block-how-lessons__text Самостоятельное решение более сложных<br> задачи и отых ввиде игровых заданий
      img(src="static/arrow.png")

      .block-how-lessons__text Преподаватель подводит итоги, повторяют<br> вместе с учениками пройденый материал и<br> готовятся к следующему уроку
</template>

<style>
.block-how-lessons {
  height: 1023px;
  background: linear-gradient(63.43deg, #004ad5 0%, #00befd 100.93%);
}

.block-how-lessons__text {
  text-align: center;

  font: normal 36px Roboto;
  color: #ffffff;
  margin: 30px;
}

.block-how-lessons__title {
  text-align: center;
  padding: 60px 120px 0;
  font: normal bold 55px Roboto;
  color: #ffffff;
}

.block-how-lessons__coutainer {
  display: flex;
  justify-content: space-around;
  margin-top: 52px;
}

.block-how-lessons__border {
  display: flex;
  width: 1069px;
  height: 755px;
  border: 3px solid #5200ff;
  flex-direction: column;
  align-items: center;
}
</style>