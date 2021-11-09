<template lang="pug">
.course-information
  #course-information__title.course-information__title.html__title_white Кому подойдёт этот курс
  .course-information__coutainer

    .course-information__course.html__subtitle_white_medium
      span {{block1.title}}
    .course-information__course.html__subtitle_white_medium 
      span {{block2.title}}
    .course-information__course.html__main-text_white
      span {{block1.text}}
    .course-information__course.html__main-text_white
      span {{block2.text}}


    .course-information__delimiter
    .course-information__horizontal-separation

  //- img.course-information-block__img(src="@/assets/img/course-information-block__img.png")
</template>

<script>

export default {
  name:'course-information',
  props: ['block1', 'block2'],
  data() {
    return { 
    };
  },
};


</script>

<style>
.course-information {
  display: flex;
  height: 1024px;
  position: relative;
  flex-direction: column;
  align-items: center;
}

.course-information__title {
  margin-top: 31px;
}

.course-information__coutainer {
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

.course-information__course {
  display: flex;
  cursor: pointer;
}

.course-information__course span {
  text-align: center;
  margin: auto;
}

.course-information__delimiter {
  position: absolute;
  background-color: #5200ff;
  left: 50%;
  bottom: 0;
  width: 3px;
  height: 95%;
}

.course-information__horizontal-separation{
  position: absolute;
  background-color: #5200ff;
  top: 200px;
  width: 84%;
  left: 8%;
  height: 1px;
}


.course-information__img {
  position: absolute;
  width: 100%;
  bottom: 0;
}

@media screen and (max-width: 1280px) {
  .course-information__title {
    margin-top: 41px;
  }
  .course-information {
    height: 800px;
  }
  .course-information__coutainer {
    width: 950px;
    height: 563px;
    margin: 54px 0 98px;
  }
  .course-information__horizontal-separation {
    top: 140px;
  }
}

@media screen and (max-width: 992px) {
  .course-information__title {
    margin-top: 12px;
  }
  .course-information {
    height: 650px;
  }
  .course-information__coutainer {
    width: 720px;
    height: 420px;
    margin: 49px 0 111px;
  }
  .course-information__horizontal-separation {
    top: 105px;
  }
}

@media screen and (max-width: 750px) {
  .course-information__title {
    margin-top: 26px;
  }
  .course-information {
    height: 480px;
  }
  .course-information__coutainer {
    width: 459px;
    height: 325px;
    margin: 37px 0 62px;
  }
  .course-information__horizontal-separation1 {
    display: none;
  }

  .course-information__delimiter {
    display: none;
  }

  .course-information__horizontal-separation {
    top: 81px;
  }
}

@media screen and (max-width: 500px) {
  .course-information__title {
    margin-top: 13px;
  }
  .course-information {
    height: 578px;
  }
  .course-information__coutainer {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    width: 307px;
    height: 486px;
    margin: 25px 0 26px;
  }
  .course-information__horizontal-separation {
    display: block;
    top: 60px;
  }
}
</style>
