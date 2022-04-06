const data = [
           // _____________________________________Металлические картотечные шкафы (картотека, файл-кабинет)____________________________________________

    {
        link: "kr 2.html",
        title: "Металлический картотечный шкаф (картотека) КР-2",
        desc: "Металлическая сборно-разборная картотека КР-2, двухсекционная, с центральным замком. Используется для хранения документации в форматах Foolscap и А4. Имеет антиопрокидывающее устройство и телескопические направляющие. Покрытие -  полимерное порошковое серого цвета (RAL 7035).",
        img: 'images/fulls/shkaf_kart/kr2.png',
        price: 81270,
        code: "1301"
    },

    {
        link: "kr 3.html",
        title: "Металлический картотечный шкаф (картотека) КР-3",
        desc: "Металлическая сборно-разборная картотека КР-3, трехсекционная, с центральным замком. Используется для хранения документации в форматах Foolscap и А4. Имеет антиопрокидывающее устройство и телескопические направляющие. Покрытие -  полимерное порошковое серого цвета (RAL 7035).",
        img: 'images/fulls/shkaf_kart/kr3.png',
        price: 109850,
        code: "1302"
    },

    {
        link: "kr 4.html",
        title: "Металлический картотечный шкаф (картотека) КР-4",
        desc: "Металлическая сборно-разборная картотека КР-4, четырехсекционная, с центральным замком. Используется для хранения документации в форматах Foolscap и А4. Имеет антиопрокидывающее устройство и телескопические направляющие. Покрытие -  полимерное порошковое серого цвета (RAL 7035).",
        img: 'images/fulls/shkaf_kart/kr4.png',
        price: 137060,
        code: "1303"
    },


    {
        link: "kr 5.html",
        title: "Металлический картотечный шкаф (картотека) КР-5",
        desc: "Металлическая сборно-разборная картотека КР-5, пятисекционная, с центральным замком. Используется для хранения документации в форматах Foolscap и А4. Имеет антиопрокидывающее устройство и телескопические направляющие. Покрытие -  полимерное порошковое серого цвета (RAL 7035).",
        img: 'images/fulls/shkaf_kart/kr5.png',
        price: 171111,
        code: "1304"
    },


    {
        link: "kr 7.html",
        title: "Металлический картотечный шкаф (картотека) КР-7",
        desc: "Металлический картотечный шкаф (картотека) КР-7. Предназначен для хранения документов в формате А5. Имеет семь выдвижных ящиков, разделенных перегородкой. Благодаря телескопическим направляющим каждый ящик может быть выдвинут полностью на всю глубину. Металлическая картотека имеет центральный врезной замок. Покрытие - полимерное порошковое светло-серого цвета (RAL 7035).",
        img: 'images/fulls/shkaf_kart/kr7.png',
        price: 169236,
        code: "1305"
    },


    {
        link: "foolscap.html",
        title: "Папка FOOLSCAP и A4",
        desc: "Скользящий прозрачный мягкий табулятор. Подвесные папки FoolScap изготовлены из картона высокой плотности, что гарантирует продолжительность их службы. Неоспоримое преимущество папок FoolScap по сравнению с классическими – вместимость большого объёма документации при компактных размерах. <br> Папка FoolScape гораздо компактнее громоздких папок-регистраторов, ее удобнее брать с собой на деловые встречи и совещания. ",
        img: 'images/fulls/shkaf_kart/6.jpg',
        price: 401,
        code: "1306"
    },
    

]

const labels = document.getElementById('shkaf4Js');

const monoblocksBlock = document.getElementById('shkaf4Block');

const priceSort = document.getElementById('priceSort');

let priceSortedArray = data.sort(function(a, b) {
    let x = a.price;
    let y = b.price;

    return x - y;
});
let initialArray = priceSortedArray;

let initStage = true;

