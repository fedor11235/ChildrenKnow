<template lang="pug">
.main-block
  .main-block__info.margin-html
    .face
      .face__header Изучи будующую профессию с интузиазмом
      .face__content Обучаем детей профессям <br> будующего,<br>индивитульные онлайн-занятия
      button.face__button Пробный урок
    img.face__img(src="static/main.png")

  .list-of-courses
    #courses.list-of-courses__title Наши курсы
    .list-of-courses__coutainer
      .list-of-courses__column1
        .list-of-courses__course Звукорежессура
        .list-of-courses__course Дизайн
        .list-of-courses__course Программирование на языке Scratch
        .list-of-courses__course Создание сайтов Front-end разработка

      .list-of-courses__column2
        .list-of-courses__course Программирование на языке Python
        .list-of-courses__course Графический дизайн
        .list-of-courses__course 3D-Моделирование
        .list-of-courses__course Разработка игр в UNITY
      .list-of-courses__delimiter
      .list-of-courses__vertical-separation1
      .list-of-courses__vertical-separation2
      .list-of-courses__vertical-separation3
</template>


<style>
.main-block {
  height: 2048px;
  background: linear-gradient(
    358.17deg,
    #0150d7 1.49%,
    #0198f0 42.16%,
    rgba(196, 196, 196, 0) 98.38%
  );
}

.main-block__info {
  position: relative;
  padding-top: 130px;
  padding-bottom: 28px;
}

.face {
  width: 50%;
}

.face__header {
  font: normal bold 75px Roboto;
  color: #000000;
  margin-bottom: 11px;
}

.face__content {
  font-size: 18px;
}

.face__content {
  font: normal 30px Roboto;
  color: #000000;
  margin-bottom: 72px;
}

.face__button {
  width: 295.54px;
  height: 63.01px;
  background: #014dd6;
  border-radius: 13px;
  border: none;
  cursor: pointer;

  font: normal 28px Roboto;
  color: #ffffff;

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

.list-of-courses {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list-of-courses__title {
  font: normal bold 55px Roboto;
  color: #ffffff;
  margin-top: 160px;
}

.list-of-courses__coutainer {
  position: relative;
  margin-top: 100px;
  width: 1100px;
  height: 800px;
  border: 3px solid #5200ff;
  box-sizing: border-box;
}

.list-of-courses__column1 {
  position: absolute;
  margin-top: 70px;
  width: 48%;
  left: 0;
  text-align: center;
}

.list-of-courses__column2 {
  position: absolute;
  width: 48%;
  margin-top: 70px;
  right: 0;
  text-align: center;
}

.list-of-courses__course {
  height: 200px;
  font: normal 36px Roboto;
  color: #ffffff;
  cursor: pointer;
}

.list-of-courses__delimiter {
  position: absolute;
  background-color: #5200ff;
  left: 49%;
  bottom: 0;
  width: 3px;
  height: 764px;
}

.list-of-courses__vertical-separation1 {
  position: absolute;
  background-color: #5200ff;
  top: 200px;
  width: 80%;
  left: 10%;
  height: 1px;
}

.list-of-courses__vertical-separation2 {
  position: absolute;
  background-color: #5200ff;
  left: 49%;
  top: 400px;
  width: 800px;
  height: 1px;
  width: 80%;
  left: 10%;
}

.list-of-courses__vertical-separation3 {
  position: absolute;
  background-color: #5200ff;
  left: 49%;
  top: 600px;
  width: 800px;
  height: 1px;
  width: 80%;
  left: 10%;
}
</style>
