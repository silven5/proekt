/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 939:
/***/ (() => {

// Список квітів
var flower = [];
flower[0] = {
  name: "Троянда кремова",
  price: 125.00
};
flower[1] = {
  name: "Троянда червона",
  price: 120.50
};
flower[2] = {
  name: "Троянда біла",
  price: 150.50
};
flower[3] = {
  name: "Еустома",
  price: 33.75
};
flower[4] = {
  name: "Гіпсофіл",
  price: 50.75
};
// Список аксесуарів
var aks = [];
aks[0] = {
  name: "Повітряні кулі з днем народження",
  price: 100.00
};
aks[1] = {
  name: "Повітряні кулі у формі серця",
  price: 120.00
};
aks[2] = {
  name: "Повітряні кулі рожеві",
  price: 70.00
};

// Список квітів
var selector = document.querySelector("#flower");
// Список аксесуарів
var selector_aks = document.querySelector("#aks");
// Очищуємо списи
selector.innerHTML = '';
selector_aks.innerHTML = '';
// Створюємо елементи будь якого списку відповідно до масиву
function createSelect(sel, ar) {
  for (var i = 0; i < ar.length; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = ar[i].name;
    sel.add(option);
  }
}
// Створюємо список квітів
createSelect(selector, flower);
// Створюємо список аксесуарів
createSelect(selector_aks, aks);
// Отримуємо поле з кількістю квітів та аксесуарів
var count_flowers = document.querySelector("#flower_count");
var count_akss = document.querySelector("#aks_count");
// Розрахунок вартості
function calc_price(ar, i, count) {
  return ar[i].price * count;
}
// Отримуємо індекс обраної квітки
var index_flower = selector.options[selector.selectedIndex].value;
// Отримуємо індекс обраноого аксесуару
var index_aks = selector_aks.options[selector_aks.selectedIndex].value;
// Змінні для вартості квітки та аксесуару
var price_flowers = 0.0;
var price_aks = 0.0;
var count_flower = document.querySelector("#flower_count").value;
var count_aks = document.querySelector("#aks_count").value;
// Функція для виведення вартості обраних квітів
function price_flower() {
  index_flower = selector.options[selector.selectedIndex].value;
  count_flower = document.querySelector("#flower_count").value;
  price_flowers = calc_price(flower, index_flower, count_flower);
  var price_h3 = document.querySelector("#price_flowers");
  price_h3.innerHTML = 'Вартість = ' + price_flowers;
}
price_flower();
// Функція для виведення вартості обраних аксесуарів
function price_akss() {
  index_aks = selector_aks.options[selector_aks.selectedIndex].value;
  count_aks = document.querySelector("#aks_count").value;
  price_aks = calc_price(aks, index_aks, count_aks);
  var price_h3 = document.querySelector("#price_aks");
  price_h3.innerHTML = 'Вартість = ' + price_aks;
}
price_akss();
// При зміні кількості квіток змінюється вартість
count_flowers.onclick = function () {
  price_flower();
};
// При зміні квітки змінюється вартість
selector.onclick = function () {
  price_flower();
};
// При зміні кількості аксесуарsd змінюється вартість
count_akss.onclick = function () {
  price_akss();
};
// При зміні аксесуару змінюється вартість
selector_aks.onclick = function () {
  price_akss();
};
// Загальна вартість усіх квіток
var all_price_flowers = 0.0;
// Загальна вартість усіх аксесуарів
var all_price_aks = 0.0;
// Загальна вартість букету
var all_price = 0.0;
var all_flowers = document.querySelector("#all_Flowers");
var all_price_flower = document.querySelector("#all_price_flower");
all_flowers.innerHTML = '';
all_price_flower.innerHTML = '';
// Кнопка додавання до букету
var flowers = document.getElementById("calc_forwers");
// Кнопка додавання аксесуарів
var aksesuar = document.getElementById("calc_aks");
// Додавання квіток до букету
flowers.onclick = function () {
  all_flowers.innerHTML = all_flowers.innerHTML + ", " + flower[index_flower].name + " " + count_flower;
  all_price_flowers = all_price_flowers + price_flowers;
  all_price = all_price_aks + all_price_flowers;
  all_price_flower.innerHTML = "Загальна вартість " + all_price;
};
aksesuar.onclick = function () {
  all_flowers.innerHTML = all_flowers.innerHTML + ", " + aks[index_aks].name + " " + count_aks;
  all_price_aks = all_price_aks + price_aks;
  all_price = all_price_aks + all_price_flowers;
  all_price_flower.innerHTML = "Загальна вартість " + all_price;
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(939);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_js__WEBPACK_IMPORTED_MODULE_0__);







// function component(text) {
//   const element = document.createElement('h1');
//   element.textContent = text;
//   return element;
// }

// document.body.prepend(component('Проєкт зібрано за допомогою Webpack'));
})();

/******/ })()
;