priceSort.addEventListener("change", function() {
    if (priceSort.value == "first") {
        priceSortedArray = data.sort(function(a, b) {
            let x = a.price;
            let y = b.price;

            return x - y;
        });

    } else if (priceSort.value == "second") {
        priceSortedArray = data.sort(function(a, b) {
            let x = a.price;
            let y = b.price;

            return y - x;
        });
    }

    initialArray = priceSortedArray;
    filterArray();
});
let myTabOne = document.querySelector('.myTabOne');
let myTabTwo = document.querySelector('.myTabTwo');


myTabOne.addEventListener('click', function() {
    monoblocksBlock.classList.remove('cardProductBlock');
    labels.classList.remove('cardProduct');
});

myTabTwo.addEventListener('click', function() {
    monoblocksBlock.classList.add('cardProductBlock');
    labels.classList.add('cardProduct');
});

function displayBlock(array) {
    monoblocksBlock.innerHTML = "";
    let video = document.createElement('div');
    // <p>Звоните прямо сейчас: <br><a href="tel:87015112200">8(727)<span> 344-99-00</span></a>; <a href="tel:+77012667700"><b>+7 701 266-77-00</b></a></p>
    video.innerHTML = `
            <p>Звоните прямо сейчас: <br><a href="tel:87015112200">8(727)<span> 344-99-00</span></a>; <a href="tel:+77012667700"><b>+7 701 266-77-00</b></a></p>
           `;

    array.map((a) => {
        let item = document.createElement('div');
        item.classList.add("mainCard");

        var formatter = function(priceSum) {
            let mn = 0;
            let price = priceSum.toString()
            for (let ij = price.length; ij > 0; ij--) {
                if (mn % 3 == 0) {
                    price = [price.slice(0, ij), " ", price.slice(ij)].join('');
                }
                mn++;
            }
            return price;
        }
        item.innerHTML = `
               <div class="cardProductItem">
        <a href="${a.link}">
            <div class="cardProductItem_img">
                <img src="${a.img}">
            </div>
            <div class="cardProductItem_content">
                <h3>${a.title} </h3>
                <div class="cardProductItemLine"></div>
                <div class="cardProductItem_codes">
                    <span class="cardProductItem_code">Код товара: ${a.code}</span>
                </div>

                <span class="cardProductItem_price"> ${formatter(a.price)} тг</span>
                <div class="cardProductItem_info">
                    <div class="cardProductItem_info_sub">
                        <div>
                            <img src="images/productInfo1.png" alt="">
                        </div>
                        <div>
                            <p>Есть в наличии</p>
                        </div>
                    </div>

                    <div class="cardProductItem_info_sub">
                        <div>
                            <img src="images/productInfo3.png" alt="">
                        </div>
                        <div>
                            <p>Установка</p>
                        </div>
                    </div>
                    <div class="cardProductItem_info_sub">
                        <div>
                            <img src="images/productInfo2.png" alt="">
                        </div>
                        <div class="cardProductItem_info_sub_text">
                            <p>Доставка </p>
                            <p><span class="span_free"> - БЕСПЛАТНО</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
           
            `;
        monoblocksBlock.appendChild(item);

    })

}
function displayList(array) {
    labels.innerHTML = "";
    let video = document.createElement('div');
    // <p>Звоните прямо сейчас: <br><a href="tel:87273449900">8(727)<span> 344-99-00</span></a>; <a href="tel:+77012667700"><b>+7 701 266-77-00</b></a></p>
    video.innerHTML = `
        <div class="video1"><iframe width="780" height="439" src="https://www.youtube.com/embed/jpDM-Ybi5DE?rel=0&autoplay=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        `;

    array.map((a) => {
        let item = document.createElement('div');
        item.classList.add("main");
        var formatter = function(priceSum) {
            let mn = 0;
            let price = priceSum.toString()
            for (let ij = price.length; ij > 0; ij--) {
                if (mn % 3 == 0) {
                    // price.splice(ij, 0, " ")
                    price = [price.slice(0, ij), " ", price.slice(ij)].join('');
                }
                mn++;
            }
            return price;
        }

        item.innerHTML = `
    <li>
    <div id="ggg">
    <div class="firstly">
    <a  href="${a.link}"> 
    <img class="boximagee" src="${a.img}"
               style="float:left">
   </div>
   <br>
   <div class="secondly">
       <h2>${a.title}</h2>
       <hr><span style="color:#CCCCCC; font-size:14px">Код товара: ${a.code}</span><br>
       <p>${a.desc}</p>
       <p><span class="item-price-indicator_second">Цена: от ${formatter(a.price)} тг </span></p>
       </div>
       </a>
       <div class="thirdly">
       <a class="but btn-zayavka" href="${a.link}">Перейти</a>
   </div>
     </div>
    </div>
    </li><br>
    
`;
        labels.appendChild(item);

    })
}

