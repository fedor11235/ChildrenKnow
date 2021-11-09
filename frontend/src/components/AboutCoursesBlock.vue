<template lang="pug">
#block-about-courses.block-about-courses.padding-html
  .block-about-courses__title.html__title_white {{title}}
  .block-about-courses__coutainer
    ul
      li(v-for='item in info' :key='item.text' class = 'block-about-courses__text html__main-text_white') 
        span {{item.text}}

  img.block-about-courses__img1(src="@/assets/img/block-about-courses__img1.png")
  img.block-about-courses__img2(src="@/assets/img/block-about-courses__img2.png")

</template>

<script>

export default {
  name:'block-about-courses',
  props:['title', 'info']
};
</script>

<style lang="sass">
.block-about-courses
  position: relative
  height: 1024px
  background: linear-gradient(116.91deg, #004ad5 0%, #00befd 99.16%)

.block-about-courses__title
  position: absolute
  top: 31px
  left: 110px
  z-index: 1

.block-about-courses__coutainer
  position: absolute
  width: 50%
  top: 200px
  right: 110px
  z-index: 1

.block-about-courses__text
  margin-bottom: 42px
  list-style: none

  &:before
    content: ""
    margin-right: 10px
    bottom: 3px
    background: linear-gradient(180deg, #753deb 0%, #1059f6 100%)
    display: inline-block
    width: 14px
    height: 14px
    border-radius: 15px

.block-about-courses__img1, .block-about-courses__img2
  position: absolute
  bottom: 0
  left: 0

@media screen and (max-width: 1280px)
  .block-about-courses
    height: 800px

  .block-about-courses__title
    top: 41px
    left: 105px

  .block-about-courses__coutainer
    top: 180px
    right: 105px

  .block-about-courses__text
    &:before
      margin-right: 3px
      margin-bottom: 3px
      width: 9px
      height: 9px

    margin-bottom: 30px
    list-style: none

  .block-about-courses__img1
    width: 464.5px
    height: 484px

  .block-about-courses__img2
    width: 503.5px
    height: 387px

@media screen and (max-width: 992px)
  .block-about-courses
    height: 650px

  .block-about-courses__title
    top: 12px
    left: 55px

  .block-about-courses__coutainer
    top: 103px
    right: 75px

@media screen and (max-width: 750px)
  .block-about-courses
    height: 480px

  .block-about-courses__title
    top: 26px
    left: 55px

  .block-about-courses__coutainer
    top: 86px
    right: 55px

  .block-about-courses__text
    &:before
      margin-right: 3px
      margin-bottom: 3px
      width: 6px
      height: 6px

    margin-bottom: 17px
    list-style: none

  .block-about-courses__img1
    width: 313px
    height: 327px

  .block-about-courses__img2
    width: 336px
    height: 267px

@media screen and (max-width: 400px)
  .block-about-courses
    height: 505px
    background-image: url(../assets/img/block-about-courses__img3.png)

  .block-about-courses__title
    position: initial
    text-align: center
    padding-top: 13px

  .block-about-courses__coutainer
    position: initial
    margin-top: 19px
    margin-right: auto
    margin-left: auto

  .block-about-courses__text
    &:before
      margin-right: 3px
      margin-bottom: 3px
      width: 6px
      height: 6px

    margin-bottom: 32px
    text-align: center

  .block-about-courses__img1, .block-about-courses__img2, .block-about-courses__text:before
    display: none
</style>