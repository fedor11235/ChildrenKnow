<template lang="pug">
.course
    img.course-img(href='static/rectangle.png')
    .info 
        .title-info Дизайн
        .text-info  научишься анимировать созданные тобой изображения <br>
                    |научишься работать в графических редакторах 


    
</template>

<script>
export default {
//   props: {
//       title,
//       text
//   }
}
</script>


<style>
.course {
    display: flex;
    width: 586px;
    height: 154px;
    padding: 5px;
    background: #C4C4C4;
    border-radius: 34px;
    align-items: center;
    margin: 10px auto;

}

.course-img {
    width: 166px;
    height: 127px;
    background-color: black;
    margin-left:30px;
}

.info {
    top:0;
    text-align: center;
}

.title-info {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
}

.text-info {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: black;
}


</style>