function showInitialStage() {
    displayBlock(initialArray);
    displayList(initialArray);
    let params = countParam(initialArray);
    showParamCounters(params)
        // console.log("object");
}


showInitialStage();

let filterParam = {
    color: [],
    paperWidth: [],
    winding: []
}



function filterArray() {
    let updatedArray = initialArray.filter(function(a) {
            if (filterParam.color.length !== 0) {
                for (let i = 0; i < filterParam.color.length; i++) {
                    if (a.color === filterParam.color[i]) {
                        return a;
                    }
                }
            } else {
                return a;
            }
        })
        .filter(function(a) {
            if (filterParam.paperWidth.length !== 0) {
                for (let i = 0; i < filterParam.paperWidth.length; i++) {
                    if (a.paperWidth === filterParam.paperWidth[i]) {
                        return a;
                    }
                }
            } else {
                return a;
            }
        })
        .filter(function(a) {
            if (filterParam.winding.length !== 0) {
                for (let i = 0; i < filterParam.winding.length; i++) {
                    if (a.winding === filterParam.winding[i]) {
                        return a;
                    }
                }
            } else {
                return a;
            }
        })


    let params = countParam(updatedArray);
    showParamCounters(params)
        // console.log(updatedArray);


    if (updatedArray.length !== 0) {
        displayList(updatedArray)
        addFilterOption(filterOptionArray)
    } else {
        clickArr[clickArr.length - 1].checked = false;
        clickArr.pop()
        filterOptionArray.pop()
        errorMsg()
            // console.log(clickArr);
            // console.log(filterOptionArray)
        updateFilterParam()
    }
}

let clickArr = []
let filterOptionArray = []
let btnArray = []

const whiteBtn = document.getElementById('whiteBtn');
const blackBtn = document.getElementById('blackBtn');
const grayBtn = document.getElementById('grayBtn');
const firstWidthBtn = document.getElementById('firstWidthBtn');
const secondWidthBtn = document.getElementById('secondWidthBtn');
const thirdWidthBtn = document.getElementById('thirdWidthBtn');
const withAutoCutBtn = document.getElementById('withAutoCutBtn');
const wtAutoCutBtn = document.getElementById('wtAutoCutBtn');
const autoSeperationBtn = document.getElementById('autoSeperationBtn');
const noAutoSeperationBtn = document.getElementById('noAutoSeperationBtn');


function updateFilterParam() {
    filterParam.color = [];

    if (whiteBtn.checked === true) {
        filterParam.color.push("white");
    }

    if (blackBtn.checked === true) {
        filterParam.color.push("black");
    }

    if (grayBtn.checked === true) {
        filterParam.color.push("gray");
    }

    filterParam.paperWidth = [];

    if (firstWidthBtn.checked === true) {
        filterParam.paperWidth.push(76);
    }

    if (secondWidthBtn.checked === true) {
        filterParam.paperWidth.push(80);
    }

    if (thirdWidthBtn.checked === true) {
        filterParam.paperWidth.push(104);
    }

    filterParam.winding = [];

    if (autoSeperationBtn.checked === true) {
        filterParam.winding.push(true);
    }

    if (noAutoSeperationBtn.checked === true) {
        filterParam.winding.push(false);
    }

    // console.log("object");
    filterArray()
}

