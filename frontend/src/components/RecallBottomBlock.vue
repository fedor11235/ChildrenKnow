<template lang="pug">
.recall-bottom-block
  .recall-bottom-block__container.html_margin
    .recall-bottom-block__reviews-left.recall-bottom-block__reviews-style
      img.recall-bottom-block__img(
        src="@/assets/img/recall-page__name-icon.png"
      )
      .recall-bottom-block__info
        .recall-bottom-block__name.html__subtitle_white_normal Иван
        .recall-bottom-block__review.html__subtext_white Хороший курс, приятный, понятный. Преподователи замечательные. Будем дальше учиться у них.
    .recall-bottom-block__reviews-center.recall-bottom-block__reviews-top.recall-bottom-block__reviews-style
      img.recall-bottom-block__img(
        src="@/assets/img/recall-page__name-icon.png"
      )
      .recall-bottom-block__info
        .recall-bottom-block__name.html__subtitle_white_normal Иван
        .recall-bottom-block__review.html__subtext_white Хороший курс, приятный, понятный. Преподователи замечательные. Будем дальше учиться у них.
    .recall-bottom-block__reviews-center.recall-bottom-block__reviews-bottom.recall-bottom-block__reviews-style
      img.recall-bottom-block__img(
        src="@/assets/img/recall-page__name-icon.png"
      )
      .recall-bottom-block__info
        .recall-bottom-block__name.html__subtitle_white_normal Иван
        .recall-bottom-block__review.html__subtext_white Хороший курс, приятный, понятный. Преподователи замечательные. Будем дальше учиться у них.
    .recall-bottom-block__reviews-right.recall-bottom-block__reviews-style
      img.recall-bottom-block__img(
        src="@/assets/img/recall-page__name-icon.png"
      )
      .recall-bottom-block__info
        .recall-bottom-block__name.html__subtitle_white_normal Иван
        .recall-bottom-block__review.html__subtext_white Хороший курс, приятный, понятный. Преподователи замечательные. Будем дальше учиться у них.
</template>

<script>
</script>

<style>
.recall-bottom-block {
  background: linear-gradient(116.91deg, #004ad5 0%, #00befd 99.16%);
}

.recall-bottom-block__container {
  position: relative;
  height: 1090px;
}

.recall-bottom-block__reviews-style {
  display: flex;
  width: 345px;
  height: 392px;
  background: #0254d9;
  border-radius: 54px;

  position: absolute;
}

.recall-bottom-block__img {
  width: 58px;
  height: 58px;
  margin-top: 22px;
  margin-left: 22px;
}

.recall-bottom-block__info {
  margin-left: 5px;
  margin-top: 28px;
  margin-right: 28px;
}

.recall-bottom-block__name {
  margin-bottom: 31px;
}

.recall-bottom-block__reviews-bottom {
  bottom: 67px;
}
.recall-bottom-block__reviews-top {
  top: 67px;
}

.recall-bottom-block__reviews-center {
  left: 50%;
  margin-left: -172.5px;
}

.recall-bottom-block__reviews-left {
  left: 0;
  top: 50%;
  margin-top: -196px;
}

.recall-bottom-block__reviews-right {
  right: 0;
  top: 50%;
  margin-top: -196px;
}

@media screen and (max-width: 1300px) {
  .recall-bottom-block__container {
    height: 918px;
  }
  .recall-bottom-block__reviews-style {
    width: 306.7px;
    height: 348.49px;
  }
  .recall-bottom-block__reviews-center {
    margin-left: -153.35px;
  }
}

@media screen and (max-width: 1180px) {
  .recall-bottom-block__container {
    height: 650px;
  }

  .recall-bottom-block__reviews-style {
    width: 237.06px;
    height: 269.36px;
  }
  .recall-bottom-block__reviews-center {
    margin-left: -118.53px;
  }

  .recall-bottom-block__img {
    width: 31px;
    height: 31px;
  }
  .recall-bottom-block__name {
    margin-bottom: 17px;
  }
  .recall-bottom-block__info {
    margin-left: 5px;
    margin-top: 25px;
    margin-right: 25px;
  }
}

@media screen and (max-width: 750px) {
  .recall-bottom-block__container {
    height: 531px;
  }
  .recall-bottom-block__reviews-style {
    width: 196.33px;
    height: 210px;
    margin: 0;
  }
  .recall-bottom-block__reviews-center {
    left: auto;
    bottom: 33px;
  }

  .recall-bottom-block__reviews-right {
    top: 33px;
    margin: 0;
  }
  .recall-bottom-block__reviews-left {
    top: 33px;
    margin: 0;
  }
  .recall-bottom-block__reviews-top {
    top: auto;
    right: 0;
  }
}

@media screen and (max-width: 550px) {
  .recall-bottom-block__reviews-style {
    width: 300px;
  }

  .recall-bottom-block__reviews-left {
    left: 50%;
    margin-left: -150px;
  }

  .recall-bottom-block__reviews-top {
    left: 50%;
    margin-left: -150px;
  }
  .recall-bottom-block__reviews-right {
    display: none;
  }

  .recall-bottom-block__reviews-bottom {
    display: none;
  }
}
</style>
