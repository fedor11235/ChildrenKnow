<template lang="pug">
.contact-board
  .contact-board__coutainer
    .contact-board_centered-vertically
      .contact-board_centered-horizontally
        .contact-board__info
          .html__title_black Запишись
          .html__title_blue На пробный урок
          .html__main-text_black Наши консультанты <br>
            | по обучению перезвонят Вам <br>
            | и ответят на все <br>
            | интересующие Вас вопросы
        .contact-board__form
          form
          input.contact-board__input(placeholder="Ваше имя")
          input.contact-board__input(placeholder="Ваш телефон")
          input.contact-board__input.contact-board_margin-bottom(
            placeholder="Ваш email"
          )

          button.contact-board__button.html__text_white Записаться
  span.contact-board__under-the-text.html__subtext_black Заявка
    span.contact-board_color-grey.html__subtext_grey → Звонок менеджера → Пробный урок
</template>

<style>
.contact-board {
  width: 1200px;
  height: 850px;
  background-color: #5200ff;
  margin: 80px auto;
  position: relative;
}

.contact-board__coutainer {
  display: table;
  position: absolute;
  width: 1116px;
  height: 750px;
  background-color: #ffffff;
  margin: 40px;
}

.contact-board_centered-vertically {
  display: table-cell;
  vertical-align: middle;
}

.contact-board_centered-horizontally {
  display: flex;
}

.contact-board__info {
  width: 50%;
  margin: 0 auto;
  margin-left: 25px;
}

.contact-board__form {
  display: flex;
  width: 50%;
  margin: 0 auto;
  margin-left: 50px;
  justify-content: center;

  flex-wrap: wrap;
}

.contact-board__input {
  background: #f4f4f4;
  border: 1px solid #0034ff;
  box-sizing: border-box;
  border-radius: 30px;
  width: 413px;
  height: 74px;
  margin-bottom: 15px;
  caret-color: transparent;
}

.contact-board__input::placeholder {
  font: normal 24px Roboto;
  color: #a37af9;
  padding-left: 27px;
}

.contact-board__button {
  width: 263px;
  height: 65px;
  background: #5200ff;
  border-radius: 30px;
  border: none;

  cursor: pointer;
}

.contact-board__button:active {
  background: #00befd;
}

.contact-board__under-the-text {
  position: absolute;
  bottom: 80px;
  left: 80px;
}


.contact-board_margin-bottom {
  margin-bottom: 36px;
}
</style>