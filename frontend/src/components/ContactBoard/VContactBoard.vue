<template lang="pug">
.contact-board
  .contact-board__coutainer
    .contact-board_centered-vertically
      .contact-board_centered-horizontally
        .contact-board__info
          .html__title_black Запишись
          .html__title_blue На пробный урок
          .html__main-text_black.contact-board__text Наши консультанты <br>
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
  width: 1198px;
  height: 855px;
  background-color: #5200ff;
  margin: 86px auto;
  position: relative;
}

.contact-board__coutainer {
  display: table;
  position: absolute;
  width: 1097px;
  height: 737px;
  background-color: #ffffff;
  margin: 55px;
}

.contact-board_centered-vertically {
  display: table-cell;
  vertical-align: middle;
}

.contact-board__text {
  margin-top:48px;
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
  font: normal 24px Roboto;
  color: #a37af9;
  padding-left: 27px;
}

.contact-board__input::placeholder {
  font: normal 24px Roboto;
  color: #a37af9;
}



.contact-board__input:focus {
  font: normal 24px Roboto;
  color: #a37af9;
  padding-left: 27px;
}

.contact-board__input:focus::-webkit-input-placeholder {
  color: transparent
}

.contact-board__input:focus::-moz-placeholder {
  color: transparent
}

.contact-board__input:focus:-moz-placeholder {
  color: transparent
}

.contact-board__input:focus:-ms-input-placeholder {
  color: transparent
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

@media screen and (max-width: 1280px) {
  .contact-board__input {
  font-size: 18px;
}

.contact-board__input::placeholder {
  font-size: 18px;
}
.contact-board__input:focus {
  font-size: 18px;
  padding-left: 27px;
}
}
</style>