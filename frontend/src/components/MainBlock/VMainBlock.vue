<template lang="pug">
.main-block
  .header.margin-html
    //- img.logo(src='static/logo.png')
    .logo-text ChildrenKnow
    .menu
      a.navlink(href='http://localhost:8080') Блок
      a.navlink(href='/#courses') Курсы
      a.navlink(href='/#pros') Плюсы курсов
      a.navlink(href='/#how') Как проходят наши курсы
      a.navlink(href='/#recording') Запись
  hr
  .container-main.margin-html
      //- link(rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.2.14/spectre.min.css')
      .container-main-row
          .container-main_header Изучи будующую профессию с интузиазмом
          .container-main_content Обучаем детей профессям <br> будующего,<br>индивитульные онлайн-занятия
          button.container-main_button Пробный урок
          //- button.container-main_button Консультанция
      .container-main-row.center-img
        img.container-main-img(src='static/main.png')

  .list-of-courses
    .list-of-courses-title#courses Наши курсы
    .list-of-courses-container
      .course-col1
        .course1 
          span Звукорежессура
        .course1 Дизайн
        .course1 Программирование на языке Scratch
        .course1 Создание сайтов Front-end разработка

      .course-col2
        .course2 Программирование на языке Python
        .course2 Графический дизайн
        .course2 3D-Моделирование
        .course2 Разработка игр в UNITY
      .delimiter
      .vertical-separation1
      .vertical-separation2
      .vertical-separation3


</template>

<script>

</script>

<style>

.vertical-separation1 {
    position:absolute;
    background-color: #5200FF;
    top:200px;
    width: 80%;
    left:10%;
    height: 1px;
}

.vertical-separation2 {
    position:absolute;
    background-color: #5200FF;
    left:49%;
    top:400px;
    width: 800px;
    height: 1px;
    width: 80%;
    left:10%;

}

.vertical-separation3 {
    position:absolute;
    background-color: #5200FF;
    left:49%;
    top:600px;
    width: 800px;
    height: 1px;
    width: 80%;
    left:10%;

}

.course-col1 {
  position: absolute;
  margin-top: 70px;
  width: 48%;
  left: 0;
  text-align: center;

  /* left:0; */

}



.course-col2 {
    position: absolute;
    width: 48%;
    margin-top: 70px;
    right: 0;
    text-align: center;
  
}

.course1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  height: 200px;
  

  color: #FFFFFF;
  cursor: pointer;

}

.course2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  height: 200px;

  color: #FFFFFF;
  cursor: pointer;
}

.list-of-courses {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.list-of-courses-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 64px;
  color: #FFFFFF;
  margin-top:160px;

}

.list-of-courses-container {
  position: relative;
  margin-top:100px;
  width: 1100px;
  height: 800px;
  border: 3px solid #5200FF;
  box-sizing: border-box;
}

.delimiter {
  position:absolute;
  background-color: #5200FF;
  left:49%;
  bottom:0;
  width: 3px;
  height: 764px;
}


.main-block {
  height: 2048px;
  background: linear-gradient(358.17deg, #0150D7 1.49%, #0198F0 42.16%, rgba(196, 196, 196, 0) 98.38%);
}

.container-main {
  position: relative;
  display: flex;
  padding-top: 130px;
  padding-bottom: 28px;
}

.container-main_header {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 75px;
  line-height: 88px;

  color: #000000;
  margin-bottom:11px;
}

.container-main_content {
  font-size: 18px;
}

.container-main-row {
  width: 50%;
}

.container-main_content {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;

  color: #000000;
  margin-bottom:72px;
}

.container-main_button {
  width: 295.54px;
  height: 63.01px;
  background: #014DD6;
  border-radius: 13px;
  border:none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  margin-right: 20px;
  color: #FFFFFF;
  cursor: pointer;

  outline: none; 
  border: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;    
}

.container-main_button:active {
  background: #5200FF;

  outline: none; 
  border: none;
}

.container-main_button:focus {
  outline: none; 
  border: none;
}



.center-img {
  position: absolute;
  top :75px;
  right: 0;
  text-align: center
}

.logo { 
    height: 50px;
 }
 .navlink {
   display: inline-block;
   margin-left: 22px;
   /* #color: #2e2c2c; */
   line-height: 19px;
   font-weight: 500;

  font-size: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-decoration: none;

  color: #000000;
 }

 .navlink:hover {
   color: #5200FF;

 }

  .header {
    position: relative;
    height: 70px;
  }

 .menu{
   position:absolute;
   right: 0;
   top:20px;


 }

 .logo-text {
    position:absolute;
    left:0;
    top:20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 33px;

    color: #000000;
 }

</style>
