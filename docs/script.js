//Nedanstående kod är, med vissa modifieringar, hämtad från w3schools

function imageZoom(imgID, resultID) {
  //console log för att kolla om funktionen körs
  console.log("hej hej!");
  //Etablerar variabler som ska användas
  let img, lens, result, cx, cy;
  img = document.getElementById(imgID); //hämtar vilken <img> vi jobbar med
  result = document.getElementById(resultID); //hämtar resultatet

  //skapar linsen för "förstoringsglaset"
  lens = document.createElement("DIV"); //skapar en div
  lens.setAttribute("class", "img-zoom-lens");

  img.parentElement.insertBefore(lens, img);
  cx = result.offsetWidth / lens.offsetWidth; //X-axeln = resultatets bredd delat på linsens
  cy = result.offsetHeight / lens.offsetHeight; //samma för y-axeln

  result.style.backgroundImage = "url(' " + img.src + "')"; //SE OM DU KAN GÖRA DETTA SNYGGARE
  result.style.backgroundSize = img.width * cx + "px " + img.height * cy + "px"; //HÄR OCKSÅ

  lens.addEventListener("mousemove", moveLens); //koden "lyssnar" efter att musen rör sig
  img.addEventListener("mousemove", moveLens);

  lens.addEventListener("touchmove", moveLens); //koden "lyssnar" också efter att man rör vid bilden på touchscreens
  img.addEventListener("touchmove", moveLens);

  //En funktion för hur förstoringsglaset rör sig
  function moveLens(e) {
    let pos, x, y;
    e.preventDefault(); //hejda först att annat händer innan den här funktionen körs
    pos = getCursorPos(e); //hämta x & y-positioner

    //räkna ut linsens position
    x = pos.x - lens.offsetWidth / 2;
    y = pos.y - lens.offsetHeight / 2;

    //hejda linsen från att hamna utanför bilden för det vore lite onödigt
    if (x > img.width - lens.offsetWidth) {
      x = img.width - lens.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > img.height - lens.offsetHeight) {
      y = img.height - lens.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }

    //Bestäm linsens position
    lens.style.left = x + "px";
    lens.style.top = y + "px";

    //visa vad linsen ser
    result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
  }

  //hämta musens position
  function getCursorPos(e) {
    let a,
      x = 0,
      y = 0;
    e = e || window.event;

    //hämta bildens x och y-positioner
    a = img.getBoundingClientRect();

    x = e.pageX - a.left;
    y = e.pageY - a.top;

    //ta höjd för att användaren scrollar
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}
