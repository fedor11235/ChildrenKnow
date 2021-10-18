<template lang="pug">
#pros.block-about-courses.padding-html
  .block-about-courses__title.margin_in_width Плюсы наших курсов
  .block-about-courses__coutainer.margin_in_width
    ul
      li.block-about-courses__text
        span Показываем, как с пользой <br> проводить время за компьютером
      li.block-about-courses__text 
        span Подберем курс по вашим <br> интересам или выберет готовыую <br> программу
      li.block-about-courses__text
        span Ребенок найдет новымх друзей по <br> увлечениям
      li.block-about-courses__text
        span Индивидуальный темп обучения
      li.block-about-courses__text
        span Занимайтесь когда вам удобно
      li.block-about-courses__text
        span Дети учатся с удовольствием
      li.block-about-courses__text
        span Экономим время в дороге

  img.block-about-courses__img(src="static/Vector1.png")
  img.block-about-courses__img(src="static/Vector2.png")
</template>


<style>
.block-about-courses {
  position: relative;

  display: flex;
  height: 1200px;
  flex-direction: row;
  flex-wrap: wrap;
  background: linear-gradient(116.91deg, #004ad5 0%, #00befd 99.16%);
}

.block-about-courses__title {
  font: normal bold 55px Roboto;
  color: #ffffff;
  margin-top: 56px;
}

.block-about-courses__coutainer {
  margin-top: 181px;
}

.margin_in_width {
  margin: 0 auto;
}

.block-about-courses__text {
  font: normal 30px Roboto;
  color: #ffffff;
  margin-bottom: 70px;
}

.block-about-courses__text {
  list-style: none;
}

.block-about-courses__text:before {
  content: "";
  margin-right: 10px;
  bottom: 3px;
  background: linear-gradient(180deg, #753deb 0%, #1059f6 100%);

  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 15px;
}

.block-about-courses__img {
  position: absolute;
  bottom: 0;
  left: 0;
}

html {
  scroll-behavior: smooth;
}
</style>