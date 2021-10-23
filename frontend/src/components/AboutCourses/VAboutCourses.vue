<template lang="pug">
#block-about-courses.block-about-courses.padding-html
  .block-about-courses__title.html__title_white Плюсы наших курсов
  .block-about-courses__coutainer
    ul
      li.block-about-courses__text.html__main-text_white 
        span Показываем, как с пользой <br> проводить время за компьютером
      li.block-about-courses__text.html__main-text_white 
        span Подберем курс по вашим <br> интересам или выберет готовую <br> программу
      li.block-about-courses__text.html__main-text_white 
        span Ребенок найдет новымх друзей по <br> увлечениям
      li.block-about-courses__text.html__main-text_white 
        span Индивидуальный темп обучения
      li.block-about-courses__text.html__main-text_white 
        span Занимайтесь когда вам удобно
      li.block-about-courses__text.html__main-text_white 
        span Дети учатся с удовольствием
      li.block-about-courses__text.html__main-text_white 
        span Экономим время в дороге

  img.block-about-courses__img1(src="./block-about-courses__img1.png")
  img.block-about-courses__img2(src="./block-about-courses__img2.png")
</template>


<style>
.block-about-courses {
  position: relative;
  height: 1024px;
  background: linear-gradient(116.91deg, #004ad5 0%, #00befd 99.16%);
}

.block-about-courses__title {
  position: absolute;
  top: 31px;
  z-index: 1;
}

.block-about-courses__coutainer {
  position: absolute;
  top: 131px;
  right: 110px;
  z-index: 1;
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

.block-about-courses__img1 {
  position: absolute;
  bottom: 0;
  left: 0;
}

.block-about-courses__img2 {
  position: absolute;
  bottom: 0;
  left: 0;
}

@media screen and (max-width: 1280px) {
  .block-about-courses {
    height: 800px;
  }
  .block-about-courses__title {
    top: 41px;
  }
  .block-about-courses__coutainer {
    top: 130px;
    right: 105px;
  }
  .block-about-courses__text:before {
    margin-right: 3px;
    margin-bottom: 3px;
    width: 9px;
    height: 9px;
  }
  .block-about-courses__text {
    margin-bottom: 30px;
    list-style: none;
  }
    .block-about-courses__img1 {
    width: 464.5px;
    height: 484px;
  }
  .block-about-courses__img2 {
    width: 503.5px;
    height: 387px;
  }
}

@media screen and (max-width: 992px) {
  .block-about-courses {
    height: 650px;
  }
  .block-about-courses__title {
    top: 12px;
  }
  .block-about-courses__coutainer {
    top: 103px;
    right: 75px;
  }
  .block-about-courses__text:before {
    margin-right: 3px;
    margin-bottom: 3px;
    width: 9px;
    height: 9px;
  }
}
</style>