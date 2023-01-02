function maze(){
var started=false;
var inbound=false;
var bound = document.querySelectorAll(".boundary");
var start = document.getElementById("start");
var end = document.getElementById("end");
var cheat=document.getElementById("maze");


	var i;
	for(i=0;i<bound.length;i++){
		bound[i].addEventListener('mouseover',function(){
			var i;
   for(i=0;i<bound.length;i++){
 	  bound[i].style.backgroundColor="red";	
} 
		})
	}
 var i;
	for(i=0;i<bound.length;i++){
		bound[i].addEventListener('mouseleave',function(){
			var i;
   for(i=0;i<bound.length;i++){
 	  bound[i].style.backgroundColor="#eeeeee";	
} 
		})
	}
}
window.onload= function(){
	maze();
}