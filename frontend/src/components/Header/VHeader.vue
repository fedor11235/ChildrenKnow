<template lang="pug">
.header-block.margin-html
  //- img.logo(src='static/logo.png')
  .header-block__logo-text.html__text_black ChildrenKnow
  .header-block__menu
    a.header-block__navlink.html__text_black(href="http://localhost:8080") Блок
    a.header-block__navlink.html__text_black(href="/#list-of-courses__title") Курсы
    a.header-block__navlink.html__text_black(href="/#block-about-courses") Плюсы курсов
    a.header-block__navlink.html__text_black(href="/#block-how-lessons") Как проходят наши курсы
    a.header-block__navlink.html__text_black(href="/#block-recording") Запись
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
}

.header-block__menu {
  position: absolute;
  right: 0;
  top: 20px;
}

.header-block__navlink {
  display: inline-block;
  margin-left: 22px;
  text-decoration: none;
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