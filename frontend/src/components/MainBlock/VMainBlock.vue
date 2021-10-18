<template lang="pug">
.main-block
  face
  list-of-courses
</template>
<script>
import VListOfCourses from "../ListOfCourses/VListOfCourses";
import VFace from "../Face/VFace";

export default {
  components: {
    "list-of-courses": VListOfCourses,
    "face": VFace
  },
};
</script>
<style>
.main-block {
  height: 2048px;
  background: linear-gradient(
    358.17deg,
    #0150d7 1.49%,
    #0198f0 42.16%,
    rgba(196, 196, 196, 0) 98.38%
  );
}
</style>
