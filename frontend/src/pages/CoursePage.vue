<template lang="pug">
.main-page
  header-block
  front-block(:title="title" :text="text" :InfoBlock="CourseInformation" :block1="block1" :block2="block2")
  about-courses-block(:title="aboutCourses.title", :info="aboutCourses.info")
  quetion-block
  footer-block
</template>
<script>
import HeaderBlock from "@/components/HeaderBlock";
import MainBlock from "@/components/MainBlock";
import HowLessonsBlock from "@/components/HowLessonsBlock";
import AboutCoursesBlock from "@/components/AboutCoursesBlock";

import QuestionsBlock from "@/components/QuestionsBlock";
import FooterBlock from "@/components/FooterBlock";
import CourseInformation from "@/components/CourseInformation";

export default {
  name:'main-block',
  props:['title', 'text'],
  components: {
    "header-block": HeaderBlock,
    "front-block": MainBlock,
    "how-lessons-block": HowLessonsBlock,
    "about-courses-block": AboutCoursesBlock,

    "footer-block": FooterBlock,
    "quetion-block": QuestionsBlock,
    CourseInformation
  },
    data() {
    return { 
      block1:{title: 'Заинтересованным новичкам',  text:'Вы пукандос'},
      block2:{title: 'Диджеям и музыкантам',  text:'Вы дубанос'},
      CourseInformation,
      aboutCourses:{title: 'Чему вы научитесь',info: 
                                                    [{text: 'Записывать и создавать эффекты для видео и моушн-роликов'},
                                                    {text: 'Обрабатывать речь и синхронные шумы'},
                                                    {text: 'Работать в программе Ableton Live'},
                                                    {text: 'Работать в программе  FL Studio'},
                                                    {text: 'Разбираться в слоях звука'},
                                                    ]},
      
    };
  },
};
</script>