playerone = Math.floor(Math.random() * 6) + 1;
playertwo = Math.floor(Math.random() * 6) + 1;
document.getElementsByClassName("img1")[0].src = `./images/dice${playerone}.png`;
document.getElementsByClassName("img2")[0].src = `./images/dice${playertwo}.png`;
if (playerone>playertwo){
    document.getElementById("winner").innerHTML = "Player one wins"
}
else if (playerone==playertwo){
    document.getElementById("winner").innerHTML = "tie"
}
else {
    document.getElementById("winner").innerHTML = "Player two wins"
}