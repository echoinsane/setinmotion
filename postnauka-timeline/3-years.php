<?php
require_once 'Mobile_Detect.php';
$detect = new Mobile_Detect;
?>
<!DOCTYPE HTML>
<html>
<head>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,700&subset=cyrillic,latin' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Roboto:400,500,700&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
	<link href="/wp-content/themes/postnauka/specials/css/css.css?version=4.23" rel="stylesheet" media="all">
	<link href="/wp-content/themes/postnauka/specials/css/odometer-theme-default.css?version=1.1" rel="stylesheet" media="all">
	<link href="/wp-content/themes/postnauka/specials/css/css-mobile.css?version=2.65" rel="stylesheet" media="all">

	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="icon" href="/favicon.ico" type="image/x-icon"> 
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"> 
	<link rel="apple-touch-icon" href="http://assets0.postnauka.ru/style/postnauka-200x200.jpg" />

	<meta property="fb:app_id" content="266201940081029"/>
	<meta property="og:site_name" content="<?php bloginfo('name'); ?>" />
	<meta property="fb:admins" content="798412003" />
	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@postnauka">

	<meta property="og:type" content="website" />
	<meta property="og:url" content="<?php echo the_permalink(); ?>" />
	<meta property="og:title" content="<?php the_title(); ?> - <?php bloginfo('name'); ?>"/>
	<meta property="og:description" content="<?php $psubt=get_post_meta($post->ID,'psubt',true); if($psubt){ ?><?php echo $psubt; ?><?php } else { ?><?php the_title(); ?> - <?php bloginfo('description'); ?><?php } ?>" />
	<meta property="og:image" content="<?php if(has_post_thumbnail()) { ?><?php $src=wp_get_attachment_image_src(get_post_thumbnail_id($post->ID),'',false, ''); echo $src[0]; ?><?php } else { ?>http://assets0.postnauka.ru/style/postnauka-200x200.jpg<?php } ?>" />
	<link rel="image_src" href="<?php if(has_post_thumbnail()) { ?><?php $src=wp_get_attachment_image_src(get_post_thumbnail_id($post->ID),'',false, ''); echo $src[0]; ?><?php } else { ?>http://assets0.postnauka.ru/style/postnauka-200x200.jpg<?php } ?>" />
	<title><?php the_title(); ?> - <?php bloginfo('name'); ?></title>
	<meta name="description" content="<?php $psubt=get_post_meta($post->ID,'psubt',true); if($psubt){ ?><?php echo $psubt; ?><?php } else { ?><?php the_title(); ?> - <?php bloginfo('description'); ?><?php } ?>" />
	<meta name="keywords" content="<?php $psubt=get_post_meta($post->ID,'psubt',true); if($psubt){ ?><?php echo $psubt; ?><?php } else { ?><?php the_title(); ?> - <?php bloginfo('description'); ?><?php } ?>">
	<meta itemprop="url" content="<?php the_permalink(); ?>">
	<meta itemprop="name" content="<?php the_title(); ?> - <?php bloginfo('name'); ?>">
	<meta itemprop="description" content="<?php the_title(); ?> - <?php echo get_the_excerpt(); ?>">
	<meta itemprop="image" content="<?php if(has_post_thumbnail()) { ?><?php $src=wp_get_attachment_image_src(get_post_thumbnail_id($post->ID),'',false, ''); echo $src[0]; ?><?php } else { ?>http://assets0.postnauka.ru/style/postnauka-200x200.jpg<?php } ?>">
	<meta name="viewport" content="width=device-width">

		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/ScrollToPlugin.min.js"></script>
		<script src="/wp-content/themes/postnauka/specials/js/jquery.canvasjs.min.js"></script>
		<script src="/wp-content/themes/postnauka/specials/js/ScrollMagic.js"></script>
		<script src="/wp-content/themes/postnauka/specials/js/animation.gsap.js"></script>
	    <script src="/wp-content/themes/postnauka/specials/js/debug.addIndicators.js"></script><!-- Dev only -->
		<script src="/wp-content/themes/postnauka/specials/js/odometer.min.js"></script>
		<script src="/wp-content/themes/postnauka/specials/js/js.js?version=57"></script>
</head>
<body>

<?php
// if ( !$detect->isMobile() AND !$detect->isTablet() ) {
?>

