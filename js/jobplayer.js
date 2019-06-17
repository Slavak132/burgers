;
(function () {
  window.onload = function () {

    const play = document.querySelectorAll('.play'),
      playLength = play.length,
      videoPlayer = document.querySelector('.video__player'),
      video = document.querySelector('#video'),
      videoPlayBigButton = document.querySelector('.video__play'),
      videoToolbarPlayButton = document.querySelector('.video__toolbar-play'),
      videoToolbarPauseButton = document.querySelector('.video__toolbar-pause'),
      durationTime = document.querySelector('#duration-time'),
      volumeLevel = document.querySelector('#volume-level'),
      videoVolume = document.querySelector('.video__volume'),
      videoVolumeMuted = document.querySelector('.video__volume-muted'),
      timer = document.querySelector('#timer');

    //id функций setInterval и setTimeout необходимо определять или в глобально области видимости или на 1ин уровень выше, чем срабатывает clearInterval или clearTimeout
    let timeRequestInterval,
        timeRequest;
    
    //Управление конопками play
    function startStopVideo(e) {
      e.stopPropagation();
      if (video.paused) {
        timeRequest = setInterval(function () {
          timeRequestInterval = 10;
          let currentTime = video.currentTime;
          durationTime.value = currentTime;
        }, timeRequestInterval);
        video.play();
        videoPlayBigButton.classList.add('video__play--active');
        videoToolbarPlayButton.classList.add('video__toolbar-play--active');
        videoToolbarPauseButton.classList.add('video__toolbar-pause--active');
      } else {
        video.pause();
        videoPlayBigButton.classList.remove('video__play--active');
        videoToolbarPlayButton.classList.remove('video__toolbar-play--active');
        videoToolbarPauseButton.classList.remove('video__toolbar-pause--active');
        setTimeout(function () {
          clearInterval(timeRequest);
        });
      }
    }

    //Событие на окне плеера
    videoPlayer.addEventListener('click', startStopVideo);

    for (let i = 0; i < playLength; ++i) {
      play[i].addEventListener('click', startStopVideo);
    }

    //Добавление значений ползунку времени видео
    durationTime.value = 0;
    let videoDurationMin = 0;
    let videoDurationMax = video.duration;
    durationTime.setAttribute('min', videoDurationMin);
    durationTime.setAttribute('max', videoDurationMax);

    //Событие изменение времени видео по ползунку
    durationTime.addEventListener('input', function (e) {
      video.pause();
      video.currentTime = durationTime.value;
    });

    durationTime.addEventListener('change', function (e) {
      video.currentTime = durationTime.value;
      video.play();
    });

    //Установка значений громкости
    let volumeLevelMin = 0;
    let volumeLevelMax = 10;

    volumeLevel.setAttribute('min', volumeLevelMin);
    volumeLevel.setAttribute('max', volumeLevelMax);
    video.volume = 5 / 10;

    //Настройка ползунка громкости
    volumeLevel.addEventListener('input', function (e) {
      video.volume = volumeLevel.value / 10;
    });

    //Настройка иконки Muted
    videoVolume.addEventListener('click', function (e) {
      video.muted = true;
      videoVolume.classList.add('video__volume--active');
      videoVolumeMuted.classList.add('video__volume-muted--active');
    });

    videoVolumeMuted.addEventListener('click', function (e) {
      video.muted = false;
      videoVolume.classList.remove('video__volume--active');
      videoVolumeMuted.classList.remove('video__volume-muted--active');
    });

    //Настройка таймера отсчета времени видео
    video.addEventListener('timeupdate', function (e) {
      const minutes = Math.floor(video.currentTime / 60);
      const seconds = Math.round(video.currentTime - minutes * 60);
      timer.innerHTML = `${minutes}:${seconds}`;
    });

    video.addEventListener('ended', function(e) {
      video.currentTime = 0;
      videoPlayBigButton.classList.remove('video__play--active');
      videoToolbarPlayButton.classList.remove('video__toolbar-play--active');
      videoToolbarPauseButton.classList.remove('video__toolbar-pause--active');
      // this.src = video.src;
    });
  }
})()


// window.onload = function () {
//   let video = document.querySelector('#video');

//   video.addEventListener('click', playStop);

//   let playButtons = document.querySelectorAll('.play');
//   let playButtonsLength = playButtons.length;

//   for(let i = 0; i < playButtonsLength; ++i) {
//     playButtons[i].addEventListener('click', playStop);
//   };

//   let micOff = document.querySelector('.video__volume-icon');
//   micOff.addEventListener('click', soundOff);

//   let durationControl = document.querySelector('#duration-time');
//   durationControl.addEventListener('mousedown', stopInterval);
//   durationControl.addEventListener('click', setVideoDuration);

//   durationControl.min = 0;
//   durationControl.value = 0;

//   let soundControl = document.querySelector('#volume-level');
//   soundControl.addEventListener('mouseup', changeSoundVolume);

//   //Значения громкости
//   soundControl.mix = 0;
//   soundControl.max = 10;

//   //Присваивание ползунку максимального значения
//   soundControl.value = soundControl.max;

//   let videoPlayButton = document.querySelector('.video__play');
//   let toolbarPlayButton = document.querySelector('.video__toolbar-play');

//   video.addEventListener('ended', function () {
//     videoPlayButton.classList.toggle('video__play--active');
//     toolbarPlayButton.classList.toggle('video__toolbar-play--active');
//     video.currentTime = 0;
//   });

//   let intervalId;
//   function playStop() {

//     videoPlayButton.classList.toggle('video__play--active');
//     toolbarPlayButton.classList.toggle('video__toolbar-play--active');

//     //Присваиваем максимальное значение input type='range' равное продолжительности видео
//     durationControl.max = video.duration;

//     //Проверить стоить ли видео на паузе, если да начнем воспроизведение и наоборот
    
//     if(video.paused) {

//       video.play();
//       intervalId = setInterval(updateDuration, 1000 / 66);

//     } else {

//       video.pause();
//       clearInterval(intervalId);
//     };
//   };

//   function stopInterval() {
//     video.pause();
//     clearInterval(intervalId);
//   };

//     //Реализует возможность перемотки видео

//   function setVideoDuration() {
//     if (video.pause()) {
//       video.play();
//     } else {
//       video.pause();
//     }

//     video.currentTime = durationControl.value;
//     intervalId = setInterval(updateDuration, 1000/66);
//   };

//   //Функция обновления позиции ползунка
//   function updateDuration() {
//     durationControl.value = video.currentTime;
//   };

//   function soundOff() {
//       //Проверка уровня громкости, если есть то off, если нет то on и запоминает текущию позицию в soundLevel

//     if(video.volume === 0) {
//       video.volume = soundLevel;
//       soundControl.value = soundLevel * 10;
//     } else {
//         //Если нет громкости возвращаем прежний уровень громкости
//       soundLevel = video.volume;
//       video.volume = 0;
//       soundControl.value = 0;
//     }
//   };

//     //Делим на 10 для более точной регулировки звука
//   function changeSoundVolume() {
//     video.volume = soundControl.value / 10;
//   };
// };