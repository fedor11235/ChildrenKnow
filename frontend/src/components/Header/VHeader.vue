<template lang="pug">
.header-block.margin-html
  //- img.logo(src='static/logo.png')
  .header-block__logo-text ChildrenKnow
  .header-block__menu
    a.header-block__navlink(href="http://localhost:8080") Блок
    a.header-block__navlink(href="/#courses") Курсы
    a.header-block__navlink(href="/#pros") Плюсы курсов
    a.header-block__navlink(href="/#how") Как проходят наши курсы
    a.header-block__navlink(href="/#recording") Запись
  hr.header-block__delimiter
</template>

<style>
.header-block {
  position: relative;
  height: 70px;
}

.header-block__logo-text {
  position: absolute;
  left: 0;
  top: 20px;

  font: normal 28px Roboto;
  color: #000000;
}

.header-block__menu {
  position: absolute;
  right: 0;
  top: 20px;
}

.header-block__navlink {
  display: inline-block;
  margin-left: 22px;

  font: normal 28px Roboto;
  text-decoration: none;
  color: #000000;
}

.header-block__navlink:hover {
  color: #5200ff;
}

.header-block__delimiter {
  position: absolute;
  background-color: #F1F1F1;
  width: 100%;
  bottom: 0;
}
</style>