function spliceMethod(value) {
    const idx = clickArr.indexOf(value);
    if (idx > -1) {
        clickArr.splice(idx, 1);
    }
}

function spliceMethodSecond(value) {
    const idx = filterOptionArray.indexOf(value);
    if (idx > -1) {
        filterOptionArray.splice(idx, 1);
    }
}

function whiteBtnClick() {
    if (whiteBtn.checked == true) {
        filterOptionArray.push('белый')
        clickArr.push(whiteBtn)
        arrCounter = true;
    } else {
        spliceMethod(whiteBtn);
        spliceMethodSecond('белый')
        arrCounter = false;
    }
    updateFilterParam()
}

function blackBtnClick() {
    if (blackBtn.checked == true) {
        filterOptionArray.push('черный')
        clickArr.push(blackBtn)
        arrCounter = true;
    } else {
        spliceMethod(blackBtn);
        spliceMethodSecond('черный')
        arrCounter = false;
    }
    updateFilterParam()
}

function grayBtnClick() {
    if (grayBtn.checked == true) {
        filterOptionArray.push('черный')
        clickArr.push(grayBtn)
        arrCounter = true;
    } else {
        spliceMethod(grayBtn);
        spliceMethodSecond('черный')
        arrCounter = false;
    }
    updateFilterParam()
}

function firstWidthBtnClick() {
    if (firstWidthBtn.checked == true) {
        filterOptionArray.push('до 80мм')
        clickArr.push(firstWidthBtn)
        arrCounter = true;
    } else {
        spliceMethod(firstWidthBtn);
        spliceMethodSecond('до 80мм')
        arrCounter = false;
    }
    updateFilterParam()
}

function secondWidthBtnClick() {
    if (secondWidthBtn.checked == true) {
        filterOptionArray.push('до 82мм')
        clickArr.push(secondWidthBtn)
        arrCounter = true;
    } else {
        spliceMethod(secondWidthBtn);
        spliceMethodSecond('до 82мм')
        arrCounter = false;
    }
    updateFilterParam()
}

function thirdWidthBtnClick() {
    if (thirdWidthBtn.checked == true) {
        filterOptionArray.push('до 120мм')
        clickArr.push(thirdWidthBtn)
        arrCounter = true;
    } else {
        spliceMethod(thirdWidthBtn);
        spliceMethodSecond('до 120мм')
        arrCounter = false;
    }
    updateFilterParam()
}

function autoSeperationBtnClick() {
    if (autoSeperationBtn.checked == true) {
        filterOptionArray.push('имеется')
        clickArr.push(autoSeperationBtn)
        arrCounter = true;
    } else {
        spliceMethod(autoSeperationBtn);
        spliceMethodSecond('имеется')
        arrCounter = false;
    }
    updateFilterParam()
}

function noAutoSeperationBtnClick() {
    if (noAutoSeperationBtn.checked == true) {
        filterOptionArray.push('отсуствует')
        clickArr.push(noAutoSeperationBtn)
        arrCounter = true;
    } else {
        spliceMethod(noAutoSeperationBtn);
        spliceMethodSecond('отсуствует')
        arrCounter = false;
    }
    updateFilterParam()
}

// whiteBtn.addEventListener('click', whiteBtnClick)
// blackBtn.addEventListener('click', blackBtnClick)
// grayBtn.addEventListener('click', grayBtnClick)
// firstWidthBtn.addEventListener('click', firstWidthBtnClick)
// secondWidthBtn.addEventListener('click', secondWidthBtnClick)
// thirdWidthBtn.addEventListener('click', thirdWidthBtnClick)
// autoSeperationBtn.addEventListener('click', autoSeperationBtnClick)
// noAutoSeperationBtn.addEventListener('click', noAutoSeperationBtnClick)


