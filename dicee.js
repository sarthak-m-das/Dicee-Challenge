var randomVar = Math.floor((Math.random()*100))%6+1;

if(randomVar===1)
document.querySelector(".img1").setAttribute("src","images/dice1.png");
else if(randomVar===2)
document.querySelector(".img1").setAttribute("src","images/dice2.png");
else if(randomVar===3)
document.querySelector(".img1").setAttribute("src","images/dice3.png");
else if(randomVar===4)
document.querySelector(".img1").setAttribute("src","images/dice4.png");
else if(randomVar===5)
document.querySelector(".img1").setAttribute("src","images/dice5.png");
else if(randomVar===6)
document.querySelector(".img1").setAttribute("src","images/dice6.png");

var randomVar1 = Math.floor((Math.random()*100))%6+1;

if(randomVar1===1)
document.querySelector(".img2").setAttribute("src","images/dice1.png");
else if(randomVar1===2)
document.querySelector(".img2").setAttribute("src","images/dice2.png");
else if(randomVar1===3)
document.querySelector(".img2").setAttribute("src","images/dice3.png");
else if(randomVar1===4)
document.querySelector(".img2").setAttribute("src","images/dice4.png");
else if(randomVar1===5)
document.querySelector(".img2").setAttribute("src","images/dice5.png");
else if(randomVar1===6)
document.querySelector(".img2").setAttribute("src","images/dice6.png");

if(randomVar === randomVar1)
document.querySelector("h1").innerHTML="Draw!";
else if(randomVar > randomVar1)
document.querySelector("h1").innerHTML="<i class='fas fa-flag'></i>Player 1 Wins!";
else if(randomVar < randomVar1)
document.querySelector("h1").innerHTML="Player 2 Wins!<i class='fas fa-flag'></i>";