<template lang="pug">
    .recording#recording
        .contact-board
            .contact  
                .feedback-table       
                    .feedback
                        .feedback_info
                            .feedback_info-title Запишись
                            .feedback_info-subtitle На пробный урок
                            .feedback_info-info Наши консультанты <br> 
                                                |по обучению перезвонят Вам <br>
                                                |и ответят на все <br>
                                                |интересующие Вас вопросы
                        .feedback_form
                            form
                                input(placeholder='Ваше имя')
                                input(placeholder='Ваш телефон')
                                input.marginbot(placeholder='Ваш email')

                            buttom.feedback_bottom Записаться
            span.contact_info_black Заявка 
                span.contact_info_gray → Звонок менеджера → Пробный урок
        img.vector3(src='static/Vector3.png')
        img.vector4(src='static/Vector4.png')

</template>

<style>
    .recording {
        position: relative;
        height: 950px;
    }

    .vector3 {
        position:absolute;
        left:0;
        top:-83px;
        z-index: -1;
        


    }

    .vector4 {
        position:absolute;
        right:0;
        bottom: 0;
        z-index: -1;
        
        
    }

    .contact-board {
        width: 1200px;
        height: 850px;
        background-color: #5200FF;
        margin: 80px auto;
        position: relative;
    }

    .contact {
        display: table;
        position: absolute;
        width: 1116px;
        height: 750px;
        background-color: #ffffff;
        margin: 40px;

    }

    .feedback-table {
        display: table-cell;
        vertical-align: middle;

    }

    .feedback {
        display: flex;
    }

    .feedback_info-title {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 75px;

        color: #000000;

    }

    .feedback_info-subtitle {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 75px;

        color: #014DD6;

    }
    
    .feedback_info-info {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 35px;

        color: #000000;
        
    }

    .feedback_info{
        
        width: 50%;
        margin: 0 auto;
        margin-left:25px;
        
    }

    .feedback_form{
        
        width: 50%;
        margin: 0 auto;
        margin-left:50px;     
    }

    form {
        display: flex;
        flex-direction: column;
    }

    input {
        background: #F4F4F4;
        border: 1px solid #0034FF;
        box-sizing: border-box;
        border-radius: 30px;
        width: 413px;
        height: 74px;
        margin-bottom:15px;
        caret-color: transparent;
    }

    input::placeholder {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;

        color: #A37AF9;
        padding-left:27px;
    }

    .feedback_bottom {
        width: 263px;
        height: 65px;
        background: #5200FF;
        border-radius: 30px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;

        color: #FFFFFF;
        padding: 20px 66px;

        cursor: pointer;
        margin: 100px;

        -moz-user-select: none;
        -khtml-user-select: none;
        user-select: none;    
  
    }

    .feedback_bottom:active {
        background: #00BEFD;
    }

    .marginbot{
        margin-bottom: 50px;
    }

    .contact_info_black {
        position: absolute;
        bottom: 80px;
        left:80px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;

        color: #000000;
    }

    .contact_info_gray{
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;

        color: #888888
    }
    

</style>