//FOREST PAGE JS//

//READ MORE BUTTONS
var newPara = document.createElement("p");
newPara.innerHTML = "We have new mulch near the front gate, next to the Wildflower Meadow, waterview butterfly garden, and at the end the Pine Forest. We will complete the mulch in the Wildflower Meadow. Finished the mulching of the Pine Forest. Weeded south of the waterview Butterfly Garden."
document.getElementById("button1").addEventListener("click",
  function() {
    document.getElementById("open-up").appendChild(newPara);
  }, false
);

var secondPara = document.createElement("p");
secondPara.innerHTML = "We walked the entire Forest picking up trash and keeping recycled materials in clear bags. Everything else we put in regular trash bags. We worked diligently with J & T Holland to get Cedars planted in Venice’s Urban Forest. Reef Rovers were out this Saturday with VUF Team."
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