// let checkBoxArr = []
//     // settings関数で初期設定 全体に適応させたい場合
// iziToast.settings({
//     timeout: 3000, // default timeout
//     resetOnHover: true,
//     // icon: '', // icon class
//     transitionIn: 'flipInX',
//     transitionOut: 'flipOutX',
//     position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
//     onOpen: function() {
//         // console.log('callback abriu!');
//     },
//     onClose: function() {
//         // console.log("callback fechou!");
//     }
// });


// error
function errorMsg() {
    iziToast.warning({ title: '', message: 'По таким параметрам продуктов не найдено' });
}


const filter = document.getElementById("filter");
let arrCounter = true;

function addFilterOption(arr) {
    let index = 0;
    filter.innerHTML = "";
    arr.map(a => {
        let filterOption = document.createElement('div');
        filterOption.setAttribute("data-id", index)
        filterOption.id = "filterOption"
        filterOption.classList.add('filter-option')
        if (arrCounter == true) {
            filterOption.classList.add('filter-animation')
        }
        if (index > 0) {
            document.querySelector(`[data-id="${index - 1}"]`).classList.remove('filter-animation');
        }
        filterOption.innerHTML = `
    <span class="filter-option-value" data-id="${index}">${a} 
        <svg xmlns="https://www.w3.org/2000/svg" style="
        pointer-events: none;
        margin-left: 8.5px;" data-id="${index} width="10px" height="10px" viewBox="0 0 7 7" id="filterOptionSvg" fill="none">
            <path data-id="${index} id="filterOptionPath" fill-rule="evenodd" clip-rule="evenodd" d="M4.00199 4.7091L6.64844 7.35554L7.35554 6.64844L4.7091 4.00199L7.35554 1.35554L6.64844 0.648438L4.00199 3.29488L1.35554 0.648438L0.648438 1.35554L3.29488 4.00199L0.648438 6.64844L1.35554 7.35554L4.00199 4.7091Z" fill="#C4C4C4"></path>
        </svg>
    </span>
    `;
        filter.appendChild(filterOption);
        index++;
    })
}

let filterOption = document.querySelector(".filter-option");

document.addEventListener(
    "click",
    function(e) {
        e = e || window.event;
        let target = e.srcElement;
        if (
            target.id === "filterOption" ||
            target.parentNode.id === "filterOption"
        ) {
            arrCounter = false;
            // console.log(filterOptionArray);
            let selectedId = parseInt(target.getAttribute('data-id'), 10);
            removeFilterElement(selectedId)
                // console.log(filterOptionArray);

        }
    },
    false
);


function removeFilterElement(value) {
    filterOptionArray.splice(value, 1);
    clickArr[value].checked = false;
    clickArr.splice(value, 1)
    updateFilterParam();
}

function countParam(array) {
    let color1 = 0;
    let color2 = 0;
    let color3 = 0;
    let paperWidth1 = 0;
    let paperWidth2 = 0;
    let paperWidth3 = 0;
    let winding1 = 0;
    let winding2 = 0;

    for (let index = 0; index < array.length; index++) {

        if (array[index].color == "white") {
            color1++;
        } else if (array[index].color == "black") {
            color2++;
        } else if (array[index].color == "gray") {
            color3++;
        }

        if (array[index].paperWidth == 76) {
            paperWidth1++;
        } else if (array[index].paperWidth == 80) {
            paperWidth2++;
        } else if (array[index].paperWidth == 104) {
            paperWidth3++;
        }



        if (array[index].winding == true) {
            winding1++;
        } else if (array[index].winding == false) {
            winding2++;
        }
    }

    return [color1, color2, color3, paperWidth1, paperWidth2, paperWidth3, winding1, winding2]

}

function showParamCounters(array) {
    for (let index = 0; index < array.length; index++) {
        document.getElementById(`${index+1}param`).innerHTML = array[index]
    }
}

// var filename = window.location.href.split('/').pop().split('#')[0].split('?')[0];
// console.log(filename);