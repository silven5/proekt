// Список квітів
let flower = [];
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
let aks = [];
aks[0] =
{
    name: "Повітряні кулі з днем народження",
    price: 100.00
}
    aks[1] =
{
    name: "Повітряні кулі у формі серця",
    price: 120.00
}
    aks[2] =
{
    name: "Повітряні кулі рожеві",
    price: 70.00
    }

// Список квітів
let selector = document.querySelector("#flower");
// Список аксесуарів
let selector_aks = document.querySelector("#aks");
// Очищуємо списи
selector.innerHTML = '';
selector_aks.innerHTML = '';
// Створюємо елементи будь якого списку відповідно до масиву
function createSelect(sel,ar)
{
    for (let i = 0; i < ar.length;i++)
    {
        const option = document.createElement("option");
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
let count_flowers = document.querySelector("#flower_count");
let count_akss = document.querySelector("#aks_count");
// Розрахунок вартості
function calc_price(ar, i, count)
{
    return ar[i].price * count;
}
// Отримуємо індекс обраної квітки
let index_flower = selector.options[selector.selectedIndex].value;
// Отримуємо індекс обраноого аксесуару
let index_aks = selector_aks.options[selector_aks.selectedIndex].value;
// Змінні для вартості квітки та аксесуару
let price_flowers = 0.0;
let price_aks = 0.0;
let count_flower = document.querySelector("#flower_count").value;
let count_aks = document.querySelector("#aks_count").value;
// Функція для виведення вартості обраних квітів
function price_flower()
{   
    index_flower = selector.options[selector.selectedIndex].value;
    count_flower = document.querySelector("#flower_count").value;
    price_flowers = calc_price(flower, index_flower, count_flower)
    let price_h3 = document.querySelector("#price_flowers");
    price_h3.innerHTML = 'Вартість = '+price_flowers;   
}
price_flower();
// Функція для виведення вартості обраних аксесуарів
function price_akss()
{   
    index_aks = selector_aks.options[selector_aks.selectedIndex].value;
    count_aks = document.querySelector("#aks_count").value;
    price_aks = calc_price(aks, index_aks, count_aks)
    let price_h3 = document.querySelector("#price_aks");
    price_h3.innerHTML = 'Вартість = '+price_aks;   
}
price_akss();
// При зміні кількості квіток змінюється вартість
count_flowers.onclick = function ()
{      price_flower()}
// При зміні квітки змінюється вартість
selector.onclick = function ()
{      price_flower()}
// При зміні кількості аксесуарsd змінюється вартість
count_akss.onclick = function ()
{     price_akss()}
// При зміні аксесуару змінюється вартість
selector_aks.onclick = function ()
{     price_akss()}
// Загальна вартість усіх квіток
let all_price_flowers = 0.0;
// Загальна вартість усіх аксесуарів
let all_price_aks = 0.0;
// Загальна вартість букету
let all_price = 0.0;
let all_flowers = document.querySelector("#all_Flowers");
let all_price_flower = document.querySelector("#all_price_flower");
all_flowers.innerHTML = '';
all_price_flower.innerHTML = '';
// Кнопка додавання до букету
let flowers = document.getElementById("calc_forwers");
// Кнопка додавання аксесуарів
let aksesuar = document.getElementById("calc_aks");
// Додавання квіток до букету
flowers.onclick = function () {
    all_flowers.innerHTML = all_flowers.innerHTML +", "+
        flower[index_flower].name +" "+
        count_flower;
    all_price_flowers = all_price_flowers + price_flowers;
    all_price = all_price_aks + all_price_flowers;
    all_price_flower.innerHTML ="Загальна вартість "+ all_price;
}
aksesuar.onclick = function ()
{
    all_flowers.innerHTML = all_flowers.innerHTML +", "+
        aks[index_aks].name +" "+
        count_aks;
    all_price_aks = all_price_aks + price_aks;
    all_price = all_price_aks + all_price_flowers;
    all_price_flower.innerHTML ="Загальна вартість "+ all_price;
}
