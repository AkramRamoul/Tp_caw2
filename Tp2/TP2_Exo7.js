function maze(){
var started=false;
var inbound=false;
var bound = document.getElementsByClassName("boundary");
var start = document.getElementById("start");
var end = document.getElementById("end");
var cheat=document.getElementById("maze");

start.addEventListener('mouseover',function(){
	started=true;
	inbound=true;
	var i;
	for(i=0;i<bound.length;i++){
		bound[i].addEventListener('mouseover',function(){
			var i;
   for(i=0;i<bound.length;i++){
 	  bound[i].style.backgroundColor="red";	
    var L = document.getElementById("status").innerHTML = "You Lost";
} 
		})
		bound[i].style.backgroundColor="#eeeeee";
		var def = document.getElementById("status").innerHTML = "Move your mouse over the S to begin.";
	}
})

end.addEventListener('mouseover',function(){
	if(started && inbound){
		// alert("You Won");
   var W = document.getElementById("status").innerHTML = "You Won";
			for(i=0;i<bound.length;i++){
 	  bound[i].style.backgroundColor="green";}
	}
	else if(started)
		 // alert("No Cheating, Move The Mouse Inside the Border !!")
			cheating1();
		else
   cheating2();
			// alert("Please, Don't Cheat!!")
})

cheat.addEventListener('mouseleave',function(){
	inbound=false;
})

function cheating1(){
	var CH = document.getElementById("status").innerHTML = "No Cheating, Move The Mouse Inside the Border !!" ;
	for(i=0;i<bound.length;i++){
 	  bound[i].style.backgroundColor="red";}
	
}
function cheating2(){
	var C = document.getElementById("status").innerHTML = "Please, Don't Cheat!!";
	for(i=0;i<bound.length;i++){
 	  bound[i].style.backgroundColor="red";}
	
}


}


window.onload= function(){
	maze();
}