<?php if(have_posts()): while(have_posts()): the_post(); ?>

	<div class="one-wrapper">
		<div class="video">
			<video class="reel" preload="auto" autoplay="" loop="" poster="/wp-content/themes/postnauka/specials/img/poster.jpg">
	            <source src="/wp-content/themes/postnauka/specials/video/bg.mp4" type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;">
	            <source src="/wp-content/themes/postnauka/specials/video/bg.ogv" type="video/ogg; codecs=&quot;theora, vorbis&quot;">
	            <source src="/wp-content/themes/postnauka/specials/video/bg.webm" type="video/webm; codecs=&quot;vp8, vorbis&quot;">
	        </video>
		</div>
		<div class="desc">ПостНаука в цифрах</div>
		<div class="big-number">3</div>
		<div class="numbers-wrapper">
			<span class="equality"> =</span> <span id="odometer1" class="odometer">1095</span> дней
		</div>
		<a href="#eleven-timeline" class="mouse"><img onclick="scrollDownDown()" src="/wp-content/themes/postnauka/specials/img/mouse.png"/></a>
	</div>
	<div id="eleven-timeline" class="eleven-timeline-wrapper">
		<div class="timeline">
			<div id="animation-one" class="left animate">
				<div class="block first">
					<div class="text">
						ЗАРЕГИСТРИРОВАНО<br>ДОМЕННОЕ ИМЯ<br>
						<a href="http://postnauka.ru/">postnauka.ru</a>
					</div>
					<img src="/wp-content/themes/postnauka/specials/img/left-block-one.png">
					<div class="date">23<br>сен</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>
			<div id="animation-two" class="right last animate">
				<div class="block">
					<div class="text">
						СОЗДАН YOUTUBE<br>КАНАЛ ПОСТНАУКИ<br>
						<a href="http://www.youtube.com/user/postnauka">youtube.com/user/postnauka</a>
					</div>
					<img src="/wp-content/themes/postnauka/specials/img/right-block-one.png">
					<div class="date">1<br>дек</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>
			<div id="scene-one" class="main-year">2011</div>
		</div>
		
		
	</div>
	<div class="youtube-wrapper">
		<div class="youtube">
			<img src="/wp-content/themes/postnauka/specials/img/youtube-arrow.png" alt="" class="arrow"/>
			<div class="view-one">
				<span class="desc">Просмотров на Youtube</span>
				<span id="odometer2" class="odometer"></span>
			</div>
			<div class="view-two">
				<span class="desc">Просмотров в минутах</span>
				<span id="odometer3" class="odometer"></span><span class="min"> минут</span>
			</div>
			<div class="view-three">
				<span class="desc">...или</span>
				<span id="odometer4" class="odometer"></span><span class="year"> лет</span>
			</div>
			<div class="clear"></div>
		</div>
	</div>

	<div class="twelve-timeline-wrapper">
		<div class="timeline">
			<div id="animation-three" class="left animate">
				<div class="block first">
					<div class="text-wrapper">
						<img src="/wp-content/themes/postnauka/specials/img/twelve-first-left.png" alt="" class="first">
						<img src="/wp-content/themes/postnauka/specials/img/twelve-second-left.png" alt="" class="second">
						<img src="/wp-content/themes/postnauka/specials/img/twelve-arrow-left.png" alt="" class="arrow">

						ПостНаука въезжает <br>в редакцию на Арбате
					</div>
					<div class="date">15<br>янв</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>
			<div id="animation-four" class="right animate">
				<div class="block">
					<div class="text-wrapper">
						<img src="/wp-content/themes/postnauka/specials/img/twelve-first-right.png" alt="" class="first">
						<img src="/wp-content/themes/postnauka/specials/img/twelve-arrow-right.png" alt="" class="arrow">
						Сайт официально открывается для посетителей. Главный редактор Ивар Максутов сообщает об этом в facebook'e
					</div>
					<div class="date">24<br>мая</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>
			<div id="animation-five" class="left animate">
				<div class="block">
					<div class="video-wrapper">
						<img src="/wp-content/themes/postnauka/specials/img/twelve-arrow-left.png" alt="" class="arrow">
						 Первая записанная лекция
						<div class="video">
							<iframe width="453" height="255" src="https://www.youtube.com/embed/-wCwLWYPoP8?showinfo=0" frameborder="0" frameborder="0" allowfullscreen></iframe>
						</div>
						<div class="full-video">
							<div class="left-text">
								<span id="odometer5" class="odometer"></span><br>
								всего записано лекций
							</div>
							<div class="right-text">
								Публикация лекции Виктора Вахштайна —<br>первого ученого, записанного для ПостНауки
							</div>
							<div class="clear"></div>
						</div>
					</div>
					<div class="date video-date">1<br>июн</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>
			<div id="animation-six" class="right animate">
				<div class="block">
					<div class="text-wrapper-two">
						<img src="/wp-content/themes/postnauka/specials/img/twelve-second-right.png" alt="" class="first">
						<img src="/wp-content/themes/postnauka/specials/img/twelve-arrow-right.png" alt="" class="arrow">
						Выходит первая вкладка ПостНауки 


						
					</div>
					<div class="date">31<br>авг</div>
					<div class="clear"></div>
					<div class="app">
							<div class="left-text">
								<span id="odometer6" class="odometer"></span><br>
								выпусков
							</div>
							<div class="right-text">
								Раз в две недели по пятницам в «Новой газете» публикуется специальное приложение с избранными материалами ПостНауки
							</div>
							<div class="clear"></div>
					</div>
				</div>
				<div class="clear"></div>
			</div>
			<div id="animation-seven" class="left animate">
				<div class="block first">
					<div class="simple-text">
						ИД «ПостНаука» зарегистрирован в Едином<br> государственном реестре юридических лиц
					</div>
					<div class="date">8<br>ноя</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>
			<div id="animation-eight" class="left animate">
				<div class="block first">
					<div class="text">
						Выходит первый выпуск <br>TV формата «Перспективы»<br>
						<a href="http://postnauka.ru/projects/perspectives">Посмотреть проект</a>
					</div>
					<img src="/wp-content/themes/postnauka/specials/img/left-block-two.png">
					<div class="date">15<br>ноя</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>
			<div id="animation-nine" class="right last animate">
				<div class="block">
					<div class="text">
						<img src="/wp-content/themes/postnauka/specials/img/right-block-two.gif">
						Выходит первый спецпроект. <br>Партнером выступила ОАО РВК

						<div class="small-txt">
							На протяжении всех трех лет Российская Венчурная Компания будет поддерживать ПостНауку в различных проектах, от освещения последних инновационных исследований <br>до проведения образовательных лекций для журналистов
						</div>
					</div>
					<div class="date">10<br>дек</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>
			<div id="scene-two" class="main-year">2012</div>
		</div>
		
		
		<a href="#statistic-wrapper" class="mouse"><img src="/wp-content/themes/postnauka/specials/img/mouse.png"/></a>
	</div>

	<div id="statistic-wrapper" class="statistic-one-wrapper">
		<div class="statistic-one">
			<img src="/wp-content/themes/postnauka/specials/img/statistic-mobile-arrow-left.png" alt="" class="mobile-arrow-left">
			<img src="/wp-content/themes/postnauka/specials/img/statistic-mobile-arrow-right.png" alt="" class="mobile-arrow-right">
			<div class="donuts-wrapper">
				
				<div data="1" class="second-pie-wrapper">
					<div class="text">
						Оставлено<br>комментариев
					</div>
					<div class="donut">
						<div class="wrapper" id="second-pie"></div>
						<div class="main-number">
							24997
						</div>
						<span class="one">12 571 на youtube</span>
						<span class="two">12 426 на сайте</span>
					</div>
					
				</div>

				<div data="2" class="first-pie-wrapper">
					<div class="text">
						Всего материалов<br>на сайте
					</div>
					<div class="donut">
						<div class="wrapper" id="first-pie"></div>
						<div class="main-number">
							2690
						</div>
						<span class="two">148<br>рекомендаций<br>книг</span>
						<span class="four">177 <br>интервью</span>
						<span class="five">538 faq</span>
						<span class="six">27 курсов</span>
						<span class="seven">227 статей</span>
						<span class="eight">1530<br> лекций</span>
					</div>
					
				</div>
				<div data="3" class="third-pie-wrapper">
					<div class="text">
						Подписчики<br>в соцсетях
					</div>
					<div class="donut">
						<div class="wrapper" id="third-pie"></div>
						<div class="main-number">
							233 859
						</div>
						<span class="one">Вконтакте<br>176632 </span>
						<span class="two">Фейсбук<br>48156</span>
						<span class="three">Твиттер<br>9071 </span>
					</div>
					
				</div>
				<div class="clear"></div>
			</div>
			<h3>Материалы по разделам<br>на сайте</h3>
			<span class="name one">Астрономия<br><br><br><span class="number">155</span></span>
			<span class="name two">Биология<br><br><br><br><span class="number">502</span></span>
			<span class="name three">История<br><br><br><br><span class="number">422</span></span>
			<span class="name four">Культура<br><br><br><span class="number">343</span></span>
			<span class="name five">Математика<br><br><span class="number">120</span></span>
			<span class="name six">Медицина<br><br><br><span class="number">190</span></span>
			<span class="name seven">Право<br><br><span class="number">71</span></span>
			<span class="name eight">Психология<br><br><span class="number">105</span></span>
			<span class="name nine">Социология<br><br><br><span class="number">218</span></span>
			<span class="name ten">Технологии<br><br><span class="number">209</span></span>
			<span class="name eleven">Физика<br><br><br><span class="number">306</span></span>
			<span class="name twelve">Философия<br><br><span class="number">190</span></span>
			<span class="name thirteen">Химия<br><br><span class="number">105</span></span>
			<span class="name fourteen">Экономика<br><br><br><span class="number">171</span></span>
			<span class="name fifteen">Язык<br><br><br><span class="number">200</span></span>
		</div>
		<img src="/wp-content/themes/postnauka/specials/img/statistic-one-mobile-v1.png" alt="" class="statistic-mob">
	</div>
	<div class="statistic-one-slider">
		<img src="/wp-content/themes/postnauka/specials/img/statistic-mobile-arrow-left-v2.png" alt="" class="mobile-arrow-left unactive">
		<img src="/wp-content/themes/postnauka/specials/img/statistic-mobile-arrow-right-v2.png" alt="" class="mobile-arrow-right">
	</div>

	<div class="thirteen-timeline-wrapper">
		<div class="timeline">
			<div id="animation-ten" class="right animate">
				<div class="block first">
					<div class="text">
						<img src="/wp-content/themes/postnauka/specials/img/right-block-three.gif">
						постнаука запускает собственную<br>передачу на радио рсн<br>
						<span class="small-txt">
							Позднее в дополнение к ней откроются<br> еще две передачи, создаваемые<br> редакцией проекта 
						</span>
					</div>
					<div class="date">15<br>фев</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>
			<div id="animation-eleven" class="left animate">
				<div class="block">
					<div class="text-wrapper">
						<img src="/wp-content/themes/postnauka/specials/img/twelve-three-left.png" alt="" class="first">
						<img src="/wp-content/themes/postnauka/specials/img/twelve-four-left.png" alt="" class="second">
						<img src="/wp-content/themes/postnauka/specials/img/twelve-arrow-left.png" alt="" class="arrow">

						Сотрудничество с газетой<br> «Московские новости» 
					</div>
					<div class="date">7<br>мар</div>
					<div class="clear"></div>
					<div class="full-video">
							<div class="left-text">
								<br><br>наши ученые<br>порекомендовали
								<span id="odometer7" class="odometer"></span><br>
								Научных книг
							</div>
							<div class="right-text">
								Каждый четверг в газете «Московские новости» публикуется подборка из 5 книг, которые рекомендуют ученые ПостНауки по темам своих исследований.
							</div>
							<div class="clear"></div>
						</div>
				</div>
				<div class="clear"></div>
			</div>
			<div id="animation-twelve" class="right animate">
				<div class="block">
					<div class="text-wrapper">
						<img src="/wp-content/themes/postnauka/specials/img/thirteen-second-right.png" alt="" class="first">
						<img src="/wp-content/themes/postnauka/specials/img/twelve-arrow-right.png" alt="" class="arrow">
						ПостНаука и Фонд Дмитрия <br>Зимина «Династия» вместе <br>запускают серию публичных <br>лекций «Диалоги»

						
					</div>
					<div class="date">21<br>апр</div>
					<div class="clear"></div>
					<div class="app">
							<div class="left-text">
								<span id="odometer8" class="odometer"></span><br>
								лекций<br>проведено
							</div>
							<div class="right-text">
								Каждые две недели к КЦ "ЗИЛ" ПостНаука проводит лекции, в рамках которых два эксперта освещают различные аспекты одной темы, дискутируя и дополняя друг друга.
							</div>
							<div class="clear"></div>
					</div>
				</div>
				<div class="clear"></div>
			</div>

			<div id="animation-thirteen" class="left animate">
				<div class="block">
					<div class="text-wrapper-three">
						<img src="/wp-content/themes/postnauka/specials/img/thirteen-six-left.png" alt="" class="first">
						<img src="/wp-content/themes/postnauka/specials/img/thirteen-five-left.png" alt="" class="second">
						<img src="/wp-content/themes/postnauka/specials/img/twelve-arrow-left.png" alt="" class="arrow">

						Каждую неделю ученые<br>  отвечают на вопросы для<br> аудитории Look At Me

					</div>
					<div class="date">18<br>июл</div>
					<div class="clear"></div>
					<div class="full-video-two">
							<div class="left-text">
								<br><br>
								<span id="odometer9" class="odometer"></span>
								
							</div>
							<div class="r">
								ответа<br>на сложные<br>вопросы
							</div>
							<div class="clear"></div>
							<div class="right-text">
								Интересные, иногда немного наивные, но совершенно непростые вопросы получили ответы с помощью ученых ПостНауки
							</div>
							

						</div>
				</div>
				<div class="clear"></div>
			</div>

			<div id="animation-fourteen" class="right animate">
				<div class="block">
					<div class="big-img">
						ПостНаука выпускает первый курс <br>«Антропогенез»<br><br>
						<img src="/wp-content/themes/postnauka/specials/img/twelve-arrow-right.png" alt="" class="arrow">
						<img src="/wp-content/themes/postnauka/specials/img/thirteen-new-right.png" alt="">
						<span class="small-txt">
							В дальнейшем количество курсов увеличивается,<br> они выходят каждую среду
						</span>
					</div>
					<div class="date">13<br>сен</div>
					<div class="clear"></div>
					
				</div>
				<div class="clear"></div>
			</div>

			<div id="animation-fifteen" class="left animate">
				<div class="block">
					<div class="text">
						Новая передача «SCIENCEHUB»<br>
						<span class="small-txt">
							Видеорепортажи из лабораторий ученых,<br> которые рассказывают о перспективных <br>исследовательских направлениях

						</span>
						<a href="http://postnauka.ru/projects/sciencehub">Посмотреть проект</a>
					</div>
					<div class="date">19<br>окт</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>

			<div id="animation-sixteen" style="padding-bottom:100px;" class="left animate">
				<div class="block">
					<div class="text-wrapper-three">
						<img src="/wp-content/themes/postnauka/specials/img/thirteen-seven-left.png" alt="" class="first">
						<img src="/wp-content/themes/postnauka/specials/img/thirteen-eight-left.png" alt="" class="second">
						<img src="/wp-content/themes/postnauka/specials/img/twelve-arrow-left.png" alt="" class="arrow">

						Запуск совместного проекта<br>со Сколковским институтом <br>
						науки и технологий

					</div>
					<div class="date">28<br>окт</div>
					<div class="clear"></div>
					<div class="full-video">
							<div class="left-text">
								<br><br>
								<span id="odometer10" class="odometer"></span><br>
								опубликованных<br>материалов
							</div>
							<div class="right-text">
								Ученые из ведущих университетов мира рассказывают о последних инновационных разработках.
							</div>
							<div class="clear"></div>
						</div>
				</div>
				<div class="clear"></div>
			</div>

			<div id="animation-seventeen" style="margin-bottom:100px;" class="right animate">
				<div class="block">
					<div class="text-wrapper-three">
						<img src="/wp-content/themes/postnauka/specials/img/thirteen-three-right.png" alt="" class="first">
						<img src="/wp-content/themes/postnauka/specials/img/thirteen-four-right.png" alt="" class="second">
						<img src="/wp-content/themes/postnauka/specials/img/twelve-arrow-right.png" alt="" class="arrow">
						Выход в глобальный <br>интернет и запуск<br> англоязычного проекта<br> Serious Science



						
					</div>
					<div class="date">9<br>дек</div>
					<div class="clear"></div>
					<div class="app2">
							<div class="left-text">
								<span id="odometer11" class="odometer"></span><br>
								публикуемых<br>авторов
							</div>
							<div class="right-text">
								<span id="odometer12" class="odometer"></span><br>
								нобелевских<br>лауреата
							</div>
							<div class="clear"></div>
					</div>
				</div>
				<div class="clear"></div>
			</div>


			<div id="animation-eighteen" class="left last animate">
				<div class="block">
					<div class="text">
						Пресс-лекции на актуальные темы <br>в редакциях ведущих СМИ при поддержке РВК<br>
						<a href="http://postnauka.ru/projects/press-lectures">Посмотреть проект</a>
					</div>
					<div class="date">17<br>дек</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>
			<div id="scene-three" class="main-year">2013</div>
		</div>

		<a href="#video-slider" class="mouse"><img src="/wp-content/themes/postnauka/specials/img/mouse.png"/></a>
	</div>

	<div id="video-slider" class="video-slider-wrapper">
		<div class="video-slider">
			<h3><span>Топ-10 видео 2014 года</span><br>по времени просмотра на youtube</h3>

			<div class="video-block-wrapper">
				<div data="1" class="video-block">
					<iframe width="640" height="360" src="https://www.youtube.com/embed/1FeUcN_WPfE?showinfo=0" frameborder="0" allowfullscreen></iframe>
				</div>
				<div data="2" class="video-block">
					<iframe width="640" height="360" src="https://www.youtube.com/embed/boMRaG81Io8?showinfo=0" frameborder="0" allowfullscreen></iframe>
				</div>
				<div data="3" class="video-block">
					<iframe width="640" height="360" src="https://www.youtube.com/embed/XYHD3JvtanY?showinfo=0" frameborder="0" allowfullscreen></iframe>
				</div>
				<div data="4" class="video-block">
					<iframe width="640" height="360" src="https://www.youtube.com/embed/Kmt5SQ4ymOA?showinfo=0" frameborder="0" allowfullscreen></iframe>
				</div>
				<div data="5" class="video-block">
					<iframe width="640" height="360" src="https://www.youtube.com/embed/Ju5TEjkrxAI" frameborder="0" allowfullscreen></iframe>
				</div>
				<div data="6" class="video-block">
					<iframe width="640" height="360" src="https://www.youtube.com/embed/-f_f461RF6U?showinfo=0" frameborder="0" allowfullscreen></iframe>
				</div>
				<div data="7" class="video-block">
					<iframe width="640" height="360" src="https://www.youtube.com/embed/FcdyYZmxyTc?showinfo=0" frameborder="0" allowfullscreen></iframe>
				</div>
				<div data="8" class="video-block">
					<iframe width="640" height="360" src="https://www.youtube.com/embed/cOdhvQLg44o?showinfo=0" frameborder="0" allowfullscreen></iframe>
				</div>
				<div data="9" class="video-block">
					<iframe width="640" height="360" src="https://www.youtube.com/embed/x9SZM4rDZn8?showinfo=0" frameborder="0" allowfullscreen></iframe>
				</div>
				<div data="10" class="video-block">
					<iframe width="640" height="360" src="https://www.youtube.com/embed/2Ru4ys9NKBw?showinfo=0" frameborder="0" allowfullscreen></iframe>
				</div>

				<img src="/wp-content/themes/postnauka/specials/img/video-slider-arrow-left.png" alt="" class="left-arrow">
				<img src="/wp-content/themes/postnauka/specials/img/video-slider-arrow-right.png" alt="" class="right-arrow">
			</div>

			<ul class="paginator">
				<li data="1">1</li>
				<li data="2">2</li>
				<li data="3">3</li>
				<li data="4">4</li>
				<li data="5">5</li>
				<li data="6">6</li>
				<li data="7">7</li>
				<li data="8">8</li>
				<li data="9">9</li>
				<li data="10">10</li>
			</ul>
				
		</div>
		<div class="current-number">
			1
		</div>
	</div>

	<div class="statistic-two-wrapper">
		<div class="statistic-two">
			<img src="/wp-content/themes/postnauka/specials/img/statistic-mobile-arrow-left.png" alt="" class="mobile-arrow-left">
			<img src="/wp-content/themes/postnauka/specials/img/statistic-mobile-arrow-right.png" alt="" class="mobile-arrow-right">
			<div class="donuts-wrapper">
				<div data="1" class="second-pie-wrapper">
					<div class="text">
						Гендер<br>ученых
					</div>
					<div class="donut">
						<div class="wrapper" id="five-pie"></div>
						
						<span class="one">Женщины 25%</span>
						<span class="two">Мужчины 75%</span>
					</div>
					
				</div>
				<div data="2" class="first-pie-wrapper">
					<div class="text">
						Звания<br>ученых
					</div>
					<div class="donut">
						<div class="wrapper" id="four-pie"></div>
						<span class="three">Кандидаты 31% </span>
						<span class="five">PhD 25%</span>
						<span class="six">Доктора 44%</span>
					</div>
					
				</div>

				<div data="3" class="third-pie-wrapper">
					<div class="text">
						Читатели<br>ПостНауки
					</div>
					<div class="counter-one">
						<span class="name">Уникальных посетителей</span><br>
						<span id="odometer13" class="odometer"></span>
					</div>
					<div class="counter-two">
						<span class="name">Просмотров страниц</span><br>
						<span id="odometer14" class="odometer"></span>
					</div>
				</div>
				
				<div class="clear"></div>
			</div>
		</div>
	</div>

	<div class="fourteen-timeline-wrapper">
		<div class="timeline">
			<div id="animation-nineteen" class="left animate">
				<div class="block first">
					<div class="text-wrapper-three">
						<img src="/wp-content/themes/postnauka/specials/img/fourteen-left-one.png" alt="" class="first">
						<img src="/wp-content/themes/postnauka/specials/img/fourteen-left-two.png" alt="" class="second">
						<img src="/wp-content/themes/postnauka/specials/img/twelve-arrow-left.png" alt="" class="arrow">

						Переходим на новую волну<br> ПостНаука запускает<br> 4 передачи на радио 



					</div>
					<div class="date">1<br>мар</div>
					<div class="clear"></div>
					<div class="full-video">
							<div class="left-text">
								<br><br>
								<span id="odometer15" class="odometer"></span><br>
								года<br>в эфире
							</div>
							<div class="right-text">
								На радиостанции «Говорит Москва» выходят передачи «ПостНаука», «Русский язык», «История религии» и «Точки над i»
							</div>
							<div class="clear"></div>
						</div>
				</div>
				<div class="clear"></div>
			</div>
			<div id="animation-twenty" class="right animate">
				<div class="block">
					<div class="text">
						<img src="/wp-content/themes/postnauka/specials/img/fourteen-right-one.gif">
						сотрудничество<br>с Университетом Иннополис<br>
						<span class="small">
							ПостНаука расширяет количество университетов,<br> которым помогает в продвижении их<br> профессоров, учебных программ и научной<br> активности 
						</span>
					</div>
					<div class="date">7<br>мар</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>
			<div id="animation-twenty-one" class="left animate">
				<div class="block">
					
					<div class="text">
					<img class="first" src="/wp-content/themes/postnauka/specials/img/fourteen-left-three.gif" alt="">
					<div class="clear"></div>
						Проект ПостНауки и Московской <br>высшей школы социальных <br>и экономических наук <br>
						<span class="small">Вслед за Сколтехом и Иннополисом ПостНаука рассказывает о магистерских программах одной из лучших социологических школ современной России</span>
						<a href="http://postnauka.ru/projects/social-sciences">Зачем нужны социальные науки?</a>
					</div>
					<div class="date">10<br>июл</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>

			<div id="animation-twenty-two" class="right animate">
				<div class="block">
					<div class="text-wrapper">
						<img src="/wp-content/themes/postnauka/specials/img/fourteen-right-two.png" alt="" class="first">
						<img src="/wp-content/themes/postnauka/specials/img/twelve-arrow-right.png" alt="" class="arrow">
						<img src="/wp-content/themes/postnauka/specials/img/fourteen-right-three.png" alt="" >
						Еженедельные публикации<br> материалов на сайте Forbes


						
					</div>
					<div class="date">12<br>сен</div>
					<div class="clear"></div>
					<div class="app">
							<div class="left-text">
								<span id="odometer16" class="odometer"></span><br>
								
							</div>
							<div class="right-text">
								статьи<br>написано
							</div>
							<div class="clear"></div>
					</div>
				</div>
				<div class="clear"></div>
			</div>

			<div id="animation-twenty-three" class="left animate">
				<div class="block">
					
					<div class="text">
					<img class="first" src="/wp-content/themes/postnauka/specials/img/fourteen-left-four.gif" alt="">
					<div class="clear"></div>
						Сотрудничество с РосНано<br>
						<span class="small">О главных достижениях в области применения нанотехнологий от медицины до физики</span>
						<a href="http://postnauka.ru/projects/nanoindustry">Как нанообъекты меняют <br>мир технологий?</a>
					</div>
					<div class="date">4<br>ноя</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>

			<div id="animation-twenty-four" class="right last animate">
				<div class="block">
					<div class="text">
						<img src="/wp-content/themes/postnauka/specials/img/fourteen-right-four.gif">
						Serious Science<br>
						<span class="small">
							Лауреат международного конкурса<br>интернет-предпринимательства
						</span><br>
						CER Internet Entrepreneurs <br>Prize 2014 
					</div>
					<div class="date">23<br>дек</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>
			<div id="scene-four" class="main-year">2014</div>
		</div>

		
		<a href="#statistic-three" class="mouse"><img src="/wp-content/themes/postnauka/specials/img/mouse.png"/></a>
	</div>

	<div id="statistic-three" class="statistic-three-wrapper">
		<div class="statistic-three">
			<img src="/wp-content/themes/postnauka/specials/img/statistic-mobile-arrow-left.png" alt="" class="mobile-arrow-left">
			<img src="/wp-content/themes/postnauka/specials/img/statistic-mobile-arrow-right.png" alt="" class="mobile-arrow-right">

			<img src="/wp-content/themes/postnauka/specials/img/statistic-mobile-arrow-left.png" alt="" class="mobile-arrow-left-v2">
			<img src="/wp-content/themes/postnauka/specials/img/statistic-mobile-arrow-right.png" alt="" class="mobile-arrow-right-v2">
			<h3>Топ-5 самых активных авторов</h3>
			<div class="authors-wrap">
				<a data="1" style="opacity:1;" href="http://postnauka.ru/author/vakhshtain"><div class="author-block left">
					<img src="/wp-content/themes/postnauka/specials/img/author-1.png" alt="">
					<div class="name">
						виктор<br>вахштайн
					</div>
					<div class="number">
						59 материалов
					</div>
				</div></a>
				<a data="2" href="http://postnauka.ru/author/popov"><div class="author-block">
					<img src="/wp-content/themes/postnauka/specials/img/author-2.png" alt="">
					<div class="name">
						сергей<br>попов
					</div>
					<div class="number">
						39 материалов
					</div>
				</div></a>
				<a data="3" href="http://postnauka.ru/author/drobyshevsky"><div class="author-block">
					<img src="/wp-content/themes/postnauka/specials/img/author-3.png" alt="">
					<div class="name">
						станислав <br>дробышевский
					</div>
					<div class="number">
						38 материалов
					</div>
				</div></a>
				<a data="4" href="http://postnauka.ru/author/gusejnov"><div class="author-block">
					<img src="/wp-content/themes/postnauka/specials/img/author-4.png" alt="">
					<div class="name">
						Гасан<br>Гусейнов
					</div>
					<div class="number">
						38 материалов
					</div>
				</div></a>
				<a data="5" href="http://postnauka.ru/author/marey"><div class="author-block">
					<img src="/wp-content/themes/postnauka/specials/img/author-5.png" alt="">
					<div class="name">
						Александр<br>Марей
					</div>
					<div class="number">
						29 материалов
					</div>
				</div></a>

				<div class="clear"></div>
			</div>
			<div class="donuts-wrapper">
				<div data="1" class="first-pie-wrapper">
					<div class="text">
						География<br>читателей
					</div>
					<div class="donut">
						<div class="wrapper" id="six-pie"></div>
						
					</div>
					
				</div>
				<div data="2" class="second-pie-wrapper">
					<div class="text">
						Гендер<br>читателей
					</div>
					<div class="donut">
						<div class="wrapper" id="seven-pie"></div>
						
					</div>
					
				</div>
				<div data="3" class="third-pie-wrapper">
					<div class="text">
						Возраст<br>читателей
					</div>
					<div class="donut">
						<div class="wrapper" id="eight-pie"></div>
						
					</div>
					
				</div>
				<div class="clear"></div>
			</div>
			<table data="1" class="first">
				<tr>
					<td class="percent">73%</td>
					<td class="percent">3%</td>
					<td class="percent">2%</td>
				</tr>
				<tr>
					<td class="desc">Россия</td>
					<td class="desc">Беларусь</td>
					<td class="desc">США</td>
				</tr>
				<tr>
					<td class="percent">10%</td>
					<td class="percent">2%</td>
					<td class="percent"></td>
				</tr>
				<tr>
					<td class="desc">Украина</td>
					<td class="desc">Казахстан</td>
					<td></td>
				</tr>
			</table>

			<table data="2" class="second">
				<tr>
					<td class="percent">57%</td>
				</tr>
				<tr>
					<td class="desc">Мужчины</td>
				</tr>
				<tr>
					<td class="percent">43%</td>
				</tr>
				<tr>
					<td class="desc">Женщины</td>
					<td></td>
				</tr>
			</table>


			<table data="3" class="third">
				<tr>
					<td class="percent">18%</td>
					<td class="percent">20%</td>
					<td class="percent">7%</td>
				</tr>
				<tr>
					<td class="desc">18-24</td>
					<td class="desc">35-44</td>
					<td class="desc">55-64</td>
				</tr>
				<tr>
					<td class="percent">33%</td>
					<td class="percent">16%</td>
					<td class="percent">6%</td>
				</tr>
				<tr>
					<td class="desc">25-34</td>
					<td class="desc">45-54</td>
					<td class="desc">65+</td>
				</tr>
			</table>
			<div class="clear"></div>
		</div>
	</div>

	<div class="fifteen-timeline-wrapper">
		<div class="timeline">
			<div id="animation-twenty-five" class="left animate">
				<div class="block first">
					<div class="text-wrapper-three">
						<img src="/wp-content/themes/postnauka/specials/img/fifteen-left-one.png" alt="" class="first">
						<img src="/wp-content/themes/postnauka/specials/img/fifteen-left-two.png" alt="" class="second">
						<img src="/wp-content/themes/postnauka/specials/img/twelve-arrow-left.png" alt="" class="arrow">

						ПостНаука получает премию<br> «За верность науке» 
					</div>
					<div class="date">10<br>фев</div>
					<div class="clear"></div>
					<div class="full-video">
							<div class="left-text">
								В номинации «Лучший интернет-проект о науке»,<br> которую впервые вручает Министерство<br> образования и науки. 
							</div>
						</div>
				</div>
				<div class="clear"></div>
			</div>

			<div id="animation-twenty-six" class="right animate">
				<div class="block">
					<div class="text">
						<img src="/wp-content/themes/postnauka/specials/img/fifteen-right-one.gif">
						ПостНаука завершает работу <br>над научной концепцией экспозиции <br>Политехнического музея <br>
						<span class="small">
							ПостНаука привлекла к работе свыше 200<br> ученых. В итоге было сформулировано и описано<br> 159 научных идей, которые в будущем станут<br> экспонатами
						</span>
					</div>
					<div class="date">7<br>мар</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>

			<div id="animation-twenty-seven" class="left animate">
				<div class="block">
					
					<div class="text">
					<img class="first" src="/wp-content/themes/postnauka/specials/img/fifteen-left-three.gif" alt="">
					<div class="clear"></div>
						ПостНаука публикует первый <br>анимационный фильм при поддержке МГТС <br>
						<img class="second" src="/wp-content/themes/postnauka/specials/img/fifteen-left-four.png" alt="">
					</div>
					<div class="date">19<br>мар</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>
		<div id="scene-five" class="main-year">2015</div>
		</div>

		
	</div>
