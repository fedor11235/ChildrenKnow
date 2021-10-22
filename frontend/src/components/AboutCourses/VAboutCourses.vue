<template lang="pug">
.block-about-courses.padding-html#block-about-courses
  .block-about-courses__title.margin_in_width.html__title_white  Плюсы наших курсов
  .block-about-courses__coutainer
    ul
      li.block-about-courses__text.html__main-text_white 
        span Показываем, как с пользой <br> 
        .block-about-text-space проводить время за компьютером
      li.block-about-courses__text.html__main-text_white 
        span Подберем курс по вашим <br> 
        .block-about-text-space интересам или выберет готовую <br> 
        .block-about-text-space программу
      li.block-about-courses__text.html__main-text_white 
        span Ребенок найдет новымх друзей по <br> 
        .block-about-text-space увлечениям
      li.block-about-courses__text.html__main-text_white 
        span Индивидуальный темп обучения
      li.block-about-courses__text.html__main-text_white 
        span Занимайтесь когда вам удобно
      li.block-about-courses__text.html__main-text_white 
        span Дети учатся с удовольствием
      li.block-about-courses__text.html__main-text_white 
        span Экономим время в дороге

  img.block-about-courses__img(src="./Vector1.png")
  img.block-about-courses__img(src="./Vector2.png")
</template>


<style>
.block-about-courses {
  position: relative;
  display: flex;
  height: 1024px;
  background: linear-gradient(116.91deg, #004ad5 0%, #00befd 99.16%);
}

.block-about-courses__title {
  margin-top: 31px;
}

.block-about-courses__coutainer {
  margin-top: 131px;
  margin-left:139px;
}

.block-about-courses__text {
  margin-bottom: 42px;
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
.block-about-text-space:before {
  content: "";
  margin-right: 10px;
  bottom: 3px;


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
</style>