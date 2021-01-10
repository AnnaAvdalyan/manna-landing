ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [47.946416, 37.778479],
        zoom: 18
    });
    myMap.geoObjects.add(new ymaps.Placemark([47.946416, 37.778479], {
        // balloonContent: 'цвет <strong>носика Гены</strong>',
        // iconCaption: 'Очень длиннный, но невероятно интересный текст'
      }, {
          preset: 'islands#dotIcon',
          iconColor: '#FF0000'
        }));
}
const navToggle = document.querySelector('.nav-toggle');
		const menu = document.querySelector('.nav');
		navToggle.addEventListener('click', () => {
			navToggle.classList.toggle('nav-open')
			menu.classList.toggle('open')
		});
function showVideo() {
    const videoShow = document.querySelector('.video');
    const sectionVideo = document.querySelector('.section-video');
    sectionVideo.classList.add('remove');
    videoShow.style = 'display:block';
    videoShow.autoplay;
    videoShow.setAttribute("controls","controls")   
    videoShow.load();
}
 