<?php endwhile; endif; ?>


	<div class="last-wrapper">
		<div class="last">
			<div class="block">
				<div class="last-date">24<br>мая</div>
				<img src="/wp-content/themes/postnauka/specials/img/last-arrow.png" alt="" class="arrow">
				<h3>постнауке исполняется</h3>
				<h1>3 года</h1>
				<iframe class="last-video" src="https://www.youtube.com/embed/cjtpf16McE4?showinfo=0" frameborder="0" allowfullscreen></iframe>
				<div class="mail">
					<div class="text">
						Будьте в курсе наших новостей и мероприятий:
					</div>
					<form action="http://postnauka.us5.list-manage.com/subscribe/post?u=45e158c230e7fafdb3cbfe8ec&amp;id=11bdb48d45" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
						<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email" required><input class="submit" type="submit" value="Подписаться" name="subscribe">
						<div class="clear"></div>
						<div style="position: absolute; left: -5000px;"><input type="text" name="b_45e158c230e7fafdb3cbfe8ec_11bdb48d45" value=""></div>
					</form>
				</div>
			</div>
			<div class="txt"> Поделитесь нашей историей:</div>
			<div class="social">
				<a class="facebook" onclick="Share.facebook('<?php echo the_permalink(); ?>','<?php the_title(); ?> - <?php bloginfo('name'); ?>','<?php if(has_post_thumbnail()) { ?><?php $src=wp_get_attachment_image_src(get_post_thumbnail_id($post->ID),'',false, ''); echo $src[0]; ?><?php } else { ?>http://assets0.postnauka.ru/style/postnauka-200x200.jpg<?php } ?>','<?php $psubt=get_post_meta($post->ID,'psubt',true); if($psubt){ ?><?php echo $psubt; ?><?php } else { ?><?php the_title(); ?> - <?php bloginfo('description'); ?><?php } ?>')"></a>
				<a class="vk" onclick="Share.vkontakte('<?php echo the_permalink(); ?>','<?php the_title(); ?> - <?php bloginfo('name'); ?>','<?php if(has_post_thumbnail()) { ?><?php $src=wp_get_attachment_image_src(get_post_thumbnail_id($post->ID),'',false, ''); echo $src[0]; ?><?php } else { ?>http://assets0.postnauka.ru/style/postnauka-200x200.jpg<?php } ?>','<?php $psubt=get_post_meta($post->ID,'psubt',true); if($psubt){ ?><?php echo $psubt; ?><?php } else { ?><?php the_title(); ?> - <?php bloginfo('description'); ?><?php } ?>')"></a>
				<a class="twitter" onclick="Share.twitter('<?php echo the_permalink(); ?>','<?php the_title(); ?> - <?php bloginfo('name'); ?>')"></a>
				<div class="clear"></div>
			</div>
			<a class="help" href="http://postnauka.ru/donate">Помочь проекту</a>
		</div>
	</div>
	<div class="footer-wrapper">
		<div class="footer">
			<a href="http://postnauka.ru/" class="logo"></a>
			<ul>
			    <li><a href="http://postnauka.ru/projects">ПРОЕКТЫ</a></li>
			    <li><a href="http://postnauka.ru/adv">РЕКЛАМА</a></li>
			    <li><a href="http://postnauka.ru/sposnsored">ПАРТНЕРАМ</a></li>
			</ul>
			<div class="text">
				© ПостНаука, 2012-2015. Использование материалов сайта postnauka.ru<br> разрешено только при наличии активной ссылки на источник. <br>Все права на картинки и тексты принадлежат их авторам.
			</div>
			<div class="clear"></div>
		</div>
	</div>
