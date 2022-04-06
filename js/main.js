// const banTopContainer = document.querySelector(".container_p .sh_box")

const footerWrapper = document.querySelector('#sidebar .side');

if (footerWrapper != null) {
    footerWrapper.innerHTML = `       

    <div class="footer_wrapper">
        <div class="footer_desc_1">
            <dd><a href="index.html">Главная</a></dd>
            <dd><a href="about.html">О нас</a></dd>
            <dd><a href="contact.html">Контакты</a></dd>
            <dd><a href="des.html">3D Дизайн</a></dd>
        </div>
        <div class="footer_desc_2">
            <dd><a href="products.html">Товары</a></dd>
            <dd><a href="services.html">Доставка и оплата</a></dd>
            <dd><a href="news.html">Новости</a></dd>
            <dd><a href="otzovik.php">Отзывы</a></dd>
        </div>


        <div class="footer_logo">
            <dd style="margin:0"><img src="images/logo17.png" /></dd>
        </div>

        <div class="footer_address">
            <div class="footer_address_one">
                <div class="foooter_address_city">

                    <a href="almaty.html">
                        <h3>
                            г. Алматы:</h3><br>ул. Мынбаева 43 <br>(уг.ул. Манаса), 1-этаж, <br> Казахстан,
                        Алматы, 050008
                    </a>
                </div>
                <div class="footer_address_contacts">
                    <a href="almaty.html"><b></b><br> 8 (727) 344-99-00 <br> +7 (701) 266-77-00</a>
                </div>
            </div>

            <div class="footer_address_two">
                <div class="foooter_address_city">

                    <a href="astana.html">
                        <h3>
                            г. Нур-Султан:</h3><br>ул. Бейсекбаева 24/1 <br> бизнес центр DARA, 2-этаж, <br>
                        Казахстан, Нур-Султан, 050008
                    </a>
                </div>
                <div class="footer_address_contacts">
                    <a href="astana.html"><b></b><br> 8 (7172) 27-99-00 <br> +7 (701) 511-22-00</a>
                </div>
            </div>
        </div>
    </div>

    <div id="socialMedia" class="span3 pull-right">
        <a href="https://www.youtube.com/channel/UCNDMIviMuZOhhCP7xoxGYAA/videos"><img width="40" height="40"
                src="images/youtube.svg" title="youtube" alt="youtube"></a>

        <a href="https://www.instagram.com/idiamarket/" style="margin-left:5px"><img width="40" height="40"
                src="images/instagram.svg" title="instagram" alt="instagram"></a>
        <a href="https://t.me/Raihan_106" style="margin-left:5px"><img width="40" height="40"
                src="images/telegram.svg" title="telegram" alt="telegram"></a>
        <a href="https://api.whatsapp.com/send/?phone=77011018388&text&app_absent=0" style="margin-left:5px"><img width="40" height="40"
                src="images/whatsapp.svg" title="whatsapp" alt="whatsapp"></a>
      <div class="google_certificate">
      <a href="https://www.google.com/partners/agency?id=9338380351" target="_blank">
      <img src="https://www.gstatic.com/partners/badge/images/2021/PartnerBadgeClickable.svg"/>
  </a></div>
    </div>
    <p class="footer_text">© 2010-2022 MetalGroup. Все права защищены.</p>
`;
}




// banTopContainer.innerHTML += `
//     <div class="search-box">
//     <a class="search-btn">
//         <i class="fa fa-search"></i>
        
//     </a>
    
//     <input class="search-txt" autocomplete="off" id="txtSearch" type="text" name="" placeholder="Введите запрос..." >
//     <img class="icon" src="images/searching.png" style="width: 30px; height: 30px;">


//     </div>
// `
// const searchScript = document.createElement('script');
// searchScript.src = "js/smart-search.js"
// document.querySelector("body").appendChild(searchScript)

// const topNavRight = document.querySelector('.shop_content')

// let check = false;

// window.onclick = function(event) {
//     if (event.target === topNavRight || event.target === topNavRight.children[0] || event.target === topNavRight.children[0].children[0]) {
//         scroll(0, 300);
//     }
// }

// window.addEventListener("touchstart", function(event) {
//     if (event.target === topNavRight || event.target === topNavRight.children[0] || event.target === topNavRight.children[0].children[0]) {
//         scroll(0, 300);
//     }
// })








const footer_desc_1 = document.querySelector('.footer_desc_1');
const footer_desc_2 = document.querySelector('.footer_desc_2');
const footer_address = document.querySelector('.footer_address');

