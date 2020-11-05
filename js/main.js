//Weather API //
var weatherMessage = document.getElementById('weather');


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

      //print weather at the end of main section text
        function showWeather() {
          var weatherText = document.createTextNode(apiResult.weather[0].description);
          weatherMessage.appendChild(weatherText);
        };
        showWeather();
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=34285,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();


//HOVER AND OPEN UP SUBMENU //
var onHover = document.getElementsByClassName('main-menu-labels');
var showMenu = document.getElementsByClassName('sub-menu');


function openOne() {
  showMenu[0].classList.toggle('show');
}

onHover[0].addEventListener('mouseenter', openOne);
onHover[0].addEventListener('mouseleave', openOne);


function openTwo() {
  showMenu[1].classList.toggle('show');
}

onHover[1].addEventListener('mouseenter', openTwo);
onHover[1].addEventListener('mouseleave', openTwo);


function openThree() {
  showMenu[2].classList.toggle('show');
}

onHover[2].addEventListener('mouseenter', openThree);
onHover[2].addEventListener('mouseleave', openThree);
