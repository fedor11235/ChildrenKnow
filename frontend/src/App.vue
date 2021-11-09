<template lang="pug">
#app
  //- main-page
  router-view

</template>
<script>
import MainPage from "./pages/MainPage";

import '@/assets/css/fonts.css';
import '@/assets/css/main.css';

export default {
  name: "app",
  components: {
    "main-page": MainPage,
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
