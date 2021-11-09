<template lang="pug">
.guestion-answer-page
  header-block
  front-block(
    :title="main.title",
    :text="main.text",
  )  
  question-answer-block
  footer-block
</template>
<script>
import HeaderBlock from "@/components/HeaderBlock";
import MainBlock from "@/components/MainBlock";
import QuestionAnswerBlock from "@/components/QuestionAnswerBlock";
import FooterBlock from "@/components/FooterBlock";

export default {
  name: "main-block",
  components: {
    "header-block": HeaderBlock,
    "front-block": MainBlock,
    "question-answer-block": QuestionAnswerBlock,
    "footer-block": FooterBlock,
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