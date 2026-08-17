var acc=document.getElementsByClassName("questions");
var i;

for(i=0; i < acc.length; i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle("active");

        var panel = this.nextElementSibling; 

        if(panel.style.display==="block"){
            panel.style.display="none";
        }
        else{
            panel.style.display="block";
        }
    })

    
}
function propertiesdetailsFunction(){
    var x = document.getElementsByClassName("nav-bar1")[0];
  if (x.className === "nav-bar1") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar1";
  }
}

  