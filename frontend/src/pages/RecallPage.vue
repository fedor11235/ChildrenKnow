<template lang="pug">
.guestion-answer-page
  header-block
  front-block(
    :title="main.title",
    :text="main.text",
    :InfoBlock="RecallTopBlock"
  )  
  recall-top-block
  recall-bottom-block
  footer-block
</template>
<script>
import HeaderBlock from "@/components/HeaderBlock";
import MainBlock from "@/components/MainBlock";
import RecallTopBlock from "@/components/RecallTopBlock";
import RecallBottomBlock from "@/components/RecallBottomBlock";
import FooterBlock from "@/components/FooterBlock";

export default {
  name: "main-block",
  components: {
    "header-block": HeaderBlock,
    "front-block": MainBlock,
    "recall-top-block": RecallTopBlock,
    "recall-bottom-block": RecallBottomBlock,
    "footer-block": FooterBlock,
    RecallTopBlock
  },
  data() {
    return {
      main: {
        title: "Вопрос-ответ",
        text: "Вы спрашиваете, мы отвечаем",
      },
    };
  },
};
</script>