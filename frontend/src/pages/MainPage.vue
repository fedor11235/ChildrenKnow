<template lang="pug">
.main-page
  header-block
  front-block
  about-courses-block
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

export default {
  name:'main-block',
  components: {
    "header-block": HeaderBlock,
    "front-block": MainBlock,
    "how-lessons-block": HowLessonsBlock,
    "about-courses-block": AboutCoursesBlock,
    "recording-block": RecordingBlock,
    "footer-block": FooterBlock
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
