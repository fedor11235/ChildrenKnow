<template lang="pug">
.header-block
  //- img.logo(src='static/logo.png')
  
  .header-block__container.margin-html
    .header-block__logo
      img(src="./header.png")
    .header-block__menu
      a.header-block__navlink.html__subtext_black(href="http://localhost:8080") Блог
      a.header-block__navlink.html__subtext_black(href="/#list-of-courses__title") Курсы
      a.header-block__navlink.html__subtext_black(href="/#block-about-courses") Плюсы курсов
      a.header-block__navlink.html__subtext_black(href="/#block-how-lessons") Как проходят наши курсы
      a.header-block__navlink.html__subtext_black(href="/#block-recording") Запись
  hr.header-block__delimiter
</template>

<style>
.header-block {
  position: relative;
}
.header-block__container {
  position: relative;
  height: 72px;
}

.header-block__logo {
  display: flex;
  height: 66px;
  align-items: center;
  position: absolute;
  left: 0;
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
  margin: 0;
  height: 1px;
  border: none;
}
</style>