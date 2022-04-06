<!DOCTYPE html>
<!-- Template by freewebsitetemplates.com -->
<html>
<?php
$time=time();
if (session_id()=='') session_start();

$db=mysqli_connect("localhost","v_20478_Gulbanu","dala3940","v_20478_metal") or die();
$res=mysqli_query($db,"set names utf8");

$mess_url=mysqli_real_escape_string($db,basename($_SERVER['SCRIPT_FILENAME']));

//получаем id текущей темы
$res=mysqli_query($db,"SELECT id FROM таблица WHERE file_name='".$mess_url."'");
$res=mysqli_fetch_array($res);
$theme_id=$res["id"];

if (isset($_POST["contr_cod"])){    //отправлен комментарий
 $mess_login=htmlspecialchars($_POST["mess_login"]);
  $mess_gorod=htmlspecialchars($_POST["mess_gorod"]);
 $user_text=htmlspecialchars($_POST["user_text"]);
 if (md5($_POST["contr_cod"])==$_POST["prov_summa"]){    //код правильный
  if ($mess_login!='' and $mess_gorod!='' and $user_text!=''){
   if (is_numeric($_POST["parent_id"]) and is_numeric($_POST["f_parent"]))
    $res=mysqli_query($db,"insert into comment1
    (parent_id, first_parent, date, theme_id, login, gorod, message)
    values ('".$_POST["parent_id"]."','".$_POST["f_parent"]."',
    '".$time."','".$theme_id."','".$mess_login."','".$mess_gorod."','".$user_text."')");
   else $res=mysqli_query($db,"insert into comment1 (date, theme_id, login, gorod, message)
   values ('".$time."','".$theme_id."','".$mess_login."','".$mess_gorod."','".$user_text."')");
    $_SESSION["send"]="Комментарий принят!";
    header("Location: $mess_url#last"); exit;
  }
  else {
   $_SESSION["send"]="Не все поля заполнены!";
   header("Location: $mess_url#last"); exit;
  }
 }
 else {
  $_SESSION["send"]="Неверный проверочный код!";
  header("Location: $mess_url#last"); exit;
 }
}

if (isset($_SESSION["send"]) and $_SESSION["send"]!="") {    //вывод сообщения
    echo '<script type="text/javascript">alert("'.$_SESSION["send"].'");</script>';
    $_SESSION["send"]="";
}
?>
<style type="text/css">
    .add_comment {
        display: table;
        width: 800px;
		color:#44494c;
		
    }
	.knopka:hover {
	  background:#15px;
	}
	.comm_head{
	padding: 0 0 10px;
	    color: #949494;
    font-size: 14px !important;
	float:none!important;}
	.comm_body{
	margin-bottom:25px;
	font-style:italic;
	font-size:16px;
	
	padding: 0 0 10px;
	}
    .close_hint, .open_hint {
        float: right;
        border: 1px solid #77A;
        background: #6e6;
        width: 100px;
        text-align: center;
        cursor: pointer;
    }
    .close_hint { margin: 5px; color: #F00; }
    .comm_minus { background: url('image/minus.png') no-repeat; }
    .comm_plus { background: url('image/plus.png') no-repeat; }
    .comm_minus, .comm_plus {
        float: right;
        width: 19px;
        height: 18px;
        cursor: pointer;
    }
    .comm_text { display:none; }
    .sp_link { color: #F33; cursor: pointer; }
    .strelka {
        background: url(image/strelka.png) no-repeat;
        border-left: 2px solid #000;
    }
    .strelka_2 { background: url(image/strelka_2.png) no-repeat; }
    #hint { position: absolute; display: none; z-index: 100; }
</style>
<head>
<meta charset="utf-8" />
<title>Все о компанни MetalGroup</title>
<link rel="shortcut icon" href="images/Icon.ico" type="image/x-icon">
<meta name="keywords" content="о компанни MetalGroup">
<meta name="description" content="MetalGroup LLP является ведущим производителем складского, архивного и торгово-выставочного оборудования">
<link rel="stylesheet" type="text/css" href="style.css" media="all" />
<script src="js/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="js/jquery.bxslider.js"></script>
<link href="jquery.bxslider1.css" rel="stylesheet" />
<script>
 function collapsElement(id) {
 if ( document.getElementById(id).style.display != "none" ) {
 document.getElementById(id).style.display = 'none';
 }
 else {
 document.getElementById(id).style.display = '';
 }
 }
 </script>
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter46412580 = new Ya.Metrika({
                    id:46412580,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/46412580" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-88187213-1', 'auto'); ga('send', 'pageview');</script></head>
<body>
	<div id="header"><div class="container">
			<div id="logo">
				<a href="index.html"><img src="images/logo.png" alt="" /></a>			
			</div>		
			<ul>
				<li><a href="index.html"><span>Главная</span></a></li>
				<li><a href="products.html"><span>Товары</span></a></li><li><a href="news.html"><span>Новости</span></a></li>
				<li><a href="des.html"><span>3D Дизайн</span></a></li>
				<li><a href="services.html"><span>Доставка</span></a></li><li class="selected"><a href="otzovik.php"><span>Отзывы</span></a></li>
				<li ><a href="about.html"><span>О нас</span></a></li>
				<li><a href="contact.html"><span>Контакты</span></a></li></ul></div></div>			
<div id="body"><div class="chernyi"> <div class="container"><p><span style="color:#ff8800">Звоните нам: </span>Алматы 8(727) <b>344 99 00</b></p> <p>Астана 8(7172) <b>27 99 00</b></p></div></div>
	<form action="search.php" method="post" id="search">
  <input type="text" name="search" value="поиск" onblur="if(this.value=='') this.value='поиск';" onfocus="if(this.value=='поиск') this.value='';" class="input" />
  <input type="submit" name="" value="" class="submit" /></form>
	 		
			<br>
		
		<div class="footer">		
		<div class="section">
				<div>	
				<h3>Каталог</h3>
					<ul class="tochki">
					<li><p><a href="stellazhtor.html"><img src="images/bullets.gif"> Торговые стеллажи</a></p><hr></li>		
					
					<li>
						<p><a href="sklad.html"><img src="images/bullets.gif"> Складские стеллажи </a><hr></p>
						
					</li>	
					<li>
						<p><a href="pallet.html"><img src="images/bullets.gif"> Паллетные стеллажи </a></p><hr>
						
					</li>	
					<li><p><a href="obor.html"><img src="images/bullets.gif"> Торговое оборудование </a></p><hr></li><li><p><a href="holod.html"><img src="images/bullets.gif"> Холодильное оборудование</a></p><hr></li><li><p><a href="apteka.html"><img src="images/bullets.gif"> Оборудование для аптеки</a></p><hr></li><li><p><a href="neutral.html"><img src="images/bullets.gif"> Нейтральное оборудование</a></p><hr></li><li><p><a href="kassovyie_boksyi.html"><img src="images/bullets.gif"> Кассовые боксы </a></p><hr></li>	<li><p><a href="pos_obor.html"><img src="images/bullets.gif"> POS оборудование </a></p><hr></li>		
					<li>
						<p><a href="vitrina.html"><img src="images/bullets.gif"> Витрины</a></p><hr>
									
					</li>						
					<li>
						<p><a href="econompanel.html"><img src="images/bullets.gif"> Экономпанели и аксессуары </a></p><hr>
						
					</li>					
					<li>
						<p><a href="shkaf_odejda.html"><img src="images/bullets.gif"> Металлические шкафы для одежды</a></p><hr>
									
					</li>	
					<li>
						<p><a href="shkaf_buh.html"><img src="images/bullets.gif"> Бухгалтерские шкафы </a></p><hr>
						
					</li>		
					<li>
						<p><a href="shkaf_doc.html"><img src="images/bullets.gif"> Металлические шкафы для документов</a></p><hr>
						
					</li>		
					<li>
						<p><a href="shkaf_sum.html"><img src="images/bullets.gif"> Шкафы для сумок (сумочницы)</a></p><hr>
									 
					</li>	
					<li>
						<p><a href="verstak.html"><img src="images/bullets.gif"> Верстаки и аксессуары</a></p><hr>
						
					</li>
					<li>
						<p><a href="shkaf_kart.html"><img src="images/bullets.gif"> Картотечные шкафы </a></p><hr>
						
					</li>		
					<li>
						<p><a href="fenx.html"><img src="images/bullets.gif"> Металлические ограждения и аксессуары</a></p><br>
						
					</li>													
				</ul>
				<br>
			<h3><a href="contact.html">Контакты</a></h3>	
				<ul>
				
					<li>
						<p><b>г. Алматы:</b><br> ул. Мынбаева 43 <br>(уг.ул. Манаса),<br> 1-этаж, 050008 </p>
						
							
					</li>		
					<li>
						<p> 8 (727) 344-99-00<br>   +7 (701) 266-77-00 <br>+7 (701) 101-83-88 </p>	
										
					</li>
<li>
						<p><b>Email: </b>zakaz@idiamarket.kz</p>
						
					</li>						
					<br>
					<li>
						<p><b>г. Астана:</b><br> ул. Бейсекбаева 24/1, 2-этаж, <br>мебельный центр DARA </p>
						
							
					</li>		
					<li>
						<p>8 (7172) 27-99-00<br>‎+7 (701) 511-22-00 <br>+7 (701)  911 55 00 </p>	
										
					</li>
					<li>
						<p><b>Email: </b>astana@idiamarket.kz</p>
						
					</li>	
						
				</ul>	
				</div>
			</div>
			<div class="featured" >
			
			<h1 style="padding: 0 25px 10px; "><strong>Отзывы</strong></h1>
		
			
									  <?php
function parents($up=0, $left=0) {    //Строим иерархическое дерево комментариев
global $tag,$mess_url;

for ($i=0; $i<=count($tag[$up])-1; $i++) {
 //Можно выделять цветом указанные логины
 if ($tag[$up][$i][2]=='Admin') $tag[$up][$i][2]='<font color="#C00">Admin</font>';
 if ($tag[$up][$i][6]==0) $tag[$up][$i][6]=$tag[$up][$i][0];
 //Высчитываем рейтинг комментария
 $sum=$tag[$up][$i][4]-$tag[$up][$i][5];

 if ($up==0) echo '<div class="otz" style=" color: #2a4f5e;    border-bottom: 1px solid #e6e6ec; margin-bottom:5px; margin-left:30px; float:none!important; width:900px; padding-top:10px;">';
 else {
    if (count($tag[$up])-1!=$i)
        echo '<div class="strelka" style="padding:5px 0 0 '.($left-2).'px;">';
    else echo '<div class="strelka_2" style="padding:5px 0 0 '.$left.'px;">';
 }
 echo '<div class="comm_head" id="m'.$tag[$up][$i][0].'">';
 echo '<div style="margin-right:3px"> Имя: </div>';
 echo '<div style="float:left; margin-right:5px; font-size:16px!important; color:#2a4f5e;"> <b>   '.$tag[$up][$i][2].' </b></div>';
 
 echo '<div style="margin-right:3px; margin-left:5px"> | </div>';
  echo '<div style="margin-right:3px; margin-left:5px"> Город: </div>';
 echo '<div style="float:left;  margin-right:5px; font-size:16px!important; color:#2a4f5e; "><b>   '.$tag[$up][$i][3].'</b></div>';



 echo '<div style="text-align:right; float:none; ">   Добавлено: <span style="color:#2a4f5e;"><b>  '.date("d.m.Y в H:i ", $tag[$up][$i][4]).' </b></span></div></div>';
 echo '<div style="clear:both; "></div>';
 echo '<div class="comm_body"  style="float:none!important;">';
 if ($sum<0) echo '<u class="sp_link">Показать/скрыть</u><div class="comm_text">';
 else echo '<div style="word-wrap:break-word; float:none!important;">';
 echo str_replace("<br />","<br>",nl2br($tag[$up][$i][1])).'</div>';

 if (isset($tag[ $tag[$up][$i][0] ])) parents($tag[$up][$i][0],20);
 echo '</div></div>';
}
}

$res=mysqli_query($db,"SELECT * FROM comment1
    WHERE theme_id='".$theme_id."' ORDER BY id");
$number=mysqli_num_rows($res);

if ($number>0) {
 echo '<div style="padding-left:15px; padding-top:10px; margin-left:15px; ">';
 while ($com=mysqli_fetch_assoc($res))
    $tag[(int)$com["parent_id"]][] = array((int)$com["id"], $com["message"],
    $com["login"], $com["gorod"], $com["date"], $com["plus"], $com["minus"], $com["first_parent"]);
 echo parents().'</div><br>';
}
?>
<?php
$cod=rand(100,900); $cod2=rand(10,99);
echo '<div id="last" style="margin-top:30px;">';
echo '<form method="POST" action="'.$mess_url.'#last" class="add_comment"';
echo 'name="add_comment" id="hint"><div class="close_hint">Закрыть</div>';
echo '<textarea cols="68" rows="5" name="user_text"></textarea>';
echo '<div style="margin:5px; float:left;">';
echo 'Имя* <input type="text" name="mess_login" maxlength="20" value=""></div>';
echo '<div style="margin:5px; float:left;">';
echo 'Город* <input type="text" name="mess_gorod" maxlength="20" value=""></div>';
echo '<div style="margin:5px; float:right;">'.$cod.' + '.$cod2.' = ';
echo '<input type="hidden" name="prov_summa" value="'.md5($cod+$cod2).'">';
echo '<input type="hidden" name="parent_id" value="0">';
echo '<input type="hidden" name="f_parent" value="0">';
echo '<input type="text" name="contr_cod" maxlength="4" size="4">&nbsp;';
echo '<input type="submit" value="Отправить"></div>';
echo '</form>';

echo '<form method="POST" action="'.$mess_url.'#last" class="add_comment">';
echo '<div style="float:none;font-size:18px; font-weight:bold;padding: 10px 60px 10px; ">Оставить отзыв</div>';
echo '<div style="margin-left:226px; margin-top:10px; float:none; font-weight:bold;">';
echo 'Имя* <input style="height:23px; width:404px; font-weight:normal;  " type="text" name="mess_login" maxlength="20" placeholder="Ваше имя" value=""></div>';
echo '<div style="margin-left:211px; margin-top:10px; float:none; font-weight:bold;"> Город*';
echo ' <input style="height:23px; width:404px; font-weight:normal; " type="text" name="mess_gorod" maxlength="20" placeholder="Укажите ваш населенный пункт" value=""></div>';
echo '<div class="oott" style="float:none;margin-left:207px; margin-top:10px">';
echo '<div  style="float:left; margin-right:5px; font-weight:bold;">Отзыв*</div>';
echo '<textarea style="font-weight:normal;" cols="55" rows="5" name="user_text" placeholder="Ваш отзыв"></textarea>';
echo '</div>';
echo '<div class="ott" style="margin-top:10px; margin-left:189px; float:none">'.$cod.' + '.$cod2.' = ';
echo '<input  type="hidden" name="prov_summa" value="'.md5($cod+$cod2).'">';
echo '<input style="height:22px;" type="text" name="contr_cod" maxlength="4" size="4">&nbsp;</div>';
echo '<div style="margin-top:15px; margin-left:255px;"><input class="knopka" style=" margin-left:10px; height:28px; font-size: 14px !important;
    background: #3a5265;
    border: 0px solid #007f87;
        box-shadow: 0 2px 2px 0 #606060;
		    -webkit-border-radius: 5px;
    text-shadow: none;
    float: left;
    width: 150px;
    line-height: normal;
    color: #fff;
    cursor: pointer;
 
    outline: none;" type="submit" value="Отправить" ></div>';
echo '</form></div>';
?>
		
		</div>
				<div class="ll">
	<h3>Наши клиенты</h3></div>
	<div class="slider1">
  <div class="slide"><img src="images/logo/tech.png"></div>
  <div class="slide"><img src="images/logo/bee.jpg"></div>
  <div class="slide"><img src="images/logo/kaz.png"></div>
  <div class="slide"><img src="images/logo/sin.jpg"></div>
  <div class="slide"><img src="images/logo/bip.jpg"></div>
  <div class="slide"><img src="images/logo/for.png"></div>
  <div class="slide"><img src="images/logo/alt.jpg"></div>
  <div class="slide"><img src="images/logo/cha.jpg"></div>
   <div class="slide"><img src="images/logo/kot.jpg"></div>
  <div class="slide"><img src="images/logo/mag.jpg"></div>
  <div class="slide"><img src="images/logo/mel.jpg"></div>
  <div class="slide"><img src="images/logo/hyu.png"></div>
  <div class="slide"><img src="images/logo/arz.png"></div>
   <div class="slide"><img src="images/logo/kul.png"></div>
  <div class="slide"><img src="images/logo/meg.png"></div>
  <div class="slide"><img src="images/logo/pra.jpg"></div>
  <div class="slide"><img src="images/logo/hel.png"></div>
  <div class="slide"><img src="images/logo/naz.png"></div>
  <div class="slide"><img src="images/logo/cen.png"></div>
   <div class="slide"><img src="images/logo/ecc.jpg"></div>
</div>
	
	<script >
	$(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 290,
    minSlides: 2,
    maxSlides: 4,
    slideMargin: 40
  });
});</script>
			</div>
			
	</div>
	
</div>

	</div>
<div id="sidebar">
		<div class="side">
  <dl>
    <dd><b><a  href="index.html">Главная</a></dd><dd><a href="about.html">О нас</a></dd><dd><a  href="contact.html">Контакты</a></dd> <dd><a  href="des.html">3D Дизайн</a></dd>  
  </dl>
  <dl>
  <dd><a href="products.html">Товары</a></dd><dd><a href="services.html">Доставка и оплата</a></dd><dd><a href="news.html">Новости</a></dd><dd><a href="otzovik.php">Отзывы</b></a></dd>	
  </dl>
  <dl>
    <dd style="margin:0"><img src="images/logo1.png"/></dd>
  </dl>
  <dl>
   <dd><a href="contact.html"><b>Телефон:</b><br>  8 (727) 344-99-00 <br> +7 (701) 266-77-00 <br> +7 (701) 101-83-88</a></dd><br>	
  </dl>
  <dl>
   <dd><a href="contact.html"><b>Адрес:</b><br>ул. Мынбаева 43 <br>(уг.ул. Манаса), 1-этаж, <br>   Казахстан, Алматы, 050008</a></dd></dl><div id="socialMedia" class="span3 pull-right"><a href="https://www.youtube.com/channel/UCNDMIviMuZOhhCP7xoxGYAA/videos"><img width="40" height="40" src="images/youtube.png" title="youtube" alt="youtube"></a><a href="https://www.instagram.com/idiamarket/" style="margin-left:5px"><img width="40" height="40" src="images/insta.png" title="instagram" alt="instagram"></a></div> 
  <p class="footer_text">© 2010-2020  MetalGroup. Все права защищены.</p>
  </div>
  
</div>
	</div>	
</body>
<script type="text/javascript">
//Добавление в форму отправки комментария значений id родительских комментариев
function comm_on(p_id,first_p){
    document.add_comment.parent_id.value=p_id;
    document.add_comment.f_parent.value=first_p;
}

$(document).ready(function(){
//Показать скрытое под спойлером сообщение
$(".sp_link").click(function(){
    $(this).parent().children(".comm_text").toggle("normal");
});

//Показать форму ответа на имеющийся комментарий
$(".open_hint").click(function(){
    $("#hint").animate({
        top: $(this).offset().top + 25, left: $(document).width()/2 -
        $("#hint").width()/2
    }, 400).fadeIn(800);
});

//Скрыть форму ответа на имеющийся комментарий
$(".close_hint").click(function(){ $("#hint").fadeOut(1200); });

//Получение id оцененного комментария
$(".comm_plus,.comm_minus").click(function(){
    id_comm=$(this).parents(".comm_head").attr("id").substr(1);
});

//Отправление оценки комментария в файл rating_comm.php
$(".comm_plus").click(function(){
    jQuery.post("rating_comm.php",{comm_id:id_comm,ocenka:1},rating_comm);
});
$(".comm_minus").click(function(){
    jQuery.post("rating_comm.php",{comm_id:id_comm,ocenka:0},rating_comm);
});

//Возврат рейтинга комментария и его обновление
function rating_comm(data){
    $("#rating_comm"+id_comm).fadeOut(800,function(){
        $(this).html(data).fadeIn(800);
    });
}
});
</script>
<!-- BEGIN JIVOSITE CODE {literal} -->
<script type='text/javascript'>
(function(){ var widget_id = 'zvDluN98R2';
var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);})();</script>
<!-- {/literal} END JIVOSITE CODE -->
</html>