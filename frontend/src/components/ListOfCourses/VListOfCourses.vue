<template lang="pug">
.list-of-courses
  #list-of-courses__title.list-of-courses__title.html__title_white Наши курсы
  .list-of-courses__coutainer
    .list-of-courses__column1
      .list-of-courses__course.html__subtitle_white Звукорежессура
      .list-of-courses__course.html__subtitle_white  Дизайн
      .list-of-courses__course.html__subtitle_white  Программирование на языке Scratch
      .list-of-courses__course.html__subtitle_white  Создание сайтов Front-end разработка

    .list-of-courses__column2
      .list-of-courses__course.html__subtitle_white  Программирование на языке Python
      .list-of-courses__course.html__subtitle_white  Графический дизайн
      .list-of-courses__course.html__subtitle_white  3D-Моделирование
      .list-of-courses__course.html__subtitle_white  Разработка игр в UNITY
    .list-of-courses__delimiter
    .list-of-courses__vertical-separation1
    .list-of-courses__vertical-separation2
    .list-of-courses__vertical-separation3
</template>


<style>
.list-of-courses {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list-of-courses__title {
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
