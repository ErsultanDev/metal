-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Май 04 2018 г., 17:41
-- Версия сервера: 5.5.52-MariaDB-cll-lve
-- Версия PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `v_20478_metal`
--

-- --------------------------------------------------------

--
-- Структура таблицы `last`
--

CREATE TABLE `last` (
  `keywords` varchar(255) CHARACTER SET utf8 NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `link` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `last`
--

INSERT INTO `last` (`keywords`, `name`, `link`) VALUES
('1001 1002 1003 1004 1005 1006 premium', 'premium', 'premium.html'),
('1007 1008 1009 1010 ultra', 'ultra', 'ultra.html'),
('1011 1012 1013 1014 mega', 'mega', 'mega.html'),
('1039 ХЛЕБНЫЕ СТЕЛЛАЖИ', 'ХЛЕБНЫЕ СТЕЛЛАЖИ', 'hleb.html'),
('1040 Перфорированные стеллажи', 'Перфорированные стеллажи', 'perfor.html'),
('1041 Cтеллажи для конфет', 'Cтеллажи для конфет', 'konfetnica.html'),
('1015 1016 1017 1018 1019 1020 massiv', 'massiv', 'massiv.html'),
('1021 1022 1023 1024 1025 1026 1027 1028 1029 1030 1031 1032 1033 1034 1035 1036 1037 1038 аксессуары', 'аксессуары для торговых стеллажей', 'accessories.html'),
('2001 2002 2003 2004 складские стеллажи', 'складские стеллажи', 'sklad_stellazh.html'),
('2005 2006 2007 2008 2009 2010 2011 2012 2013 2014 аксессуары для складских стеллажей', 'аксессуары для складских стеллажей', 'acc_sklad_stellazh.html'),
('3001 фронтальные стеллажи', 'фронтальные стеллажи', 'front.html'),
('3002 глубинные стеллажи', 'глубинные стеллажи', 'glubin.html'),
('3003 мезонины', 'мезонины', 'mezon.html'),
('3004 3005 3006 3007 3008 3009 3010 3011 \r\nаксессуары для паллетных стеллажей', 'аксессуары для паллетных стеллажей', 'acc_pallet.html'),
('4001 4002 4003 4004 ПРИСТЕННЫЕ КОНСТРУКЦИИ ИЗ ТРУБЫ', 'ПРИСТЕННЫЕ КОНСТРУКЦИИ ИЗ ТРУБЫ', 'pristen.html'),
('4005 4006 4007 4008 4009 ОСТРОВНЫЕ КОНСТРУКЦИИ ИЗ ТРУБЫ', 'ОСТРОВНЫЕ КОНСТРУКЦИИ ИЗ ТРУБЫ', 'ostrov.html'),
('ИНДИВИДУАЛЬНЫЕ КОНСТРУКЦИИ ИЗ ТРУБЫ\r\n4010 4011 4012 4013 4014 4015 4016 4017 4018', 'ИНДИВИДУАЛЬНЫЕ КОНСТРУКЦИИ ИЗ ТРУБЫ', 'indiv.html'),
('4019 4020 4021 4022 4023 4024 4025 4026\r\nСТОЙКИ ДЛЯ ОДЕЖДЫ ', 'СТОЙКИ ДЛЯ ОДЕЖДЫ ИЗ ТРУБЫ', 'stoiki.html'),
('4027 4028 4029 4030 ПРИМЕРОЧНЫЕ ', 'ПРИМЕРОЧНЫЕ ИЗ ТРУБЫ', 'primerka.html'),
('4031 4032 4033 ТЕЛЕЖКИ', 'ТЕЛЕЖКИ ПОКУПАТЕЛЬСКИЕ', 'telezhka.html'),
('4034 4035 КОРЗИНЫ ', 'КОРЗИНЫ ПОКУПАТЕЛЬСКИЕ', 'korzina.html'),
('СТОЙКИ НАВЕСНЫЕ 4036 4037 4038', 'СТОЙКИ НАВЕСНЫЕ', 'stoika.html'),
('4039 4040 КРОНШТЕЙНЫ НА НАВЕСНЫЕ СТОЙКИ', 'КРОНШТЕЙНЫ НА НАВЕСНЫЕ СТОЙКИ', 'kronshtein.html'),
('4041 4042 4043 4044 4045 4046 4047 4048 4049 4050 ВЕШАЛА НА НАВЕСНЫЕ СТОЙКИ', 'ВЕШАЛА НА НАВЕСНЫЕ СТОЙКИ', 'veshala.html'),
('4051 4052 ПЛАНКИ НА НАВЕСНЫЕ СТОЙКИ', 'ПЛАНКИ НА НАВЕСНЫЕ СТОЙКИ', 'planki.html'),
('4053 4054 4055 РАЗНОЕ', 'РАЗНОЕ', 'raznoe.html'),
('4056 4057 4058 4059 ИНФОРМАЦИОННЫЕ РАМКИ', 'ИНФОРМАЦИОННЫЕ РАМКИ', 'inform.html'),
('ДЕРЖАТЕЛИ РАМКИ 4060 4061 4062 4063 4064 4065 4066 4067 4068', 'ДЕРЖАТЕЛИ РАМКИ', 'derjram.html'),
('4069 4070 4071 4072 4073 4074 4075 4076 4077 4078 4079 4080 ДЕРЖАТЕЛИ ИНФОРМАЦИИ', 'ДЕРЖАТЕЛИ ИНФОРМАЦИИ', 'derjinform.html'),
('4081 4082 РЕШЕТКИ ТОРГОВЫЕ', 'РЕШЕТКИ ТОРГОВЫЕ', 'reshetka.html'),
('4083 4084 4085 4086 4093 МАНЕЖИ ТОРГОВЫЕ\r\n', 'ТОРГОВЫЕ МАНЕЖИ\r\n', 'manezhcel.html'),
('4087 4088 4089 4090 4091 4092 МАНЕЖИ UNO', 'МАНЕЖИ UNO', 'manezhsbor.html'),
('4601 4602 4603 4604 СТЕЛЛАЖИ СЕТЧАТЫЕ', 'СТЕЛЛАЖИ СЕТЧАТЫЕ', 'setchstel.html'),
('4701 4702 4703 ТОРГОВЫЕ СТОЙКИ', 'ТОРГОВЫЕ СТОЙКИ', 'torgovaya_stoika.html'),
('4801 4802 4803 БУКЛЕТНИЦА', 'БУКЛЕТНИЦЫ', 'bukletnica.html'),
('4094 4095 4096 4097 4098 4099 4100 КОМПЛЕКТУЮЩИЕ НА СЕТЧАТОЕ ОБОРУДОВАНИЕ', 'КОМПЛЕКТУЮЩИЕ НА СЕТЧАТОЕ ОБОРУДОВАНИЕ', 'complect.html'),
('5001 5002 5003 5004 5005 4ГРАННЫЕ', '4-ГРАННЫЕ ТОРГОВЫЕ ВИТРИНЫ И ПРИЛАВКИ', '4gran.html'),
('5006 5007 5008 5009 5ГРАННЫЕ', '5-ГРАННЫЕ ТОРГОВЫЕ ВИТРИНЫ И ПРИЛАВКИ', '5gran.html'),
('5010 5011 5012 5013 5014 5015 6ГРАННЫЕ', '6-ГРАННЫЕ ТОРГОВЫЕ ВИТРИНЫ И ПРИЛАВКИ\r\n', '6gran.html'),
('8ГРАННЫЕ 5016 5017 5018 5019', '8-ГРАННЫЕ ТОРГОВЫЕ ВИТРИНЫ И ПРИЛАВКИ', '8gran.html'),
('5020 5021 5022 5023 5024 ТОРГОВЫЕ СТОЛЫ ДЛЯ КАССОВОЙ ЗОНЫ', 'ТОРГОВЫЕ СТОЛЫ ДЛЯ КАССОВОЙ ЗОНЫ', 'stol.html'),
('ТОРГОВЫЕ ПАВИЛЬОНЫ 5025 5026 5027', 'ТОРГОВЫЕ ПАВИЛЬОНЫ', 'pavil.html'),
('НЕСТАНДАРТНЫЕ ВИТРИНЫ И ПРИЛАВКИ \r\n5028 5029 5030 5031 5032 5033', 'НЕСТАНДАРТНЫЕ ВИТРИНЫ И ПРИЛАВКИ', 'nostandard.html'),
('5034 5035 5036 5037 5038 5039 5040 5041 5042 5043 5044 ДОПОЛНИТЕЛЬНАЯ КОМПЛЕКТАЦИЯ ', 'ДОПОЛНИТЕЛЬНАЯ КОМПЛЕКТАЦИЯ ТОРГОВЫХ ВИТРИН И ПРИЛАВКОВ', 'dopvitrina.html'),
('5045 5046 5047 5048 СТЕКЛЯННЫЕ ВИТРИНЫ', 'СТЕКЛЯННЫЕ ВИТРИНЫ', 'steklo.html'),
('6001 6002 6003 6004 6005 6006 6007 6008 6009 6010 6011 6012 6013 6014 6015 6016 6017 полотно', 'ПОЛОТНО ЭКОНОМПАНЕЛИ', 'polotno.html'),
('6018 6019 6020 6021 6022 6023 6024 6025 6026 6027 6028 6029 КОНСТРУКЦИИ ИЗ ЭКОНОМПАНЕЛИ', 'КОНСТРУКЦИИ ИЗ ЭКОНОМПАНЕЛИ', 'konstrukcii.html'),
('6030 6031 ФУРНИТУРА НА ЭКОНОМПАНЕЛЬ', 'ФУРНИТУРА НА ЭКОНОМПАНЕЛЬ', 'furnitura.html'),
('ВЕШАЛА НА ЭКОНОМПАНЕЛЬ 6032 6033 6034 6035 6036 6037 6038 6039 6040 6041 ', 'ВЕШАЛА НА ЭКОНОМПАНЕЛЬ', 'veshala_econom.html'),
('КРОНШТЕЙНЫ НА ЭКОНОМПАНЕЛЬ 6042 6043', 'КРОНШТЕЙНЫ НА ЭКОНОМПАНЕЛЬ', 'kronshtein_econom.html'),
('6044 6045 КРЮЧКИ НА ЭКОНОМПАНЕЛЬ', 'КРЮЧКИ НА ЭКОНОМПАНЕЛЬ', 'kruchki_econom.html'),
('6046 6047 ПЛАНКИ И ПОДСТАВКИ НА ЭКОНОМПАНЕЛЬ', 'ПЛАНКИ И ПОДСТАВКИ НА ЭКОНОМПАНЕЛЬ', 'planki_econom.html'),
('ШКАФЫ ДЛЯ ОДЕЖДЫ 7001 7002 7003 7004 7005 7006 7007 7008 7009 7010 7011\r\n', 'МЕТАЛЛИЧЕСКИЕ ШКАФЫ ДЛЯ ОДЕЖДЫ\r\n', 'shkaf_odejda.html'),
('8001 8002 8003 8004 8005 8006 8007 8008 8009 8010 8011 8012 8013 8014 8015 8016 8017 БУХГАЛТЕРСКИЕ ШКАФЫ бухгалтерский шкаф', 'МЕТАЛЛИЧЕСКИЕ БУХГАЛТЕРСКИЕ ШКАФЫ', 'shkaf_buh.html'),
('ШКАФЫ ДЛЯ ДОКУМЕНТОВ 9001 9002 9003 9004 9005 9006', 'МЕТАЛЛИЧЕСКИЕ ШКАФЫ ДЛЯ ДОКУМЕНТОВ', 'shkaf_doc.html'),
('1101 1102 1103 1104 1105 1106 1107 1108 1109 1110 1111 1112 ШКАФЫ ДЛЯ СУМОК СУМОЧНИЦЫ\r\n', 'МЕТАЛЛИЧЕСКИЕ ШКАФЫ ДЛЯ СУМОК (СУМОЧНИЦЫ)\r\n', 'shkaf_sum.html'),
('1201 1202 1203 1204 1205 1206 1207 ВЕРСТАКИ', 'МЕТАЛЛИЧЕСКИЕ ВЕРСТАКИ', 'met_verstak.html'),
('1208 1209 1210 1211 1212 1213 1214 1215 1216 1217 1218 1219 1220 АКСЕССУАРЫ ВЕРСТАКОВ', 'ЭЛЕМЕНТЫ И АКСЕССУАРЫ ВЕРСТАКОВ', 'acc_verstak.html'),
('КАРТОТЕЧНЫЕ ШКАФЫ КАРТОТЕКА, ФАЙЛ-КАБИНЕТ\r\n1301 1302 1303 1304 1305 1306', 'МЕТАЛЛИЧЕСКИЕ КАРТОТЕЧНЫЕ ШКАФЫ (КАРТОТЕКА, ФАЙЛ-КАБИНЕТ)', 'shkaf_kart.html'),
('1401 1402 1403 1404 1405 1406 ОГРАЖДЕНИЯ И АКСЕССУАРЫ', 'МЕТАЛЛИЧЕСКИЕ ОГРАЖДЕНИЯ И АКСЕССУАРЫ', 'fenx.html'),
('стеллажи стеллаж', 'Стеллажи', 'stellazh.html'),
('торговый стеллаж торговые стеллажи', 'Торговые стеллажи', 'stellazhtor.html'),
('складские стеллажи складской стеллаж', 'Складские стеллажи', 'sklad.html'),
('паллетные стеллажи паллетный стеллаж', 'Паллетные стеллажи', 'pallet.html'),
('оборудование торговое оборудование', 'Торговое Оборудование', 'obor.html'),
('витрины витрина', 'Витрины', 'vitrina.html'),
('экономпанель экономпанели', 'ЭКОНОМПАНЕЛИ ', 'econompanel.html'),
('верстак верстаки', 'ВЕРСТАКИ', 'verstak.html'),
('ДЖОКЕР ХРОМИРОВАННЫЕ ТРУБЫ', 'CЕРИЯ ДЖОКЕР ХРОМИРОВАННЫЕ ТРУБЫ', 'joker.html'),
('НАВЕСНОЕ ОБОРУДОВАНИЕ “АТЛАНТ”', 'НАВЕСНОЕ ТОРГОВОЕ ОБОРУДОВАНИЕ “АТЛАНТ”', 'atlant.html'),
('АКСЕССУАРЫ ДЛЯ ТОРГОВЛИ', 'АКСЕССУАРЫ ДЛЯ ТОРГОВЛИ', 'accector.html'),
('СЕТЧАТОЕ ТОРГОВОЕ ОБОРУДОВАНИЕ\r\n', 'СЕТЧАТОЕ ТОРГОВОЕ ОБОРУДОВАНИЕ\r\n', 'setchatoe.html'),
('КОМПЛЕКТУЮЩИЕ НА ЭКОНОМПАНЕЛЬ', 'КОМПЛЕКТУЮЩИЕ НА ЭКОНОМПАНЕЛЬ', 'complectuch.html'),
('4104', 'Кассовый бокс Light Universal Mini 150 красный', 'http://metalgroup.kz/kassovyie_boksyi4.html'),
('4106', 'Кассовый бокс Light Universal Mini 150 синий', 'http://metalgroup.kz/kassovyie_boksyi6.html'),
('4107', 'Кассовый бокс Light Universal Mini 150 серый', 'http://metalgroup.kz/kassovyie_boksyi7.html'),
('4108', 'Кассовый бокс Light Universal Mini 150 зеленый', 'http://metalgroup.kz/kassovyie_boksyi8.html'),
('4103', 'Кассовый бокс Light Universal Maxi 190 красный', 'http://metalgroup.kz/kassovyie_boksyi3.html'),
('4105', 'Кассовый бокс Light Universal Maxi 190 синий', 'http://metalgroup.kz/kassovyie_boksyi5.html'),
('4109', 'Кассовый бокс универсальный', 'http://metalgroup.kz/kassovyie_boksyi9.html'),
('4110', 'Кассовый бокс с глубоким накопителем', 'http://metalgroup.kz/kassovyie_boksyi10.html'),
('4111', 'Кассовый бокс с широким двойным накопителем', 'http://metalgroup.kz/kassovyie_boksyi11.html'),
('4112', 'Кассовый бокс с широким двойным накопителем и транспортером', 'http://metalgroup.kz/kassovyie_boksyi12.html'),
('4113', 'Кассовый бокс с широким двойным накопителем и удлиненным транспортером', 'http://metalgroup.kz/kassovyie_boksyi13.html'),
('4101', 'КАССОВЫЙ БОКС ОДИНАРНЫЙ', 'http://metalgroup.kz/kassovyie_boksyi1.html'),
('4102', 'КАССОВЫЙ БОКС ДВОЙНОЙ', 'http://metalgroup.kz/kassovyie_boksyi2.html'),
('1106', 'МЕТАЛЛИЧЕСКИЙ ШКАФ СЕКЦИОННЫЙ', 'http://metalgroup.kz/shkaf%20section.html'),
('9007', 'МЕТАЛЛИЧЕСКИЙ ШКАФ С ПОЛКАМИ', 'http://metalgroup.kz/shkaf%20polka.html'),
('9008', 'МЕТАЛЛИЧЕСКИЙ ШКАФ С ПОЛКАМИ', 'http://metalgroup.kz/shkaf%20polka%20odejda.html'),
('7012', 'Металлические шкафы для одежды', 'http://metalgroup.kz/shkaf%20odejda.html'),
('7013', 'МЕТАЛЛИЧЕСКИЙ ШКАФ ДЛЯ ОДЕЖДЫ', 'http://metalgroup.kz/shkaf%20odejda2.html'),
('d', '\0', '\0'),
('', '\0', '\0'),
('1502', 'Холодильный шкаф ШХ', 'http://metalgroup.kz/shx.html'),
('1503', 'Холодильный шкаф П-390С', 'http://metalgroup.kz/capri390c.html'),
('1504', 'Холодильный шкаф Capri П-490СК', 'http://metalgroup.kz/capri490ck.html'),
('1505', 'Холодильный шкаф Capri 0,5СК', 'http://metalgroup.kz/capri05ck.html'),
('1506', 'Холодильный шкаф ШХ 0,80С Купе', 'http://metalgroup.kz/capri080c.html'),
('1507', 'Холодильный шкаф ШХ 0,80С', 'http://metalgroup.kz/shx080c.html'),
('1508', 'Холодильный шкаф elton 0,7У купе', 'http://metalgroup.kz/elton07.html'),
('1509', 'Холодильный шкаф Capri 1,12СК Купе', 'http://metalgroup.kz/capri112ck.html'),
('1510', 'Холодильный шкаф Capri 1,5СК Купе', 'http://metalgroup.kz/capri15ck.html'),
('1511', 'Холодильный шкаф elton 1,5С Купе', 'http://metalgroup.kz/elton15c.html'),
('1512', 'Холодильный шкаф со стеклянными дверьми CARBOMA', 'http://metalgroup.kz/carboma.html'),
('1513', 'Шкаф для напитков Carboma', 'http://metalgroup.kz/holodilnyi_shkaf_carboma.html'),
('1514', 'Холодильные шкафы с металлическими дверьми CARBOMA', 'http://metalgroup.kz/carboma_shkaf_metal.html'),
('1601', 'Холодильная витрина ILET BXH', 'http://metalgroup.kz/holodilnaia_vitrina_bxh12.html'),
('1602', 'Холодильная витрина ILET BXC', 'http://metalgroup.kz/holodilnaia_vitrina_bxc.html'),
('1603', 'Холодильная витрина Nova ВХН', 'http://metalgroup.kz/holodilnaia_vitrina_080c.html'),
('1604', 'Холодильная витрина Tair ВХН', 'http://metalgroup.kz/holodilnaia_vitrina_tair.html'),
('1605', 'Холодильная витрина ILET BXCD', 'http://metalgroup.kz/holodilnaia_vitrina_bxcd.html'),
('1606', 'Холодильная витрина ILET BXCH', 'http://metalgroup.kz/holodilnaia_vitrina_bxch.html'),
('1607', 'Холодильная витрина ILET BXCHO', 'http://metalgroup.kz/holodilnaia_vitrina_bxcho.html'),
('1608', 'Холодильная витрина ВХС-УВ', 'http://metalgroup.kz/holodilnaia_vitrina_bhc_ub.html'),
('1609', 'Холодильная витрина ВХС-УH', 'http://metalgroup.kz/holodilnaia_vitrina_bhc_uh.html'),
('1610', 'Холодильная витрина ВХСo-УH', 'http://metalgroup.kz/holodilnaia_vitrina_bhco_uh.html'),
('1611', 'Холодильная витрина Tair ВХС-УН', 'http://metalgroup.kz/holodilnaia_vitrina_tair_bhc_uh.html'),
('1612', 'Холодильная витрина Tair ВХС-УВ', 'http://metalgroup.kz/holodilnaia_vitrina_tair_bhc_ub.html'),
('1613', 'Холодильная витрина Parabel ВХС', 'http://metalgroup.kz/holodilnaia_vitrina_parabel_bhc.html'),
('1614', 'Холодильная витрина Parabel ВХС-УВ', 'http://metalgroup.kz/holodilnaia_vitrina_parabel_bhc_ub.html'),
('1615', 'Холодильная витрина Parabel ВХС-УН', 'http://metalgroup.kz/holodilnaia_vitrina_parabel_bhc_uh.html'),
('1616', 'Холодильная витрина Parabel ВХСo', 'http://metalgroup.kz/holodilnaia_vitrina_parabel_bhco.html'),
('1617', 'Холодильная витрина CARBOMA GC95', 'http://metalgroup.kz/holodilnaia_vitrina_gc95.html'),
('1618', 'Холодильная витрина CARBOMA GC110', 'http://metalgroup.kz/holodilnaia_vitrina_gc110.html'),
('1619', 'Холодильная витрина CARBOMA закрытая', 'http://metalgroup.kz/holodilnaia_vitrina_carboma.html'),
('1620', 'Холодильная витрина ПОЛЮС', 'http://metalgroup.kz/holodilnaia_vitrina_polus.html'),
('1621', 'Холодильная витрина ЭКО MAXI', 'http://metalgroup.kz/holodilnaia_vitrina_eco_maxi.html'),
('1622', 'Холодильная витрина ЭКО MINI', 'http://metalgroup.kz/holodilnaia_vitrina_eco_mini.html'),
('1623', 'Холодильная витрина CARBOMA открытая', 'http://metalgroup.kz/holodilnaia_vitrina_carboma_open.html'),
('1701', 'Пристенная холодильная витрина Florence', 'http://metalgroup.kz/pristennaya_vitrina_florence.html'),
('1702', 'Пристенная холодильная витрина Varshava BXC', 'http://metalgroup.kz/pristennaya_vitrina_varshava_bhc.html'),
('1703', 'Пристенная холодильная витрина Varshava BXC фруктовая', 'http://metalgroup.kz/pristennaya_vitrina_varshava_bhc_fruit.html'),
('1705', 'Пристенная холодильная витрина Varshava BXCп-1,25', 'http://metalgroup.kz/pristennaya_vitrina_varshava_bhcp_125.html'),
('1706', 'Пристенная холодильная витрина Varshava BXC-1,875', 'http://metalgroup.kz/pristennaya_vitrina_varshava_bhc_1875.html'),
('1707', 'Пристенная холодильная витрина Kupes', 'http://metalgroup.kz/pristennaya_vitrina_kupes.html'),
('1708', 'Пристенная холодильная витрина Nova ВХСп', 'http://metalgroup.kz/pristennaya_vitrina_nova_bxcp.html'),
('1709', 'Пристенная холодильная витрина Varshava BXCп-1,875', 'http://metalgroup.kz/pristennaya_vitrina_varshava_bhcp_1875.html'),
('1710', 'Пристенная холодильная витрина Kupes ВХСп', 'http://metalgroup.kz/pristennaya_vitrina_kupes_bxcp.html'),
('1711', 'Пристенная холодильная витрина Florence ВХСп', 'http://metalgroup.kz/pristennaya_vitrina_florence_bxcp.html'),
('1712', 'Пристенная холодильная витрина Varshava BXCп-2,5', 'http://metalgroup.kz/pristennaya_vitrina_varshava_bhcp_25.html'),
('1713', 'Пристенная холодильная витрина Varshava торцевая', 'http://metalgroup.kz/pristennaya_vitrina_varshava_bhcp_torc.html'),
('1714', 'Пристенная холодильная витрина Varshava ВХСп-3,75', 'http://metalgroup.kz/pristennaya_vitrina_varshava_375.html'),
('1715', 'Пристенная холодильная витрина Varshava BXCнп-3,75', 'http://metalgroup.kz/pristennaya_vitrina_varshava_vhsnp_375.html'),
('1716', 'Пристенная холодильная витрина Barcelona', 'http://metalgroup.kz/pristennaya_vitrina_barcelona.html'),
('1717', 'Пристенная холодильная витрина CARBOMA CUBA', 'http://metalgroup.kz/pristennaya_vitrina_carboma_cuba.html'),
('1718', 'Пристенная холодильная витрина CARBOMA TOKYO', 'http://metalgroup.kz/pristennaya_vitrina_carboma_tokyo.html'),
('1719', 'Полувертикальная холодильная витрина CARBOMA BRITANY', 'http://metalgroup.kz/pristennaya_vitrina_carboma_britany.html'),
('1720', 'Пристенная холодильная витрина CARBOMA CRETE', 'http://metalgroup.kz/pristennaya_vitrina_carboma_crete.html'),
('1721', 'Пристенная холодильная витрина CARBOMA PROVANCE', 'http://metalgroup.kz/pristennaya_vitrina_carboma_provance.html'),
('1722', 'Пристенная холодильная витрина ПОЛЮС', 'http://metalgroup.kz/pristennaya_vitrina_carboma_polus.html'),
('1801', 'Бонета Kalipso', 'http://metalgroup.kz/boneta_kalipso.html'),
('1803', 'Бонета Кupec', 'http://metalgroup.kz/boneta_kupec.html'),
('1804', 'Бонета Malta', 'http://metalgroup.kz/boneta_malta.html'),
('1805', 'Бонета Rica', 'http://metalgroup.kz/boneta_rica.html'),
('1806', 'Бонета Bonvini (со съемными створками)', 'http://metalgroup.kz/boneta_bonvini.html'),
('1807', 'Бонета BFG с гнутым стеклом', 'http://metalgroup.kz/boneta_bfg.html'),
('1808', 'Бонета BFG торцевая', 'http://metalgroup.kz/boneta_torc.html'),
('1809', 'Бонета BF', 'http://metalgroup.kz/boneta_bf.html'),
('2100', 'Морозильный ларь с гнутым стеклом красный', 'http://metalgroup.kz/morozilnyi_lar_gnutyi.html'),
('2103', 'Морозильный ларь с гнутым стеклом синий', 'http://metalgroup.kz/morozilnyi_lar_gnutyi_siniy.html'),
('2104', 'Морозильный ларь с гнутым стеклом серый', 'http://metalgroup.kz/morozilnyi_lar_gnutyi_seryi.html'),
('2101', 'Морозильный ларь с глухой крышкой', 'http://metalgroup.kz/morozilnyi_lar_gluhoi.html'),
('2102', 'Морозильный ларь с прямым стеклом красный', 'http://metalgroup.kz/morozilnyi_lar_pryamoi.html'),
('2105', 'Морозильный ларь с прямым стеклом синий', 'http://metalgroup.kz/morozilnyi_lar_pryamoi_siniy.html'),
('2106', 'Морозильный ларь с прямым стеклом серый', 'http://metalgroup.kz/morozilnyi_lar_pryamoi_seryi.html'),
('2201', 'Кондитерский шкаф Veneto', 'http://metalgroup.kz/konditerskiy_shkaf_veneto.html'),
('2202', 'Кондитерская витрина Veneto VS-0,95 (статика)', 'http://metalgroup.kz/konditerskaya_vitrina_veneto_static.html'),
('2203', 'Кондитерская витрина Veneto VS-0,95', 'http://metalgroup.kz/konditerskaya_vitrina_veneto.html'),
('2204', 'Кондитерская витрина VS-UN', 'http://metalgroup.kz/konditerskaya_vitrina_vs_un.html'),
('2205', 'Кондитерская витрина VSk', 'http://metalgroup.kz/konditerskaya_vitrina_vsk.html'),
('2206', 'Кондитерская витрина VSn', 'http://metalgroup.kz/konditerskaya_vitrina_vsn.html'),
('2207', 'Кондитерская витрина VSo', 'http://metalgroup.kz/konditerskaya_vitrina_vso.html'),
('2208', 'Кондитерская витрина пристенного типа Veneto VSp', 'http://metalgroup.kz/konditerskaya_vitrina_vsp.html'),
('2209', 'Кондитерская витрина Carboma ВХСв - 1,3д (ОТКРЫТАЯ)', 'http://metalgroup.kz/konditerskaya_vitrina_carboma_vhsv.html'),
('2210', 'Кондитерская витрина Carboma ВХСв - 0,9д', 'http://metalgroup.kz/konditerskaya_vitrina_carvoma_vhsv_9d.html'),
('2211', 'Кондитерская витрина Carboma MINI', 'http://metalgroup.kz/konditerskaya_vitrina_carboma_mini.html'),
('2212', 'Кондитерская витрина Carboma CUBE', 'http://metalgroup.kz/konditerskaya_vitrina_carboma_cube.html'),
('2213', 'Кондитерская витрина ПОЛЮС', 'http://metalgroup.kz/konditerskaya_vitrina_polus.html'),
('2214', 'Кондитерская витрина ПОЛЮС ЭКО', 'http://metalgroup.kz/konditerskaya_vitrina_polus_eco.html'),
('2215', 'Кондитерские шкафы CARBOMA LATIUM', 'http://metalgroup.kz/konditerskiy_shkaf_latium.html'),
('2301', 'Настольные витрины ARGO A87', 'http://metalgroup.kz/nastolnye_vitriny_argo_87.html'),
('2302', 'Настольные витрины ARGO XL', 'http://metalgroup.kz/nastolnye_vitriny_argo_lux.html'),
('2303', 'Настольные витрины CUBE АРГО XL ТЕХНО', 'http://metalgroup.kz/nastolnye_vitriny_cube_argo.html'),
('2304', 'Настольные витрины ARGO XL ТЕХНО', 'http://metalgroup.kz/nastolnye_vitriny_argo_xl.html'),
('2305', 'Барные витрины Carboma', 'http://metalgroup.kz/barnye_vitriny_carboma.html'),
('2306', 'Тепловые витрины CARBOMA', 'http://metalgroup.kz/teplovye_vitriny_carboma.html'),
('2307', 'Суши-кейсы Carboma', 'http://metalgroup.kz/sushi_keicy_carboma.html'),
('2308', 'Витрины для ингредиентов Carboma', 'http://metalgroup.kz/vitriny_dlya_ingredientov.html'),
('2309', 'Барные витрины ARGO', 'http://metalgroup.kz/barnye_vitriny_argo.html'),
('2310', 'Витрина для икры и пресервов', 'http://metalgroup.kz/vitrina_dlya_ikry_preservov.html'),
('2401', 'Холодильные столы CARBOMA 250', 'http://metalgroup.kz/holodilnyi_stol_carboma_250.html'),
('2402', 'Холодильные столы ПОЛЮС', 'http://metalgroup.kz/holodilnyi_stol_carboma_polus.html'),
('2403', 'Холодильные столы CARBOMA 2G', 'http://metalgroup.kz/holodilnyi_stol_carboma_2g.html'),
('2404', 'Холодильные столы CARBOMA 360', 'http://metalgroup.kz/holodilnyi_stol_carboma_360.html'),
('2405', 'Холодильные столы CARBOMA 4G', 'http://metalgroup.kz/holodilnyi_stol_carboma_4g.html'),
('5049 5050', 'Стеклянные витрины', 'http://metalgroup.kz/steklo.html'),
('3101', 'МЕБЕЛЬ ДЛЯ МАГАЗИНОВ ОДЕЖДЫ\r\n\r\n', 'http://metalgroup.kz/mebel_dlya_magazinov.html'),
('3102', 'ТОРГОВОЕ ОБОРУДОВАНИЕ ДЛЯ МАГАЗИНОВ ОДЕЖДЫ', 'http://metalgroup.kz/torgovoe_oborudovanie_dlya_magazinov_odejdy.html'),
('3103', 'МЕБЕЛЬ ДЛЯ БУТИКА', 'http://metalgroup.kz/mebel_dlya_butika.html'),
('3104', 'ВИТРИНЫ ДЛЯ МАГАЗИНОВ ОДЕЖДЫ', 'http://metalgroup.kz/vitriny_dlya_magazinov_odejdy.html'),
('3105', 'СТЕЛЛАЖИ ДЛЯ МАГАЗИНОВ ОДЕЖДЫ', 'http://metalgroup.kz/stellazhi_dlya_magazinov_odejdy.html'),
('3106', 'ОБОРУДОВАНИЕ ДЛЯ БУТИКА', 'http://metalgroup.kz/oborudovanie_dlya_butika.html'),
('5101', 'МЕБЕЛЬ ДЛЯ АПТЕКИ', 'http://metalgroup.kz/mebel_dlya_apteki.html'),
('5102', 'АПТЕЧНАЯ МЕБЕЛЬ', 'http://metalgroup.kz/aptechnaya_mebel.html'),
('5103', 'ОБОРУДОВАНИЕ ДЛЯ АПТЕКИ', 'http://metalgroup.kz/oborudovanie_dlya_apteki.html'),
('5104', 'ВИТРИНЫ ДЛЯ АПТЕКИ', 'http://metalgroup.kz/vitriny_dlya_apteki.html'),
('5105', 'ТОРГОВОЕ ОБОРУДОВАНИЕ ДЛЯ АПТЕКИ', 'http://metalgroup.kz/torgovoe_oborudovanie_dlya_apteki.html'),
('5051 5052 5053', 'Стеклянные витрины', 'http://metalgroup.kz/steklo2.html'),
('1901 1902 1903 1904 1905', 'Pos системы', 'pos.html'),
('1921 1922', 'Сканеры штрих-кодов', 'scanner.html'),
('1931 1932 1933', 'Принтеры чеков, этикеток', 'printer.html'),
('1941', 'Денежные ящики', 'till.html'),
('1951 1952 1953', 'Программное обеспечение 1С', '1c.html');
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
