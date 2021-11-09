<template lang="pug">
.recall-top-block.html_margin
  .recall-top-block__reviews-top.recall-top-block__reviews-left.recall-top-block__reviews-style
    img.recall-top-block__img(src="@/assets/img/recall-page__name-icon.png")
    .recall-top-block__info
      .recall-top-block__name.html__subtitle_white_normal Иван
      .recall-top-block__review.html__subtext_white Хороший курс, приятный, понятный. Преподователи замечательные. Будем дальше учиться у них.
  .recall-top-block__reviews-bottom.recall-top-block__reviews-left.recall-top-block__reviews-style
    img.recall-top-block__img(src="@/assets/img/recall-page__name-icon.png")
    .recall-top-block__info
      .recall-top-block__name.html__subtitle_white_normal Иван
      .recall-top-block__review.html__subtext_white Хороший курс, приятный, понятный. Преподователи замечательные. Будем дальше учиться у них.
  .recall-top-block__reviews-center.recall-top-block__reviews-style
    img.recall-top-block__img(src="@/assets/img/recall-page__name-icon.png")
    .recall-top-block__info
      .recall-top-block__name.html__subtitle_white_normal Иван
      .recall-top-block__review.html__subtext_white Хороший курс, приятный, понятный. Преподователи замечательные. Будем дальше учиться у них.
  .recall-top-block__reviews-top.recall-top-block__reviews-right.recall-top-block__reviews-style
    img.recall-top-block__img(src="@/assets/img/recall-page__name-icon.png")
    .recall-top-block__info
      .recall-top-block__name.html__subtitle_white_normal Иван
      .recall-top-block__review.html__subtext_white Хороший курс, приятный, понятный. Преподователи замечательные. Будем дальше учиться у них.
  .recall-top-block__reviews-bottom.recall-top-block__reviews-right.recall-top-block__reviews-style
    img.recall-top-block__img(src="@/assets/img/recall-page__name-icon.png")
    .recall-top-block__info
      .recall-top-block__name.html__subtitle_white_normal Иван
      .recall-top-block__review.html__subtext_white Хороший курс, приятный, понятный. Преподователи замечательные. Будем дальше учиться у них.
</template>

<script>
</script>

<style lang="sass">
.recall-top-block
  height: 1090px
  position: relative

.recall-top-block__reviews-style
  position: absolute
  display: flex
  width: 345px
  height: 392px
  background: #0254d9
  border-radius: 54px

.recall-top-block__img
  width: 58px
  height: 58px
  margin-top: 22px
  margin-left: 22px

.recall-top-block__info
  margin-left: 5px
  margin-top: 28px
  margin-right: 28px

.recall-top-block__name
  margin-bottom: 31px

.recall-top-block__reviews-top
  top: 67px

.recall-top-block__reviews-center
  left: 50%
  top: 50%
  margin-left: -172.5px
  margin-top: -196px

.recall-top-block__reviews-left
  left: 0

.recall-top-block__reviews-right
  right: 0

.recall-top-block__reviews-bottom
  bottom: 67px

@media screen and (max-width: 1300px)
  .recall-top-block
    height: 918px

  .recall-top-block__reviews-style
    width: 306.7px
    height: 348.49px

  .recall-top-block__reviews-center
    margin-left: -153.35px
    margin-top: -174.25px

@media screen and (max-width: 1180px)
  .recall-top-block
    height: 650px

  .recall-top-block__reviews-style
    width: 237.06px
    height: 269.36px

  .recall-top-block__reviews-center
    margin-left: -118.53px
    margin-top: -134.68px

  .recall-top-block__reviews-top
    top: 33px

  .recall-top-block__reviews-bottom
    bottom: 33px

  .recall-top-block__img
    width: 31px
    height: 31px

  .recall-top-block__name
    margin-bottom: 17px

  .recall-top-block__info
    margin-left: 5px
    margin-top: 25px
    margin-right: 25px

@media screen and (max-width: 750px)
  .recall-top-block
    height: 531px

  .recall-top-block__reviews-style
    width: 196.33px
    height: 210px

  .recall-top-block__reviews-center
    display: none

@media screen and (max-width: 520px)
  .recall-top-block__reviews-style
    width: 300px

  .recall-top-block__reviews-right
    display: none

  .recall-top-block__reviews-left
    left: 50%
    margin-left: -150px
    right: 32px


</style>
