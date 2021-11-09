<template lang="pug">
#block-recording.block-recording
  contact-board

  img.block-recording__img1(src="@/assets/img/block-recording__img1.png")
  img.block-recording__img2(src="@/assets/img/block-recording__img2.png")
</template>

<script>
import ContactBoard from "./ContactBoard";

export default {
  name:'block-recording',
  components: {
    "contact-board": ContactBoard,
  },
};
</script>


<style lang="sass">
.block-recording
  position: relative
  background-color: #fff
  z-index: 1
  height: 1024px

.block-recording__img1
  position: absolute
  left: 0
  top: -2px
  z-index: -1

.block-recording__img2
  position: absolute
  right: 0
  bottom: 0
  z-index: -1

.contact-board_margin-bottom
  margin-bottom: 36px

@media screen and (max-width: 1280px)
  .block-recording
    height: 800px

  .block-recording__img1
    width: 543.91px
    height: 591.31px

  .block-recording__img2
    width: 670.73px
    height: 616.02px

@media screen and (max-width: 992px)
  .block-recording
    height: 650px

  .block-recording__img1
    width: 437.29px
    height: 455.42px

  .block-recording__img2
    width: 525.22px
    height: 499.92px

@media screen and (max-width: 750px)
  .block-recording
    height: 480px

  .block-recording__img1
    width: 229.09px
    height: 249.87px

  .block-recording__img2
    width: 293.03px
    height: 267.86px

@media screen and (max-width: 530px)
  .block-recording
    height: 510px

  .block-recording__img1
    width: 209.79px
    height: 227.9px

  .block-recording__img2
    width: 244.99px
    height: 229.16px
</style>