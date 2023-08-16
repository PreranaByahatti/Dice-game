var randomnumber1=Math.floor((Math.random()*6)+1)
var i = "dice"+randomnumber1+".png";
var imgp="./images/"+i;
document.querySelectorAll("img")[0].setAttribute("src",imgp);

var randomnumber2=Math.floor((Math.random()*6)+1)
var i = "dice"+randomnumber2+".png";
var imgp="./images/"+i;
document.querySelectorAll("img")[1].setAttribute("src",imgp);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomnumber1===randomnumber2){
    document.querySelector("h1").innerHTML="It's a tie";

}
else{
    document.querySelector("h1").innerHTML="Player 2 wins";
}