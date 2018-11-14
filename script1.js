var button1 = document.querySelector("#b1");
var button2 = document.getElementById("b2");
var button3 = document.getElementById("b3");
var numInput = document.querySelector("input");
var p = document.querySelector("#p1");
var p1score = 0;
var p2score = 0;
var h1 = document.getElementById("1h1");
var h2 = document.getElementById("2h1");
var gamescore = false;
// var number = document.getElementById("number1");
var winningscore = 5;

// number.addEventListener("click",function(){
// 	winningscore.textContent = number;
// });
// console.log(winningscore);

button1.addEventListener("click", function(){
	//window.alert("button1 is clicked");
	if(!gamescore){
		p1score++;
	//console.log(p1score);
	if(p1score === winningscore){
		//h1.textContent = p1score;
		gamescore = true;
		alert("player1 wins");
		h1.style.color = "green";
	}
	h1.textContent = p1score;
	}
	
});

button2.addEventListener("click", function(){
	//window.alert("button1 is clicked");
	if(!gamescore){
		p2score++;
	//console.log(p1score);
	if(p2score === winningscore){
		//h1.textContent = p1score;
		gamescore = true;
		alert("player2 wins");
		h2.style.color = "green";
	}
	h2.textContent = p2score;
	}
	
});

button3.addEventListener("click",function(){
	reset();
});
// if(p1score == 5 || p2score == 5){
// 	alert("match over");
// }
function reset(){
	p1score = 0;
	p2score = 0;
	h1.textContent = p1score;
	h2.textContent = p2score;
	gamescore = 0;
	//winningscore = 5;
	h1.style.color = "black";
	h2.style.color = "black";
}
//alert("jvavj");

numInput.addEventListener("change",function(){
	//alert("input is changed");
	p.textContent = numInput.value;
	winningscore = Number(numInput.value);
	reset();
});