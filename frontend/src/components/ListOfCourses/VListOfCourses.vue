<template lang="pug">
.list-of-courses
  #list-of-courses__title.list-of-courses__title.html__title_white Наши курсы
  .list-of-courses__coutainer
    //- .list-of-courses__column1
    .list-of-courses__course.html__subtitle_white_medium
      span Звукорежессура
    .list-of-courses__course.html__subtitle_white_medium  
      span Дизайн
    .list-of-courses__course.html__subtitle_white_medium  
      span Программирование<br>на языке Scratch
    .list-of-courses__course.html__subtitle_white_medium  
      span Создание сайтов<br>Front-end разработка

    //- .list-of-courses__column2
    .list-of-courses__course.html__subtitle_white_medium  
      span Программирование<br>на языке Python
    .list-of-courses__course.html__subtitle_white_medium  
      span Графический дизайн
    .list-of-courses__course.html__subtitle_white_medium  
      span 3D-Моделирование
    .list-of-courses__course.html__subtitle_white_medium  
      span Разработка игр<br>в UNITY

    .list-of-courses__delimiter
    .list-of-courses__vertical-separation1
    .list-of-courses__vertical-separation2
    .list-of-courses__vertical-separation3
  img.list-of-courses__img(src="./Vector5.png")
</template>


<style>
.list-of-courses {
  display: flex;
  height: 1024px;
  position: relative;
  flex-direction: column;
  align-items: center;
}

.list-of-courses__title {
  margin-top: 31px;
}

.list-of-courses__coutainer {
  position: relative;
  display: grid;

  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  width: 1100px;
  margin: 61px 0 81px;
  height: 800px;
  border: 3px solid #5200ff;
  box-sizing: border-box;
}


.list-of-courses__course {
  display: flex;
  cursor: pointer;
}

.list-of-courses__course span {
  text-align: center;
  margin: auto;
}


.list-of-courses__delimiter {
  position: absolute;
  background-color: #5200ff;
  left: 49%;
  bottom: 0;
  width: 3px;
  height: 95%;
}

.list-of-courses__vertical-separation1 {
  position: absolute;
  background-color: #5200ff;
  top: 200px;
  width: 84%;
  left: 8%;
  height: 1px;
}

.list-of-courses__vertical-separation2 {
  position: absolute;
  background-color: #5200ff;
  left: 49%;
  top: 400px;
  width: 800px;
  height: 1px;
  width: 84%;
  left: 8%;
}

.list-of-courses__vertical-separation3 {
  position: absolute;
  background-color: #5200ff;
  left: 49%;
  top: 600px;
  width: 800px;
  height: 1px;
  width: 84%;
  left: 8%;
}

.list-of-courses__img {
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>