if (footer_desc_1 != null || footer_desc_2 || footer_address) {

    footer_desc_1.classList.add('_anim-items');
    footer_desc_1.classList.add('_anim-no-hide');
    footer_desc_2.classList.add('_anim-items');
    footer_desc_2.classList.add('_anim-no-hide');
    footer_address.classList.add('_anim-items');
    footer_address.classList.add('_anim-no-hide');
    const footer_logo = document.querySelectorAll('.footer_logo');
    if (footer_logo != null) {
        footer_logo.forEach(function(a) {
            a.classList.add('_anim-items');
            a.classList.add('_anim-no-hide');
        })
    }
  
}
// const titleInfo = document.querySelector('.title_info');
// if (titleInfo != null) {
//     titleInfo.classList.add('_anim-items');
//     titleInfo.classList.add('_anim-no-hide');
// }

// const mainProduct2 = document.querySelector('.main');

// if (mainProduct2 != null) {
//     item.classList.add('_anim-items');
//     item.classList.add('_anim-no-hide');
// }

const content_seo = document.querySelector('.content_seo');
if (content_seo != null) {
    content_seo.classList.add('_anim-items');
    content_seo.classList.add('_anim-no-hide');
}
const description_seo = document.querySelector('.description_seo');
const description_seo_ul = document.querySelectorAll('.seo_des');
if (description_seo_ul != null) {
    description_seo_ul.forEach(item => {
        item.classList.add('_anim-items');
        item.classList.add('_anim-no-hide');
    })
}

animationScroll()

function animationScroll() {
    const animItems = document.querySelectorAll('._anim-items');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);

        function animOnScroll(params) {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight + window.innerHeight / 2;

                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                    // animItem.classList.add('activeGiper');
                } else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft
            }
        }

        setTimeout(() => {
            animOnScroll();
        }, 300);
    }
}






const searchScript = document.createElement('script');
searchScript.src = "js/smart-search.js"
document.querySelector("body").appendChild(searchScript)

const topNavRight = document.querySelector('.shop_content')

let check = false;

const headePage = document.getElementById('header'); {
    /* <div class="form_search">
    <div class="finder">
        <div class="finder__outer">
            <div class="finder__inner search-box">
                <div class="finder__icon" ref="icon"></div>
                <input class="finder__input search-txt search-box-input" type="text"
                    autocomplete="off" id="txtSearch" name="" placeholder="Поиск по товарам" />
                <button class="search-btn">
                    <span>×</span>
                </button>
            </div>
        </div>
    </div>
    </div> */
}


