const left = document.querySelector("#left");
const right = document.querySelector("#right");
const burger = document.querySelector("#burger");
const sliderStyle = getComputedStyle(burger);

right.addEventListener('click', function(e) {
    e.preventDefault();
    let first = burger.firstElementChild;
    burger.removeChild(first);
    // вставляем в конец
    burger.appendChild(first);

});

left.addEventListener("click", function(e) {
    e.preventDefault();
    let last = burger.lastElementChild;
    burger.removeChild(last);
    //вставляем в начало
    burger.insertBefore(last, burger.firstElementChild);

});
