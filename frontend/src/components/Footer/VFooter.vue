<template lang="pug">
    .footer-block
        .continer-footer
            ul.info-shcool О школе
                li.infa Отзывы
                li.infa Вопросы и ответы
                li.infa Контактные данные

            ul.info-contact Контакты
                li.infa f.avdeev@list.ru
                li.infa +7 9027369322
                li.infa WatsApp
                li.infa Viber
                li.infa Telegram




        img.pan1(src='static/Vector3.png')
        img.pan2(src='static/Vector4.png')

</template>



<style>
    .footer-block {
        position: relative;
        display: flex;
        background-color: #4800DF;
        height: 500px;
        justify-content: center;
    }

    .continer-footer {
        display: flex;
        margin-top:50px;
        z-index: 1;
    }

    .pan1 {
        position:absolute;
        top:-1px;
        left: 0;
        width: 495px;

    }

    .pan2 {
        position:absolute;
        bottom:0;
        right: 0;
        width: 396px;
    }

    .info-shcool {
        margin: 20px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 35px;

        color: #FFFFFF;

    }

    .info-contact {
        margin: 20px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 35px;

        color: #FFFFFF;

    }

    .infa {
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
        list-style-type: none;
        margin: 20px 0;
        cursor:pointer;

    }


</style>