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
   if(started){
    alert('You Lost');
			var i;
   for(i=0;i<bound.length;i++){
 	  bound[i].style.backgroundColor="red";	
} 
   }
   
		})
		bound[i].style.backgroundColor="#eeeeee";
		var def = document.getElementById("status").innerHTML = "Move your mouse over the S to begin.";
	}
})
end.addEventListener('mouseover',function(){
	if(started && inbound){
 alert('You Won')	
	}
})

}
window.onload= function(){
	maze();
}