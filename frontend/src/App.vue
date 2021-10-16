<template lang="pug">
  #app
    main-block
    about-courses
    how-lessons
    recording
    footer-block

</template>
<script>
import CreateNote from './components/CreateNote'
import NoteList from './components/NoteList'
import VMainBlock from './components/MainBlock/VMainBlock'
import VListOfCourses from './components/ListOfCoursesBlock/VListOfCourses'
import VAboutCourses from './components/AboutCourses/VAboutCourses'
import VHowLessons from './components/HowLessons/VHowLessons'
import VRecording from './components/Recording/VRecording'
import VFooter from './components/Footer/VFooter'

export default {
  name: 'app',
  components: {
    'create-note': CreateNote,
    'note-list': NoteList,
    'main-block': VMainBlock,
    'list-of-courses': VListOfCourses,
    'about-courses': VAboutCourses,
    'how-lessons': VHowLessons,
    'recording': VRecording,
    'footer-block': VFooter
  }
}
</script>
<style>
  @import url(https://fonts.googleapis.com/css?family=Eczar);
  @import url(https://fonts.googleapis.com/css?family=Work+Sans);
  body {
    font-family: "Work Sans", "Segoe UI", "Helvetica Neue", sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Eczar", sans-serif;
  }
  .separation {
    margin-top: 100px;
    height: 5px;
    border: none;
    background-color: black;
  }

  .margin-html {
    margin: 0 110px;
  }

  .padding-html {
    padding: 0 110px;
  }

</style>
