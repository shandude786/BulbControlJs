const bulbOn = () => {
  let bulbOnObj = document.getElementById("bulb");
  let bulbOnSrc = bulbOnObj.getAttribute("src");
  bulbOnObj.setAttribute("src", "images/ONbulb.jpg");
};

const bulbOff = () => {
  let bulbOnObj = document.getElementById("bulb");
  let bulbOnSrc = bulbOnObj.getAttribute("src");
  bulbOnObj.setAttribute("src", "images/OFFbulb.jpg");
};

const mainbulb = () => {
  let bulbOnObj = document.getElementById("bulb");
  let bulbOnSrc = bulbOnObj.getAttribute("src");
  if (bulbOnSrc == "images/OFFbulb.jpg") {
    bulbOnObj.setAttribute("src", "images/ONbulb.jpg");
    document.getElementById("bulb3").innerHTML = "OFF";
  } else {
    bulbOnObj.setAttribute("src", "images/OFFbulb.jpg");
    document.getElementById("bulb3").innerHTML = "ON";
  }
};
