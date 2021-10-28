<template lang="pug">
.main-block
  face
  list-of-courses
</template>
<script>
import ListOfCourses from "./ListOfCourses";
import Face from "./Face";

export default {
  name:'main-block',
  components: {
    "face": Face,
    "list-of-courses": ListOfCourses,
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
