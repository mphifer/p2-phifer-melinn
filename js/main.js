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

function openMenu() {
  showMenu[0].classList.toggle('show');
}

onHover[0].addEventListener('mouseenter', openMenu);
onHover[0].addEventListener('mouseleave', openMenu);


var onHove = document.getElementsByClassName('desktop-labels');
var showDesk = document.getElementsByClassName('nav-menu');


function openDesktop() {
  showDesk[0].classList.toggle('show-desktop');
}

onHove[0].addEventListener('mouseenter', openDesktop);
onHove[0].addEventListener('mouseleave', openDesktop);


//READ MORE BUTTONS
var newPara = document.createElement("p")
newPara.innerHTML = "We have new mulch near the front gate, next to the Wildflower Meadow, waterview butterfly garden, and at the end the Pine Forest.We will complete the mulch in the Wildflower Meadow. Finished the mulching of the Pine Forest. Weeded south of the waterview Butterfly Garden"
document.getElementById("button1").addEventListener("click",
  function() {
    document.getElementById("open-up").appendChild(newPara);
  }, false
);

var secondPara = document.createElement("p")
secondPara.innerHTML = "We have new mulch near the front gate, next to the Wildflower Meadow, waterview butterfly garden, and at the end the Pine Forest.We will complete the mulch in the Wildflower Meadow. Finished the mulching of the Pine Forest. Weeded south of the waterview Butterfly Garden"
document.getElementById("button2").addEventListener("click",
  function() {
    document.getElementById("open-two").appendChild(secondPara);
  }, false
);

//ACCORDION
var accord = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
