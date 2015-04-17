// JavaScript Document
var array = ["LOCAL","FAR","NEAR"];
window.onload = function addEventList(){
	var ul=document.getElementById("eventID");
	var li=document.getElementById("elementEvent");
	for(i=1;i<array.length;i++){
		li.appendChild(document.createTextNode(array[i]));
		ul.appendChild(li);
		document.getElementById("eventID").innerHTML=li;
	}
}
