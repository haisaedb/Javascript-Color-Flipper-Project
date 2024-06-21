const colors = ["violet", "green", "red", "orange", "blue", "black", "gray", "yellow", "pink", "white", "brown", "purple", "indigo"];
const bnt = document.getElementById("btn");
const color = document.querySelector(".color");

bnt.addEventListener("click", function(){
    /* Get random number between 0- 3 */
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

