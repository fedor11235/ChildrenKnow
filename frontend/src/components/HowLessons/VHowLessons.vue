<template lang="pug">
.how-lessons#how
    .how-lessons-title Как проходят уроки
    .how-lessons-couteiner 
        .how-lessons-border
            .how-lessons-border-text1.krasivo Вспоминаем тему прошлого урока и проверяем<br> домашнее задание.
            img(src='static/arrow.png')
            .how-lessons-border-text2.krasivo Изучаем новую тему и решаем новые задачи<br> вместе с преподователем
            img(src='static/arrow.png')

            .how-lessons-border-text3.krasivo Самостоятельное решение более сложных<br> задачи и отых ввиде игровых заданий
            img(src='static/arrow.png')

            .how-lessons-border-text4.krasivo Преподаватель подводит итоги, повторяют<br> вместе с учениками пройденый материал и<br> готовятся к следующему уроку



</template>

<style>


.krasivo {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    text-align: center;

    color: #FFFFFF;
    margin:30px;
}

.how-lessons {
    height: 1023px;
    background: linear-gradient(63.43deg, #004AD5 0%, #00BEFD 100.93%);
}

.how-lessons-title {
    text-align: center;
    padding:60px 120px 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 55px;
    line-height: 64px;
    color: #FFFFFF;
}

.how-lessons-couteiner {
    display: flex;
    justify-content: space-around;
    margin-top: 52px;
}

.how-lessons-border {
    display: flex;
    width: 1069px;
    height: 755px;
    border: 3px solid #5200FF;
    flex-direction: column;
    align-items: center;
}
</style>