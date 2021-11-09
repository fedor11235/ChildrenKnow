<template lang="pug">
.quetions-block
  #quetions-block__title.quetions-block__title.html__title_white Кому подойдёт этот курс
  .quetions-block__coutainer
    .quetions-block__course(v-for='item in quetions' :key='item.title')
      .quetions-block__heading.html__subtitle_white_normal {{item.title}}
      .quetions-block__text.html__main-text_white {{item.text}}
      .quetions-block__horizontal-separation

</template>

<script>
export default {
  name: "quetions-block",
  //   props: ['block1', 'block2'],
  data() {
    return {
        quetions:[{title: 'Я никогда не работал со звуком. У меня получится?', text: 'Конечно! Курс подходит для людей, не имеющих навыков дизайна. Наши методики позволят вам научиться всему с нуля. Вовремя выполняйте практические задания, и вы достигнете результатов даже без специальных базовых знаний. Во всём помогут опытные кураторы, которые будут сопровождать вас на протяжении всего курса.'},
        {title: 'Какой график обучения? Получится ли совмещать его с учебой в  школой?', text: 'Вы можете работать с материалами курса в удобное время, двигаясь по программе в подходящем вам темпе. Более того, все уроки будут доступны и по окончании курса, навсегда, так что вы сможете освежить свои знания в любой момент. Обучение организовано таким образом, чтобы вы могли совмещать его с работой, учёбой и личной жизнью.'},
        {title: 'Сколько часов в неделю мне нужно будет уделять учёбе?', text: 'Всё зависит только от вас. В среднем наши студенты занимаются от трёх до пяти часов в неделю.'},
        {title: 'Я смогу общаться с преподавателями?', text: 'У вас будет куратор в Telegram-чате, а преподаватель лично прокомментирует домашние задания и даст полезные советы. Так вы сможете перенять опыт, профессиональные знания и лайфхаки от ведущих специалистов.'}],
    };
  },
};
</script>

<style lang="sass">
$var1: #5200ff;

.quetions-block 
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	&__text 
		text-align: justify;
		padding: 0 120px;
	
	&__heading 
		text-align: left;
		padding: 0 105px;
		margin: 30px 0;
	
	&__title 
		margin-top: 31px;
	
	&__coutainer 
		position: relative;
		display: flex;
		flex-direction: column;
		width: 1100px;
		margin: 61px 0 81px;
		border: 3px solid $var1;
		box-sizing: border-box;
	
	&__course 
		display: flex;
		flex-direction: column;
	
	&__delimiter 
		position: absolute;
		background-color: $var1;
		left: 50%;
		bottom: 0;
		width: 3px;
		height: 95%;
	
	&__horizontal-separation 
		background-color: $var1;
		margin-top: 30px;
		width: 84%;
		left: 8%;
		height: 1px;
		&1 
			display: none;
		
	
	&__img 
		position: absolute;
		width: 100%;
		bottom: 0;
	
	&__coutainer 
		width: 950px;
		margin: 54px 0 98px;
	
	&__coutainer 
		width: 720px;
		margin: 49px 0 111px;
	
	&__coutainer 
		width: 459px;
		margin: 37px 0 62px;
	
	&__text 
		padding: 0 60px;
	
	&__heading 
		padding: 0 50px;
		margin: 30px 0;
	
	&__delimiter 
		display: none;
	
	&__horizontal-separation 
		top: 81px;
	
	&__coutainer 
		width: 307px;
		margin: 25px 0 26px;
    
@media screen and (max-width: 1280px) 
	margin-top: 41px;

@media screen and (max-width: 992px) 
	margin-top: 12px;

@media screen and (max-width: 750px) 
	margin-top: 26px;

@media screen and (max-width: 500px) 
	margin-top: 13px;

</style>
