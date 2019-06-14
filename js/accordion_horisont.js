const menu = document.querySelector('#menu'),
accordionItems = document.querySelectorAll('.accordion__img'),
accordionItemsLength = accordionItems.length;

menu.addEventListener('click', function(event) {
  for (let i = 0; i < accordionItemsLength; ++i) {
    accordionItems[i].classList.remove('accordion-img--active');
  }
});

for (let i = 0; i < accordionItemsLength; ++i) {
  accordionItems[i].addEventListener('click', function (event) {
    // event.stopPropagation();
    if( accordionItems[i].classList.contains('accordion__img--active') ) {
      accordionItems[i].classList.remove('accordion__img--active');
    } else {
      for(let i = 0; i < accordionItemsLength; ++i) {
        accordionItems[i].classList.remove('accordion__img--active');
      }
      accordionItems[i].classList.add('accordion__img--active');
    }
  });
}