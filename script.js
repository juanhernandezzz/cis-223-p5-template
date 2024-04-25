
let mySound;

function preload(){
    soundFormats('mp3','wav','ogg');
    mySound = loadSound("bass.wav", right, wrong);
}
function setup() {
    createCanvas(400, 400);
    
}

 function draw() {
   
    background(50);
    square(50, 50, 50);
    
 }



 function b1pressed(){
     mySound.play();
 }

 
 function right(){
    alert("it works");
 }

 function wrong(){
    alert("does not work");
 }