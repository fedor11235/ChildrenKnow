<template >
  <div class="quetions-answer-block">
    <div
      class="quetions-answer-block__title html__title_white"
      id="quetions-answer-block__title"
    >
      Кому подойдёт этот курс
    </div>
    <div class="quetions-answer-block__coutainer">
      <div
        class="quetions-answer-block__course"
        v-for="item in quetions"
        :key="item.title"
      >
        <div class="quetions-answer-block__heading html__subtitle_white_normal">
          {{ item.title }}
        </div>
        <div class="quetions-answer-block__text html__main-text_white">
          {{ item.text }}
        </div>
        <div class="quetions-answer-block__horizontal-separation"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "quetions-answer-block",
  //   props: ['block1', 'block2'],
  data() {
    return {
      quetions: [
        {
          title: "Я никогда не работал со звуком. У меня получится?",
          text: "Конечно! Курс подходит для людей, не имеющих навыков дизайна. Наши методики позволят вам научиться всему с нуля. Вовремя выполняйте практические задания, и вы достигнете результатов даже без специальных базовых знаний. Во всём помогут опытные кураторы, которые будут сопровождать вас на протяжении всего курса.",
        },
        {
          title:
            "Какой график обучения? Получится ли совмещать его с учебой в  школой?",
          text: "Вы можете работать с материалами курса в удобное время, двигаясь по программе в подходящем вам темпе. Более того, все уроки будут доступны и по окончании курса, навсегда, так что вы сможете освежить свои знания в любой момент. Обучение организовано таким образом, чтобы вы могли совмещать его с работой, учёбой и личной жизнью.",
        },
        {
          title: "Сколько часов в неделю мне нужно будет уделять учёбе?",
          text: "Всё зависит только от вас. В среднем наши студенты занимаются от трёх до пяти часов в неделю.",
        },
        {
          title: "Я смогу общаться с преподавателями?",
          text: "У вас будет куратор в Telegram-чате, а преподаватель лично прокомментирует домашние задания и даст полезные советы. Так вы сможете перенять опыт, профессиональные знания и лайфхаки от ведущих специалистов.",
        },
      ],
    };
  },
};
</script>

<style>
.quetions-answer-block {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
}

.quetions-answer-block__text {
  text-align: justify;
  padding: 0 120px;
}

.quetions-answer-block__heading {
  text-align: left;
  padding: 0 105px;
  margin: 30px 0;
}

.quetions-answer-block__title {
  margin-top: 31px;
}

.quetions-answer-block__coutainer {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1100px;
  margin: 61px 0 81px;
  background: #0256d9;
  border-radius: 81px;
}

.quetions-answer-block__course {
  display: flex;
  flex-direction: column;
}

.quetions-answer-block__delimiter {
  position: absolute;
  background-color: #5200ff;
  left: 50%;
  bottom: 0;
  width: 3px;
  height: 95%;
}

.quetions-answer-block__horizontal-separation {
  background-color: #5200ff;
  margin-top: 30px;
  width: 84%;
  left: 8%;
  height: 1px;
}

.quetions-answer-block__img {
  position: absolute;
  width: 100%;
  bottom: 0;
}

@media screen and (max-width: 1280px) {
  .quetions-answer-block__title {
    margin-top: 41px;
  }
  .quetions-answer-block__coutainer {
    width: 950px;
    margin: 54px 0 98px;
  }
}

@media screen and (max-width: 992px) {
  .quetions-answer-block__title {
    margin-top: 12px;
  }
  .quetions-answer-block__coutainer {
    width: 720px;
    margin: 49px 0 111px;
  }
}

@media screen and (max-width: 750px) {
  .quetions-answer-block__title {
    margin-top: 26px;
  }
  .quetions-answer-block__coutainer {
    width: 459px;
    margin: 37px 0 62px;
  }

  .quetions-answer-block__text {
    padding: 0 60px;
  }

  .quetions-answer-block__heading {
    padding: 0 50px;
    margin: 30px 0;
  }

  .quetions-answer-block__horizontal-separation1 {
    display: none;
  }

  .quetions-answer-block__delimiter {
    display: none;
  }

  .quetions-answer-block__horizontal-separation {
    top: 81px;
  }
}

@media screen and (max-width: 500px) {
  .quetions-answer-block__title {
    margin-top: 13px;
  }
  .quetions-answer-block__coutainer {
    width: 307px;
    margin: 25px 0 26px;
  }
}
</style>
