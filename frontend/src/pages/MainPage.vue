<template lang="pug">
.main-page
  header-block
  front-block(:title="main.title", :text="main.text", :InfoBlock="ListOfCourses")
  about-courses-block(:title="aboutCourses.title", :info="aboutCourses.info")
  how-lessons-block
  recording-block
  footer-block
</template>
<script>
import HeaderBlock from "@/components/HeaderBlock";
import MainBlock from "@/components/MainBlock";
import HowLessonsBlock from "@/components/HowLessonsBlock";
import AboutCoursesBlock from "@/components/AboutCoursesBlock";
import RecordingBlock from "@/components/RecordingBlock";
import FooterBlock from "@/components/FooterBlock";
import ListOfCourses from "@/components/ListOfCourses";

export default {
  name:'main-block',
  components: {
    "header-block": HeaderBlock,
    "front-block": MainBlock,
    "how-lessons-block": HowLessonsBlock,
    "about-courses-block": AboutCoursesBlock,
    "recording-block": RecordingBlock,
    "footer-block": FooterBlock,
    ListOfCourses
  },
    data() {
    return { 
      ListOfCourses,
      main:{title: 'Изучи будующую профессию с энтузиазмом', text: 'Обучаем детей профессям будующего, индивитульные онлайн-занятия'},
      aboutCourses:{title: 'Плюсы наших курсов',info: 
                                                    [{text: 'Показываем, как с пользой проводить время за компьютером'},
                                                    {text: 'Подберем курс по вашим интересам или выберет готовыую программу'},
                                                    {text: 'Ребенок найдет новымх друзей по увлечениям'},
                                                    {text: 'Индивидуальный темп обучения'},
                                                    {text: 'Занимайтесь когда вам удобно'},
                                                    {text: 'Дети учатся с удовольствием'},
                                                    {text: 'Экономим время в дороге'},
                                                    ]},
      
    };
  },
};
</script>
<style>
.main-block {
  background: linear-gradient(
    358.17deg,
    #0150d7 1.49%,
    #0198f0 42.16%,
    rgba(196, 196, 196, 0) 98.38%
  );
}
</style>
