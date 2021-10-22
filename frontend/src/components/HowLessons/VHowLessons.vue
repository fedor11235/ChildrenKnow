<template lang="pug">
.block-how-lessons#block-how-lessons
  .block-how-lessons__title.html__title_white  Как проходят уроки
  .block-how-lessons__coutainer
    .block-how-lessons__border
      .block-how-lessons__text.html__subtitle_white_normal  Вспоминаем тему прошлого урока и проверяем<br> домашнее задание.
      img(src="./arrow.png")
      .block-how-lessons__text.html__subtitle_white_normal  Изучаем новую тему и решаем новые задачи<br> вместе с преподователем
      img(src="./arrow.png")

      .block-how-lessons__text.html__subtitle_white_normal  Самостоятельное решение более сложных<br> задачи и отых ввиде игровых заданий
      img(src="./arrow.png")

      .block-how-lessons__text.html__subtitle_white_normal  Преподаватель подводит итоги, повторяют<br> вместе с учениками пройденый материал и<br> готовятся к следующему уроку
  img.block-how-lessons__img(src="./Vector6.png")
</template>

<style>
.block-how-lessons {
  position: relative;
  height: 1069px;
  background: linear-gradient(63.43deg, #004ad5 0%, #00befd 100.93%);
}

.block-how-lessons__text {
  text-align: center;
  margin: 30px;
}

.block-how-lessons__title {
  text-align: center;
  padding: 31px 120px 0;
}

.block-how-lessons__coutainer {
  display: flex;
  justify-content: space-around;
  margin-top: 61px;
}

.block-how-lessons__border {
  display: flex;
  width: 1069px;
  height: 755px;
  border: 3px solid #5200ff;
  flex-direction: column;
  align-items: center;
}

.block-how-lessons__img {
  position:absolute;
  height: 100%;
  top:0;
  right: 0;
}
</style>