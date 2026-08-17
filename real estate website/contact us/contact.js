
function hamburgerFunction() {
  var x = document.getElementsByClassName("nav-bar1")[0];
  if (x.className === "nav-bar1") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar1";
  }
}

