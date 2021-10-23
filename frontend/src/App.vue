<template lang="pug">
#app
  header-block
  main-block
  about-courses
  how-lessons
  recording
  footer-block
</template>
<script>
import VMainBlock from "./components/MainBlock/VMainBlock";
import VAboutCourses from "./components/AboutCourses/VAboutCourses";
import VHowLessons from "./components/HowLessons/VHowLessons";
import VRecording from "./components/Recording/VRecording";
import VFooter from "./components/Footer/VFooter";
import VHeader from "./components/Header/VHeader";

export default {
  name: "app",
  components: {
    "main-block": VMainBlock,
    "about-courses": VAboutCourses,
    "how-lessons": VHowLessons,
    recording: VRecording,
    "footer-block": VFooter,
    "header-block": VHeader,
  },
};
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Eczar);
@import url(https://fonts.googleapis.com/css?family=Work+Sans);
body {
  font-family: "Work Sans", "Segoe UI", "Helvetica Neue", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Eczar", sans-serif;
}
.separation {
  margin-top: 100px;
  height: 5px;
  border: none;
  background-color: black;
}

#app {
  max-width: 1700px;

  margin-left: auto;
  margin-right: auto;
}

body {
  background: linear-gradient(
    358.17deg,
    #4800df 1.49%,
    #0198f0 42.16%,
    rgba(196, 196, 196, 0) 98.38%
  );
  margin:0;
}
</style>
