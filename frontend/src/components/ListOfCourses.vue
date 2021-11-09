<template lang="pug">
.list-of-courses
  #list-of-courses__title.list-of-courses__title.html__title_white Наши курсы
  .list-of-courses__coutainer

    .list-of-courses__course(@click="$router.push({name: 'course',  params: {title: soundEngineering.title,  text:soundEngineering.text}})").html__subtitle_white_medium
      span Звукорежессура
    .list-of-courses__course(@click="$router.push({name: 'course',  params: {title: design.title,  text:design.text}})").html__subtitle_white_medium 
      span Дизайн
    .list-of-courses__course(@click="$router.push({name: 'course',  params: {title: scratch.title,  text:scratch.text}})").html__subtitle_white_medium 
      span Программирование<br>на языке Scratch
    .list-of-courses__course(@click="$router.push({name: 'course',  params: {title: frontEnd.title,  text:frontEnd.text}})").html__subtitle_white_medium 
      span Создание сайтов<br>Front-end разработка

    //- .list-of-courses__column2
    .list-of-courses__course(@click="$router.push({name: 'course',  params: {title: python.title,  text:python.text}})").html__subtitle_white_medium 
      span Программирование<br>на языке Python
    .list-of-courses__course(@click="$router.push({name: 'course',  params: {title: graphicDesign.title,  text:graphicDesign.text}})").html__subtitle_white_medium 
      span Графический дизайн
    .list-of-courses__course(@click="$router.push({name: 'course',  params: {title: modeling.title,  text:modeling.text}})").html__subtitle_white_medium 
      span 3D-Моделирование
    .list-of-courses__course(@click="$router.push({name: 'course',  params: {title: unity.title,  text:unity.text}})").html__subtitle_white_medium 
      span Разработка игр<br>в UNITY

    .list-of-courses__delimiter
    .list-of-courses__vertical-separation1
    .list-of-courses__vertical-separation2
    .list-of-courses__vertical-separation3

    .list-of-courses__vertical-separation4
    .list-of-courses__vertical-separation5
    .list-of-courses__vertical-separation6
    .list-of-courses__vertical-separation7
  //- img.list-of-courses__img(src="@/assets/img/list-of-courses__img.png")
</template>

<script>

export default {
  name:'list-of-courses',
  data() {
    return { 
      soundEngineering:{title: 'Звукорежессура',  text:'Если Вы любите музыку и хотите связать с ней всю свою жизнь - эта профессия для Вас! '},
      scratch:{title: 'Программирование на языке Scratch',  text:'Для лялябомов'},
      python:{title: 'Программирование на языке Python',  text:'Для крутых'},
      modeling:{title: '3D-Моделирование',  text:'Выпендрёжники'},
      design:{title: 'Дизайн',  text:'Почти моделирование тока нет'},
      frontEnd:{title: 'Создание сайтов Front-end разработка',  text:'Для Гены'},
      graphicDesign:{title: 'Дизайн Для Олегов',  text:'Флекс не релакс'},
      unity:{title: 'Разработка игр в UNITY',  text:'Где можно применить моделирование'},
    };
  },
};


</script>

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
  left: 50%;
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

@media screen and (max-width: 1280px) {
  .list-of-courses__title {
    margin-top: 41px;
  }
  .list-of-courses {
    height: 800px;
  }
  .list-of-courses__coutainer {
    width: 950px;
    height: 563px;
    margin: 54px 0 98px;
  }
  .list-of-courses__vertical-separation1 {
    top: 140px;
  }

  .list-of-courses__vertical-separation2 {
    top: 280px;
  }

  .list-of-courses__vertical-separation3 {
    top: 420px;
  }
}

@media screen and (max-width: 992px) {
  .list-of-courses__title {
    margin-top: 12px;
  }
  .list-of-courses {
    height: 650px;
  }
  .list-of-courses__coutainer {
    width: 720px;
    height: 420px;
    margin: 49px 0 111px;
  }
  .list-of-courses__vertical-separation1 {
    top: 105px;
  }

  .list-of-courses__vertical-separation2 {
    top: 210px;
  }

  .list-of-courses__vertical-separation3 {
    top: 315px;
  }
}

@media screen and (max-width: 750px) {
  .list-of-courses__title {
    margin-top: 26px;
  }
  .list-of-courses {
    height: 480px;
  }
  .list-of-courses__coutainer {
    width: 459px;
    height: 325px;
    margin: 37px 0 62px;
  }
  .list-of-courses__vertical-separation1 {
    display: none;
  }

  .list-of-courses__vertical-separation2 {
    display: none;
  }

  .list-of-courses__vertical-separation3 {
    display: none;
  }

  .list-of-courses__delimiter {
    display: none;
  }
}

@media screen and (max-width: 500px) {
  .list-of-courses__title {
    margin-top: 13px;
  }
  .list-of-courses {
    height: 578px;
  }
  .list-of-courses__coutainer {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    width: 307px;
    height: 486px;
    margin: 25px 0 26px;
  }
  .list-of-courses__vertical-separation1 {
    display: block;
    top: 60px;
  }

  .list-of-courses__vertical-separation2 {
    display: block;
    top: 120px;
  }

  .list-of-courses__vertical-separation3 {
    display: block;
    top: 180px;
  }

  .list-of-courses__vertical-separation4 {
    position: absolute;
    background-color: #5200ff;
    top: 240px;
    width: 84%;
    left: 8%;
    height: 1px;
  }
  .list-of-courses__vertical-separation5 {
    position: absolute;
    background-color: #5200ff;
    top: 300px;
    width: 84%;
    left: 8%;
    height: 1px;
  }
  .list-of-courses__vertical-separation6 {
    position: absolute;
    background-color: #5200ff;
    top: 360px;
    width: 84%;
    left: 8%;
    height: 1px;
  }
  .list-of-courses__vertical-separation7 {
    position: absolute;
    background-color: #5200ff;
    top: 420px;
    width: 84%;
    left: 8%;
    height: 1px;
  }
}
</style>
