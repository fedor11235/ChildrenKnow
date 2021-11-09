<template lang='pug'>
  html
    head
    body
      .main-block
        face(:title='title' :text='text')
        component(:is='InfoBlock' :block1='block1' :block2='block2')
</template>
<script>
import Face from "./Face";

export default {
  name: "main-block",
  props: ["title", "text", "InfoBlock", 'block1', 'block2'],
  components: {
    'face': Face,
  },

};
</script>
<style lang="sass">
.main-block
  background: linear-gradient(358.17deg, #0150d7 1.49%, #0198f0 42.16%, rgba(196, 196, 196, 0) 98.38%)
</style>
