<template lang="pug">
.block-list_of_courses.margin-html
  .title Список курсов
  .container-list_of_courses
    courses
    courses
    courses
    courses
    courses
    courses
    courses
    courses
  
</template>

<script>
import VCourses from '../Courses/VCourses'
export default {
  components: {
    'courses': VCourses
  }
}
</script>

<style>
  .title {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 70px;
    line-height: 82px;
    text-align: center;
    margin-bottom: 140px;
  }

  .container-list_of_courses {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