headePage.innerHTML = `
<div class="container">
    <div class="header_topMenu">
        <div id="logo" class="logoPhoned">
            <a href="index.html"><img src="images/logo17.png" alt="" /></a>
        </div>

        <div class="header_topMenu_right">
            <div class="chernyi">
                <p><span style="color:#ffc843; font-weight:600">Звоните нам: </span><a
                        href="tel:87273449900">Алматы
                        8(727) <b>344 99 00</b></a></p>
                <p> <a href="tel:87172279900">Астана 8(7172) <b>27 99 00</b></a></p>
            </div>

            <!-- <div class="searchBox  search-box2">
                <input type="text" id="txtSearch2" placeholder="Я хочу найти... ">
                <div class="search search-btn2"></div>
            </div> -->
        </div>
    </div>
</div>

<div class="lineBg">
    <div class="linehead_back">
        <div class="linehead" id="header__menu__id">

            <div class="fond cat_menu_container">
                <div id="myfond_gris" opendiv="box_2" data-behaviour="toggle-menu-bg"
                    data-element="toggle-nav-bg">
                </div>
                <div iddiv="box_2" class="mymagicoverbox" data-behaviour="toggle-menu-icon">
                    <div class="categories"><a>Категории товаров</a></div>
                </div>
                <div id="box_2" class="mymagicoverbox_fenetre" data-element="toggle-nav">
                    <div class="mymagicoverbox_fenetreinterieur">
                        <ul>
                            <div class="hovering-title-wrapper">
                                <div>
                                    <li class="hovering-title"><a href="#"> Категории товаров</a> </li>
                                </div>
                                <div data-behaviour="toggle-menu-close">
                                    <span class="hovering-title_close">×</span>
                                </div>
                            </div>
                            <section class="categories-menu-container">
                                <nav class="categories-menu">
                                    <ul class="categories-menu-list">
                                        <a class=" nav__link" href="stellazhtor.html">

                                            <li id="98" class="categories-menu-item">
                                                <!-- <span class="hoveringArrow">➜</span> -->
                                                <p class="hovering hoveringCat"> Торговые стеллажи <span
                                                        class="navArrow">▶</span></p>
                                                <ul class="categories-menu-list-displaynone">
                                                    <a class="categories-menu-link" href="pristennyj-bazovyj.html">
                                                        <li id="11" class="sub-categories-menu-item ">
                                                            Торговые
                                                            стеллажи Premium </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="hleb.html">
                                                        <li id="12" class="sub-categories-menu-item ">
                                                            Хлебные
                                                            стеллажи</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="perfor.html">
                                                        <li id="13" class="sub-categories-menu-item ">
                                                            Перфорированные стеллажи</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="konfetnica.html">
                                                        <li id="14" class="sub-categories-menu-item ">
                                                            Cтеллажи
                                                            для сыпучего
                                                        </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="pristennyj bazovyj ultra.html">
                                                        <li id="15" class="sub-categories-menu-item ">
                                                            Торговые
                                                            стеллажи Ultra</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="pristennyj bazovyj mega.html">
                                                        <li id="16" class="sub-categories-menu-item">
                                                            Торговые
                                                            стеллажи Mega</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="pristennyj bazovyj massiv.html">
                                                        <li id="17" class="sub-categories-menu-item ">
                                                            Торговые
                                                            стеллажи Massiv</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="stellazh_ldsp.html">
                                                        <li id="18" class="sub-categories-menu-item  ">
                                                            Стеллажи из
                                                            ЛДСП, ДСП</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="accessories.html">
                                                        <li id="19" class="sub-categories-menu-item ">
                                                            Аксессуары для стеллажей</li>
                                                    </a>
                                                </ul>
                                            </li>
                                        </a>

                                        <a class="nav__link" href="sklad.html">

                                            <li id="99" class="categories-menu-item">
                                                <p class="hovering2 hoveringCat">Складские стеллажи <span
                                                        class="navArrow">▶</span></p>
                                                <ul id="10" class="categories-menu-list-displaynone">
                                                    <a class="categories-menu-link" href="stellazh 500.html">
                                                        <li id="20" class="sub-categories-menu-item ">
                                                            Архивные стеллажи с нагрузкой до 500кг</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="stellazh 900.html">
                                                        <li id="21" class="sub-categories-menu-item ">
                                                            Cкладские стеллажи с нагрузкой до 900кг</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="stellazh 2200.html">
                                                        <li id="22" class="sub-categories-menu-item ">
                                                            Cкладские стеллажи до 1500кг на зацепах</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="stellazh 4000.html">
                                                        <li id="23" class="sub-categories-menu-item ">
                                                            Cкладские стеллажи до 3500кг на зацепах
                                                        </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="stellazh_nerjaveika.html">
                                                        <li id="24" class="sub-categories-menu-item ">
                                                            Cтеллажи из нержавейки </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="sklad_stellazh_ldsp.html">
                                                        <li id="25" class="sub-categories-menu-item ">
                                                            Складские стеллажи из ЛДСП</li>
                                                    </a>
                                                </ul>
                                            </li>
                                        </a>

                                        <a class=" nav__link" href="pallet.html">
                                            <li id="100" class="categories-menu-item">
                                                <p class="hovering3 hoveringCat"> Паллетные стеллажи <span
                                                        class="navArrow">▶</span></p>
                                                <ul id="10" class="categories-menu-list-displaynone">
                                                    <a class="categories-menu-link" href="front.html">
                                                        <li id="26" class="sub-categories-menu-item ">
                                                            Фронтальные стеллажи</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="glubin.html">
                                                        <li id="27" class="sub-categories-menu-item ">
                                                            Набивные (глубинные) стеллажи </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="mezon.html">
                                                        <li id="28" class="sub-categories-menu-item ">
                                                            Мезонинные стеллажи</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="acc_pallet.html">
                                                        <li id="29" class="sub-categories-menu-item ">
                                                            Аксессуары для паллетных стеллажей
                                                        </li>
                                                    </a>
                                                </ul>
                                            </li>
                                        </a>



                                        <a class=" nav__link" href="vitrina.html">
                                            <li id="101" class="categories-menu-item">
                                                <p class="hovering4 hoveringCat"> Витрины <span
                                                        class="navArrow">▶</span></p>
                                                <ul id="10" class="categories-menu-list-displaynone">
                                                    <a class="categories-menu-link" href="classic.html">
                                                        <li id="30" class="sub-categories-menu-item ">
                                                            Профильные торговые витрины и прилавки</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="steklo.html">
                                                        <li id="31" class="sub-categories-menu-item ">
                                                            Стеклянные витрины островного типа</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="steklo2.html">
                                                        <li id="32" class="sub-categories-menu-item ">
                                                            Стеклянные витрины</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="pavil.html">
                                                        <li id="33" class="sub-categories-menu-item ">
                                                            Торговые павильоны
                                                        </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="nostandard.html">
                                                        <li id="34" class="sub-categories-menu-item ">
                                                            Нестандартные витрины и прилавки</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="dopvitrina.html">
                                                        <li id="35" class="sub-categories-menu-item ">
                                                            Дополнительная комплектация витрин</li>
                                                    </a>
                                                </ul>
                                            </li>
                                        </a>


                                        <a class=" nav__link" href="mebel_butik.html">
                                            <li id="102" class="categories-menu-item">
                                                <p class="hovering5 hoveringCat"> Мебель для бутика и аптеки
                                                    <span class="navArrow">▶</span>
                                                </p>
                                                <ul id="10" class="categories-menu-list-displaynone">
                                                    <a class="categories-menu-link" href="butik.html">
                                                        <li id="36" class="sub-categories-menu-item  ">
                                                            Мебель для бутика</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="apteka.html">
                                                        <li id="37" class="sub-categories-menu-item ">
                                                            Оборудование для аптек</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="garderob.html">
                                                        <li id="38" class="sub-categories-menu-item  ">
                                                            Гардеробные системы</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="office.html">
                                                        <li id="39" class="sub-categories-menu-item ">
                                                            Офисная мебель
                                                        </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="front_desk.html">
                                                        <li id="40" class="sub-categories-menu-item ">
                                                            Ресепшн, Барные стойки</li>
                                                    </a>
                                                </ul>
                                            </li>
                                        </a>

                                        <a class=" nav__link" href="obor.html">
                                            <li id="103" class="categories-menu-item">
                                                <p class="hovering6 hoveringCat"> Торговое оборудование <span
                                                        class="navArrow">▶</span></p>
                                                <ul id="10" class="categories-menu-list-displaynone">
                                                    <a class="categories-menu-link" href="stellazhtor.html">
                                                        <li id="41" class="sub-categories-menu-item ">
                                                            Торговые стеллажи</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="telezhka.html">
                                                        <li id="42" class="sub-categories-menu-item ">
                                                            Покупательские тележки, корзины и турникеты</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="setchatoe.html">
                                                        <li id="43" class="sub-categories-menu-item ">
                                                            Сетчатое торговое оборудование</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="mebel_butik.html">
                                                        <li id="44" class="sub-categories-menu-item  ">
                                                            Мебель для бутика и аптеки</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="econompanel.html">
                                                        <li id="45" class="sub-categories-menu-item  ">
                                                            Экономпанели
                                                        </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="garderob.html">
                                                        <li id="46" class="sub-categories-menu-item  ">
                                                            Гардеробные системы</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="joker.html">
                                                        <li id="47" class="sub-categories-menu-item  ">
                                                            Хромированные трубы и аксессуары</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="atlant.html">
                                                        <li id="48" class="sub-categories-menu-item  ">
                                                            Навесное торговое оборудование "Атлант"</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="accector.html">
                                                        <li id="49" class="sub-categories-menu-item  ">
                                                            Аксессуары для торговли</li>
                                                    </a>

                                                    <a class="categories-menu-link" href="kassovyie_boksyi.html">
                                                        <li id="50" class="sub-categories-menu-item  ">
                                                            Кассовые боксы</li>
                                                    </a>

                                                    <a class="categories-menu-link" href="eas.html">
                                                        <li id="51" class="sub-categories-menu-item  ">
                                                            Противокражные системы</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="pos_obor.html">
                                                        <li id="52" class="sub-categories-menu-item  ">
                                                            POS оборудование</li>
                                                    </a>
                                                </ul>
                                            </li>
                                        </a>

                                        <a class=" nav__link" href="holod.html">
                                            <li id="104" class="categories-menu-item">
                                                <p class="hovering7 hoveringCat"> Холодильное оборудование <span
                                                        class="navArrow">▶</span></p>
                                                <ul id="10" class="categories-menu-list-displaynone">
                                                    <a class="categories-menu-link" href="holodilnye_shkafy.html">
                                                        <li id="53" class="sub-categories-menu-item  ">
                                                            Холодильные шкафы</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="holodilnye_vitriny.html">
                                                        <li id="54" class="sub-categories-menu-item  ">
                                                            Холодильные витрины</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="pristennye_holodilnye_vitriny.html">
                                                        <li id="55" class="sub-categories-menu-item  ">
                                                            Пристенные холодильные витрины</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="ostrovnye_holodilnye_vitriny.html">
                                                        <li id="56" class="sub-categories-menu-item  ">
                                                            Бонеты
                                                        </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="morozilnye_lari.html">
                                                        <li id="57" class="sub-categories-menu-item  ">
                                                            Морозильные лари</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="konditerskie.html">
                                                        <li id="58" class="sub-categories-menu-item  ">
                                                            Кондитерские витрины</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="nastolnye_vitriny.html">
                                                        <li id="59" class="sub-categories-menu-item  ">
                                                            Настольные витрины</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="holodilnye_stoly.html">
                                                        <li id="60" class="sub-categories-menu-item  ">
                                                            Холодильные столы</li>
                                                    </a>

                                                    <a class="categories-menu-link" href="holod_camera.html">
                                                        <li id="61" class="sub-categories-menu-item  ">
                                                            Холодильная камера</li>
                                                    </a>

                                                    <a class="categories-menu-link" href="holod_ustanovka.html">
                                                        <li id="62" class="sub-categories-menu-item  ">
                                                            Холодильные установки</li>
                                                    </a>
                                                </ul>
                                            </li>
                                        </a>


                                        <a class=" nav__link" href="neutral.html">
                                            <li id="119" class="categories-menu-item">
                                                <p class="hovering8 hoveringCat"> Нейтральное оборудование<span
                                                        class="navArrow">▶</span></p>
                                                <ul id="10" class="categories-menu-list-displaynone">
                                                    <a class="categories-menu-link" href="stoly_nerjaveika.html">
                                                        <li id="110" class="sub-categories-menu-item  ">
                                                            Столы из нержавейки</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="poverhnost.html">
                                                        <li id="111" class="sub-categories-menu-item  ">
                                                            Поверхности рабочие</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="moika.html">
                                                        <li id="112" class="sub-categories-menu-item  ">
                                                            Мойки из нержавейки</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="stellazh_nerjaveika.html">
                                                        <li id="113" class="sub-categories-menu-item  ">
                                                            Стеллажи из нержавейки
                                                        </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="polki.html">
                                                        <li id="114" class="sub-categories-menu-item  ">
                                                            Полки и подставки</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="telezhki_protivnei.html">
                                                        <li id="115" class="sub-categories-menu-item  ">
                                                            Тележки для противней</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="ventilyaciya.html">
                                                        <li id="116" class="sub-categories-menu-item  ">
                                                            Вентиляционные зонты</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="podvec.html">
                                                        <li id="117" class="sub-categories-menu-item  ">
                                                            Подвесы для туш</li>
                                                    </a>

                                                    <a class="categories-menu-link" href="holod_prilavok.html">
                                                        <li id="118" class="sub-categories-menu-item  ">
                                                            Неохлаждаемые прилавки</li>
                                                    </a>

                                                </ul>
                                            </li>
                                        </a>



                                        <a class=" nav__link" href="pos_obor.html">
                                            <li id="106" class="categories-menu-item">
                                                <p class="hovering9 hoveringCat"> POS оборудование <span
                                                        class="navArrow">▶</span></p>
                                                <ul id="10" class="categories-menu-list-displaynone">
                                                    <a class="categories-menu-link" href="pos.html">
                                                        <li id="63" class="sub-categories-menu-item  ">
                                                            POS системы</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="scanner.html">
                                                        <li id="64" class="sub-categories-menu-item  ">
                                                            Сканеры штрих кодов</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="printer.html">
                                                        <li id="65" class="sub-categories-menu-item  ">
                                                            Принтеры чеков, этикеток</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="scale.html">
                                                        <li id="66" class="sub-categories-menu-item  ">
                                                            Весы электронные
                                                        </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="till.html">
                                                        <li id="67" class="sub-categories-menu-item  ">
                                                            Денежные ящики </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="terminal.html">
                                                        <li id="68" class="sub-categories-menu-item  ">
                                                            Терминалы сбора данных</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="schetchiki.html">
                                                        <li id="69" class="sub-categories-menu-item  ">
                                                            Счетчики банкнот</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="detector.html">
                                                        <li id="70" class="sub-categories-menu-item  ">
                                                            Детекторы банкнот</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="rkeeper.html">
                                                        <li id="71" class="sub-categories-menu-item  ">
                                                            Программное обеспечение R-keeper </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="1c.html">
                                                        <li id="72" class="sub-categories-menu-item  ">
                                                            Программное обеспечение 1С </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="umag.html">
                                                        <li id="73" class="sub-categories-menu-item  ">
                                                            Программное обеспечение Umag</li>
                                                    </a>
                                               
                                                </ul>
                                            </li>
                                        </a>

                                        <a class=" nav__link" href="kassovyie_boksyi.html">
                                            <li id="107" class="categories-menu-item">
                                                <p class="hovering10 hoveringCat"> Кассовые боксы <span
                                                        class="navArrow">▶</span></p>
                                                <ul id="10" class="categories-menu-list-displaynone">
                                                    <a class="categories-menu-link" href="kassovyie_boksyi9.html">
                                                        <li id="75" class="sub-categories-menu-item  ">
                                                            Кассовый бокс универсальный</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="kassovyie_boksyi10.html">
                                                        <li id="76" class="sub-categories-menu-item  ">
                                                            Кассовый бокс с глубоким накопителем</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="kassovyie_boksyi11.html">
                                                        <li id="77" class="sub-categories-menu-item  ">
                                                            Кассовый бокс с широким накопителем</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="kassovyie_boksyi12.html">
                                                        <li id="78" class="sub-categories-menu-item  ">
                                                            Кассовый бокс с транспортером
                                                        </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="kassovyie_boksyi13.html">
                                                        <li id="79" class="sub-categories-menu-item  ">
                                                            Кассовый бокс с удлиненным транспортером</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="kassovyie_boksyi14.html">
                                                        <li id="80" class="sub-categories-menu-item  ">
                                                            Кассовый бокс с денежным ящиком</li>
                                                    </a>
                                                </ul>
                                            </li>
                                        </a>

                                        <a class=" nav__link" href="met_shkaf.html">

                                            <li id="1077" class="categories-menu-item">
                                                <p class="hovering11 hoveringCat"> Металлические шкафы <span
                                                        class="navArrow">▶</span></p>
                                                <ul id="10" class="categories-menu-list-displaynone">
                                                    <a class="categories-menu-link" href="shkaf_odejda.html">
                                                        <li id="81" class="sub-categories-menu-item  ">
                                                            Металлические шкафы для одежды</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="shkaf_doc.html">
                                                        <li id="82" class="sub-categories-menu-item  ">
                                                            Металлические шкафы для документов</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="shkaf_buh.html">
                                                        <li id="83" class="sub-categories-menu-item  ">
                                                            Бухгалтерские шкафы</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="shkaf_kart.html">
                                                        <li id="84" class="sub-categories-menu-item  ">
                                                            Картотечные шкафы
                                                        </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="shkaf_med.html">
                                                        <li id="85" class="sub-categories-menu-item  ">
                                                            Металлические медицинские шкафы </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="shkaf_sum.html">
                                                        <li id="86" class="sub-categories-menu-item  ">
                                                            Шкафы для сумок (сумочницы)</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="pochta_yachik.html">
                                                        <li id="87" class="sub-categories-menu-item  ">
                                                            Почтовые ящики, ключницы </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="verstak.html">
                                                        <li id="88" class="sub-categories-menu-item  ">
                                                            Верстаки и аксессуары</li>
                                                    </a>
                                                </ul>
                                            </li>
                                        </a>
                                        <a class=" nav__link" href="horest.html">
                                            <li id="108" class="categories-menu-item">
                                                <p class="hovering12 hoveringCat"> Профессиональное кухонное
                                                    оборудование <span class="navArrow">▶</span></p>
                                                <ul id="10" class="categories-menu-list-displaynone">
                                                    <a class="categories-menu-link" href="teplovoe.html">
                                                        <li id="89" class="sub-categories-menu-item  ">
                                                            Тепловое оборудование</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="salat_bary.html">
                                                        <li id="90" class="sub-categories-menu-item  ">
                                                            Салат бары</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="linii_razdachi.html">
                                                        <li id="91" class="sub-categories-menu-item  ">
                                                            Линии раздачи</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="gastroemkosti.html">
                                                        <li id="92" class="sub-categories-menu-item  ">
                                                            Гастроемкости
                                                        </li>
                                                    </a>
                                                    <a class="categories-menu-link" href="combi_steamer.html">
                                                        <li id="93" class="sub-categories-menu-item  ">
                                                            Пароконвектоматы</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="mixer.html">
                                                        <li id="94" class="sub-categories-menu-item  ">
                                                            Миксеры, блендеры</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="kipyatilniki.html">
                                                        <li id="95" class="sub-categories-menu-item  ">
                                                            Кипятильники</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="gril.html">
                                                        <li id="96" class="sub-categories-menu-item  ">
                                                            Установки для "Шаурма", Грили для кур</li>
                                                    </a>
                                                    <a class="categories-menu-link" href="neutral.html">
                                                        <li id="97" class="sub-categories-menu-item  ">
                                                            Нейтральное оборудование</li>
                                                    </a>
                                                </ul>
                                            </li>
                                        </a>
                                    </ul>
                                </nav>
                                <div class="categories-menu-details">
                                    <div class="categories-menu-details-right">
                                        <div class="categories-menu-detail-img-active">
                                       <div class="categoriesPhoto">
                                        <div class="sub-img-active">
                                            <img id="" src="" alt="">
                                        </div>
                                       </div>
                                            <div class="category-images-display-none">
                                                <img id="11" src="images/torg.png" alt="">
                                                <img id="12" src="images/13.png" alt="">
                                                <img id="13" src="images/14.png" alt="">
                                                <img id="14" src="images/15.png" alt="">
                                                <img id="15" src="images/opt.png" alt="">
                                                <img id="16" src="images/mgvs.png" alt="">
                                                <img id="17" src="images/mnvs.png" alt="">
                                                <img id="18" src="images/ldcp.png" alt="">
                                                <img id="19" src="images/33.png" alt="">
                                                <img id="20" src="images/sklad_500_1.png" alt="">
                                                <img id="21" src="images/sklad_900_1.png" alt="">
                                                <img id="22" src="images/sklad_2200.png" alt="">
                                                <img id="23" src="images/sklad_4000.png" alt="">
                                                <img id="24" src="images/sklad_nerjaveika.png" alt="">
                                                <img id="25" src="images/ldsp.png" alt="">
                                                <img id="26" src="images/pallet1.png" alt="">
                                                <img id="27" src="images/pallet2.png" alt="">
                                                <img id="28" src="images/pallet3.png" alt="">
                                                <img id="29" src="images/pallet4.png" alt="">
                                                <img id="30" src="images/100.png" alt="">
                                                <img id="31" src="images/105.png" alt="">
                                                <img id="32" src="images/104.png" alt="">
                                                <img id="33" src="images/101.png" alt="">
                                                <img id="34" src="images/102.png" alt="">
                                                <img id="35" src="images/103.png" alt="">
                                                <img id="36" src="images/odejda.png" alt="">
                                                <img id="37" src="images/apteka.png" alt="">
                                                <img id="38" src="images/garderob.png" alt="">
                                                <img id="39" src="images/office.png" alt="">
                                                <img id="40" src="images/front_desk.png" alt="">
                                                <img id="41" src="images/tor11.png" alt="">
                                                <img id="42" src="images/telezhka.png" alt="">
                                                <img id="43" src="images/setchatoe.png" alt="">
                                                <img id="44" src="images/pharmacy1.png" alt="">
                                                <img id="45" src="images/4.png" alt="">
                                                <img id="46" src="images/garderob.png" alt="">
                                                <img id="47" src="images/joker.png" alt="">
                                                <img id="48" src="images/atlant.png" alt="">
                                                <img id="49" src="images/accec.png" alt="">
                                                <img id="50" src="images/kass.png" alt="">
                                                <img id="51" src="images/eas.png" alt="">
                                                <img id="52" src="images/poss.png" alt="">
                                                <img id="53" src="images/thumbs/holod/1.png" alt="">
                                                <img id="54" src="images/thumbs/holod/2.png" alt="">
                                                <img id="55" src="images/thumbs/holod/3.png" alt="">
                                                <img id="56" src="images/thumbs/holod/4.png" alt="">
                                                <img id="57" src="images/thumbs/holod/5.png" alt="">
                                                <img id="58" src="images/thumbs/holod/6.png" alt="">
                                                <img id="59" src="images/thumbs/holod/7.png" alt="">
                                                <img id="60" src="images/thumbs/holod/8.png" alt="">
                                                <img id="61" src="images/thumbs/holod/10.png" alt="">
                                                <img id="62" src="images/thumbs/holod/11.png" alt="">
                                                <img id="63" src="images/pos.png" alt="">
                                                <img id="64" src="images/scanner.png" alt="">
                                                <img id="65" src="images/printer.png" alt="">
                                                <img id="66" src="images/scale.png" alt="">
                                                <img id="67" src="images/till.png" alt="">
                                                <img id="68" src="images/terminal.png" alt="">
                                                <img id="69" src="images/schetchiki.png" alt="">
                                                <img id="70" src="images/detector.png" alt="">
                                                <img id="71" src="images/rkeep.png" alt="">
                                                <img id="72" src="images/1c.png" alt="">
                                                <img id="73" src="images/umag.png" alt="">
                                                <img id="74" src="images/quickresto.svg" alt="">
                                                <img id="75" src="images/fulls/kas/shtrih55.png" alt="">
                                                <img id="76" src="images/fulls/kas/shtrih22.png" alt="">
                                                <img id="77" src="images/fulls/kas/shtrih33.png" alt="">
                                                <img id="78" src="images/fulls/kas/shtrih44.png" alt="">
                                                <img id="79" src="images/fulls/kas/shtrih55.png" alt="">
                                                <img id="80" src="images/fulls/kas/shtrih66.png" alt="">
                                                <img id="81" src="images/5.png" alt="">
                                                <img id="82" src="images/2.png" alt="">
                                                <img id="83" src="images/6.png" alt="">
                                                <img id="84" src="images/10.png" alt="">
                                                <img id="85" src="images/medical.png" alt="">
                                                <img id="86" src="images/8.png" alt="">
                                                <img id="87" src="images/pochta.png" alt="">
                                                <img id="88" src="images/9.png" alt="">
                                                <img id="89" src="images/thumbs/horest/1.png" alt="">
                                                <img id="90" src="images/thumbs/horest/2.png" alt="">
                                                <img id="91" src="images/thumbs/horest/3.png" alt="">
                                                <img id="92" src="images/thumbs/horest/4.png" alt="">
                                                <img id="93" src="images/thumbs/horest/parokonvektomat.png"
                                                    alt="">
                                                <img id="94" src="images/thumbs/horest/5.png" alt="">
                                                <img id="95" src="images/thumbs/horest/6.png" alt="">
                                                <img id="96" src="images/thumbs/horest/7.png" alt="">
                                                <img id="97" src="images/thumbs/horest/8.png" alt="">
                                                <img id="98" src="images/tor1.png" alt="">
                                                <img id="99" src="images/stellazh 1.png" alt="">
                                                <img id="100" src="images/pallet.png" alt="">
                                                <img id="101" src="images/vit.png" alt="">
                                                <img id="102" src="images/pharmacy.png" alt="">
                                                <img id="103" src="images/1.png" alt="">
                                                <img id="104" src="images/12.png" alt="">
                                                <img id="105" src="images/neutral.png" alt="">
                                                <img id="106" src="images/poss.png" alt="">
                                                <img id="107" src="images/kas.png" alt="">
                                                <img id="1077" src="images/7.png" alt="">
                                                <!-- <img id="108" src="images/7.png" alt=""> -->
                                                <img id="108" src="images/16.png" alt="">

                                                <img id="110" src="images/thumbs/neutral/1.png" alt="">
                                                <img id="111" src="images/thumbs/horest/poverh.png" alt="">
                                                <img id="112" src="images/thumbs/neutral/2.png" alt="">
                                                <img id="113" src="images/thumbs/neutral/3.png" alt="">
                                                <img id="114" src="images/thumbs/neutral/4.png" alt="">
                                                <img id="115" src="images/thumbs/neutral/5.png" alt="">
                                                <img id="116" src="images/thumbs/neutral/6.png" alt="">
                                                <img id="117" src="images/thumbs/neutral/7.png" alt="">
                                                <img id="118" src="images/thumbs/holod/9.png" alt="">
                                                <img id="119" src="images/neutral.png" alt="">
                                   


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </ul>
                    </div>
                </div>

            </div>

            <div class="menu_lists  navigation">

                <ul class="menu">
                    <li class=" glavnaya_menu btn-15"><a href="index.html"><span>Главная</span></a>
                    </li>
                    <li class="tovary_menu btn-15 "><a href="products.html"><span>Товары</span></a></li>
                    <li class="news_menu"><a href="news.html"><span>Новости</span></a></li>
                    <li class="design_menu"><a href="des.html"><span>Проекты</span></a></li>
                    <li class="dostavka_menu"><a href="services.html"><span>Доставка</span></a></li>
                    <li class="otzyvy_menu"><a href="otzovik.php"><span>Отзывы</span></a></li>
                    <li class="about_menu"><a href="about.html"><span>О нас</span></a></li>
                    <li class="dealer_menu"><a href="dealer.php"><span>Дилерам</span></a></li>
                    <li class="contact_menu"><a href="contact.html"><span>Контакты</span></a></li>


                    <!-- <input type="text" id="txtSearch2" placeholder="Я хочу найти... ">
                    <div class="search search-btn2"></div> -->

                </ul>
            </div>
            <!-- <div class="search-box2">
                <input type="text" placeholder=" "/>
                <button type="reset"></button>
            </div> -->




        </div>
    </div>
</div>
`;
