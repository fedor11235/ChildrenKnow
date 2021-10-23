<template lang="pug">
#block-how-lessons.block-how-lessons
  .block-how-lessons__title.html__title_white Как проходят уроки
  .block-how-lessons__coutainer
    .block-how-lessons__border
      .block-how-lessons__text.html__subtitle_white_normal Вспоминаем тему прошлого урока и проверяем<br> домашнее задание.
      img.block-how-lessons__arrow(src="./block-how-lessons__arrow.png")
      .block-how-lessons__text.html__subtitle_white_normal Изучаем новую тему и решаем новые задачи<br> вместе с преподователем
      img.block-how-lessons__arrow(src="./block-how-lessons__arrow.png")

      .block-how-lessons__text.html__subtitle_white_normal Самостоятельное решение более сложных<br> задачи и отых ввиде игровых заданий
      img.block-how-lessons__arrow(src="./block-how-lessons__arrow.png")

      .block-how-lessons__text.html__subtitle_white_normal Преподаватель подводит итоги, повторяют<br> вместе с учениками пройденый материал и<br> готовятся к следующему уроку
  img.block-how-lessons__img(src="./block-how-lessons__img.png")
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
  padding-top: 31px;
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
  z-index: 1;
}

.block-how-lessons__img {
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
}
@media screen and (max-width: 1280px) {
  .block-how-lessons {
    height: 800px;
  }
  .block-how-lessons__border {
    width: 886px;
    height: 600px;
  }
  .block-how-lessons__title {
    padding-top: 42px;
  }
  .block-how-lessons__coutainer {
    margin-top: 59px;
  }
}

@media screen and (max-width: 992px) {
  .block-how-lessons {
    height: 650px;
  }
  .block-how-lessons__border {
    width: 753px;
    height: 476px;
  }
  .block-how-lessons__title {
    padding-top: 13px;
  }
  .block-how-lessons__coutainer {
    margin-top: 50px;
  }
  .block-how-lessons__arrow {
    width: 21px;
  }
  .block-how-lessons__text {
    margin: 15px;
  }
}

@media screen and (max-width: 750px) {
  .block-how-lessons {
    height: 480px;
  }
  .block-how-lessons__border {
    width: 482px;
    height: 354px;
  }
  .block-how-lessons__title {
    padding-top: 26px;
  }
  .block-how-lessons__coutainer {
    margin-top: 37px;
  }
  .block-how-lessons__text {
    margin: 7px;
  }
}

@media screen and (max-width: 400px) {
  .block-how-lessons {
    height: 570px;
  }
  .block-how-lessons__border {
    width: 308px;
    height: 437px;
  }
  .block-how-lessons__title {
    padding-top: 13px;
  }
  .block-how-lessons__coutainer {
    margin-top: 25px;
  }
  .block-how-lessons__text {
    margin: 18px;
  }
}
</style>