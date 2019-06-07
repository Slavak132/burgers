ymaps.ready(init);
var placemarks = [
  {


    latitude: 59.97126271,
    longitude: 30.30964668,
    hintContent: '<div class="map__hint"> ул. Профессора Попова, д. 27</div>',
    balloonContent: [
      '<div class="map__balloon">',
      '<img class="map__burger-img" src="../img/logo.svg" alt="Бургер"/>',
      'Ай да к нам! Заходите по адресу: ул. Профессора Попова, д. 27',
      '</div>'
    ]
    },
    {
      latitude: 59.92665053,
      longitude: 30.47059243,
      hintContent: '<div class="map__hint"> ул. Латышских Стрелков, д 8</div>',
      balloonContent: [
        '<div class="map__balloon">',
        '<img class="map__burger-img" src="../img/logo.svg" alt="Бургер"/>',
        'Ай да к нам! Заходите по адресу: ул. Латышских Стрелков, д 8',
        '</div>'
      ]
    },
    {
      latitude: 59.92627708,
      longitude: 30.32018594,
      hintContent: '<div class="map__hint"> ул. Ефремова д 3</div>',
      balloonContent: [
        '<div class="map__balloon">',
        '<img class="map__burger-img" src="../img/logo.svg" alt="Бургер"/>',
        'Ай да к нам! Заходите по адресу: ул. Ефремова д 3',
        '</div>'
      ]
    },
    {
      latitude: 59.93800356,
      longitude: 30.23853478,
      hintContent: '<div class="map__hint"> Малый Проспект В. О. д. 69 к1</div>',
      balloonContent: [
        '<div class="map__balloon">',
        '<img class="map__burger-img" src="../img/logo.svg" alt="Бургер"/>',
        'Ай да к нам! Заходите по адресу: Малый Проспект В. О. д. 69 к1',
        '</div>'
      ]
    }

  ],

  geoObjects= [];

function init() {
  var map = new ymaps.Map('map', {
    center: [59.94, 30.30],
    zoom: 12,
    // controls: ['zoomControl'],
    behaviors: ['drag']
  });
  // placemarks.forEach(function(obj){ //метод forEach все переберет
    for (var i = 0; i < placemarks.length; i++) {
        geoObjects[i] = new ymaps.Placemark([ placemarks[i].latitude, placemarks[i].longitude],
        {
          hintContent:placemarks[i].hintContent,
          balloonContent:placemarks[i].balloonContent.join('')
        },
        {
            //  меняею метку на не штатную 
          iconLayout: 'default#image', //макет
          iconImageHref: './img/map-marker.png', //путь к иконке
          iconImageSize: [46, 57], //размеры
          iconImageOffset: [-23, -57], //смещаем точку опору метки
        });
            // map.geoObjects.add(placemark); //вывожу метку на карту
      }
        var clusterer = new ymaps.Clusterer({

        });
        map.geoObjects.add(clusterer);
        clusterer.add(geoObjects);
      
}