<script type="text/javascript">
Share = {
    vkontakte: function(purl, ptitle, pimg, text) {
        url  = 'http://vkontakte.ru/share.php?';
        url += 'url='          + encodeURIComponent(purl);
        url += '&title='       + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image='       + encodeURIComponent(pimg);
        url += '&noparse=true';
        Share.popup(url);
    },
    odnoklassniki: function(purl, text) {
        url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
        url += '&st.comments=' + encodeURIComponent(text);
        url += '&st._surl='    + encodeURIComponent(purl);
        Share.popup(url);
    },
    facebook: function(purl, ptitle, pimg, text) {
        url  = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]='     + encodeURIComponent(ptitle);
        url += '&p[summary]='   + encodeURIComponent(text);
        url += '&p[url]='       + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        Share.popup(url);
    },
    twitter: function(purl, ptitle) {
        url  = 'http://twitter.com/share?';
        url += 'text='      + encodeURIComponent(ptitle);
        url += '&url='      + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        Share.popup(url);
    },
    mailru: function(purl, ptitle, pimg, text) {
        url  = 'http://connect.mail.ru/share?';
        url += 'url='          + encodeURIComponent(purl);
        url += '&title='       + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&imageurl='    + encodeURIComponent(pimg);
        Share.popup(url)
    },

    popup: function(url) {
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }
};
</script>

<?php //} else { 
//<img src="/wp-content/themes/postnauka/specials/img/unnamed.jpg">?>
<?php //} ?>

<script type="text/javascript">(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter21932539 = new Ya.Metrika({id:21932539, webvisor:true, clickmap:true, trackLinks:true, accurateTrackBounce:true}); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script><noscript><div><img src="//mc.yandex.ru/watch/21932539" style="position:absolute; left:-9999px;" alt="" /></div></noscript>

<span id="openstat1"></span><script type="text/javascript">var openstat = { counter: 1, next: openstat }; (function(d, t, p) {
var j = d.createElement(t); j.async = true; j.type = "text/javascript"; j.src = ("https:" == p ? "https:" : "http:") + "//openstat.net/cnt.js"; var s = d.getElementsByTagName(t)[0]; s.parentNode.insertBefore(j, s); })(document, "script", document.location.protocol); </script>

<?php wp_footer(); ?>
</body>
</html>