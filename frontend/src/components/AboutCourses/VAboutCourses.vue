<template lang="pug">
.about-courses.padding-html#pros
    .title_about_curse.margin_in_width Плюсы наших курсов
    .text_about_curse.margin_in_width
      ul
        li.info_cours 
          span Показываем, как с пользой <br> проводить время за компьютером
        li.info_cours 
          span Подберем курс по вашим <br> интересам или выберет готовыую <br> программу
        li.info_cours 
          span Ребенок найдет новымх друзей по <br> увлечениям 
        li.info_cours 
          span Индивидуальный темп обучения
        li.info_cours 
          span Занимайтесь когда вам удобно
        li.info_cours 
          span Дети учатся с удовольствием
        li.info_cours 
          span Экономим время в дороге

    img.pic(src='static/Vector1.png')
    img.pic(src='static/Vector2.png')

</template>

<script>
import VCourses from '../Courses/VCourses'
export default {
  components: {
    'courses': VCourses
  }
}
// console.log(url('../Courses/VCourse'))
</script>

<style>
  html {
    scroll-behavior: smooth;
  }
  .about-courses {
    position: relative;
    
    display: flex;
    height: 1200px;
    flex-direction: row;
    flex-wrap: wrap;
    background: linear-gradient(116.91deg, #004AD5 0%, #00BEFD 99.16%);
  }

  .margin_in_width {
    margin: 0 auto;
  }

  .title_about_curse {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 55px;
    line-height: 64px;
    color: #FFFFFF;
    margin-top:56px;
  }

  .info_cours {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;
    color: #FFFFFF;
    margin-bottom: 70px;
  }

  .info_cours {
    list-style:none;
  }

  .info_cours:before {
    content: "";
    margin-right: 10px;
    bottom: 3px;
    background: linear-gradient(180deg, #753DEB 0%, #1059F6 100%);

    display:inline-block;
    width:14px;
    height:14px;
    border-radius: 15px;
  }

  .pic {
    position: absolute;
    bottom:0;
    left:0;
  }

  .text_about_curse {
    margin-top:181px;
  }


</style>