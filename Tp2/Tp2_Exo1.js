function maze(){
var started=false;
var inbound=false;
var bound = document.getElementsByClassName("boundary");
var start = document.getElementById("start");
var end = document.getElementById("end");
var cheat=document.getElementById("maze");


    for (var i = 0; i < bound.length; i++) {
      bound[i].addEventListener("mouseover", function() {
        win = false;
        this.style.background = "red";
        
        
        
      });
      bound[i].addEventListener("mouseleave", function() {
        win = false;
        this.style.background = "#eeeeee";
        
      });
    }
    
  }
  window.onload= function(){
	maze();
}