// Player 1
let randomNumber1=Math.floor(Math.random()*6+1);
let randomDiceImage1="dice"+randomNumber1+".png";
let randomImageSource1="images/"+randomDiceImage1;
document.querySelector(".img1").setAttribute("src",randomImageSource1);

// Player 2
let randomNumber2=Math.floor(Math.random()*6+1);
let randomDiceImage2="dice"+randomNumber2+".png";
let randomImageSource2="images/"+randomDiceImage2;
document.querySelector(".img2").setAttribute("src",randomImageSource2);

// Winner
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="🚩 Player 1 Wins!"
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").textContent="Player 2 Wins! 🚩"
}
else if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").textContent="Draw!"
}