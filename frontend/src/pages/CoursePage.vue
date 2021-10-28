<template lang="pug">
.course-page
  header-block
  main-block
  about-courses
  how-lessons
  recording
  footer-block
</template>
<script>
import MainBlock from "@/components/MainBlock";
import AboutCourses from "@/components/AboutCourses";
import HowLessons from "@/components/HowLessons";
import Recording from "@/components/Recording";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default {
  components: {
    "main-block": MainBlock,
    "about-courses": AboutCourses,
    "how-lessons": HowLessons,
    "recording": Recording,
    "footer-block": Footer,
    "header-block": Header,
  },
};