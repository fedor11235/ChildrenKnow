<template lang="pug">
.face
  .face__info
    .face__header.html__main-title_black Изучи <br>будующую <br>профессию с <br>интузиазмом
    .face__content.html__main-text_black Обучаем детей профессям <br> будующего,<br>индивитульные онлайн-занятия
    button.face__button.html__text_white-face(
      onclick="location.href='#block-recording'"
    ) Пробный урок

  img.face__img(src="./face__img.png")
</template>

<style>
.face {
  position: relative;
  margin-top: 77px;
  height: 734px;
}

.face__info {
  position: absolute;
  width: 48%;
  height: 597px;
  left: 110px;
  z-index: 1;
}

.face__img {
  position: absolute;
  right: 110px;
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
  width: 609px;
  height: 605px;
}

@media screen and (max-width: 1280px) {
  .face__img {
    width: 430px;
    height: 427px;
    right: 105px;
  }

  .face__info {
    left: 105px;
  }
}

@media screen and (max-width: 992px) {
  .face__img {
    right: 55px;
  }
  .face__button {
    width: 318px;
    height: 67px;
  }
  .face__content {
    margin-bottom: 79px;
  }

  .face__info {
    left: 55px;
  }
}

@media screen and (max-width: 750px) {
  .face {
    height: 480px;
  }

  .face__img {
    width: 237px;
    height: 235px;
    right: 55px;
  }
  .face__button {
    width: 207px;
    height: 46px;
  }


  .face__info {
    left: 55px;
  }
  .face__header {
    margin-bottom: 27px;
  }
  .face__content {
    margin-bottom: 54px;
  }
}

@media screen and (max-width: 400px) {
  .face {
    margin: 0 47px;
    margin-top:67px;
  }
  
  .face__img {
    display: none;
  }

  .face__button {
    width: 259px;
    height: 57px;
  }
  .face__content {
    margin-bottom: 75px;
  }

  .face__info {
    position:initial;
    width: 100%;
  }
  .face__header {
    margin-bottom: 94px;
  }
}
</style>
