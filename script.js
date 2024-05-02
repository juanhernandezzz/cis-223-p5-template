

//global variable
let mySound;


function preload(){
    // allows me to to use multiple types of sound files for references
    soundFormats('mp3','wav','ogg');
    // loads a sound file and the right & wrong are just measures I put in to see if it loaded correctly
    mySound = loadSound("bass.wav", right, wrong);
}
function setup() {
    // creates a 400 px by 40 px canvas
    createCanvas(400, 400);
    // A button is created that says Bass
    let buttonB = createButton('Bass"B"');
    // Puts the button in a certain location
    buttonB.position(50, 120);
    // when the button is pressed the a function is called
    buttonB.mousePressed(bPressed);
    // fft means Fast Fourier Transform and is basically a method to capture a single frequency within a waveform
    fft = new p5.FFT();
    // It's a fancy version of volume
    mySound.amp(0.2);
    
}

 function draw() {
   // turns the canvas black
    background(0);
    // .analyze will start to turn the sound into a form factor that a computer will understand based on what people are capable of hearing
    let spectrum = fft.analyze();
    // no color borders
    noStroke();
    // the spectrum will turn into a special orange color
    fill(226,164,43);
    // a for loop that continues to make a spectrum until s is greater than the spectrum.length
    for (let s = 0; s< spectrum.length; s++)
{
        // determines the width 
        let x = map(s, 0, spectrum.length, 0, width);
        // determines height
        let h = -height + map(spectrum[s], 0, 255, height, 0);
    // creates a rectangle based on x and h
    rect(x, height, width / spectrum.length, h )
    }
    // A way I thought of waveform is when a sound wave is made or maybe ocean waves if it makes any sense
    let waveform = fft.waveform();
    //clears the previous fill function
    noFill();
    // first half of the shape function and is meant to create a shape
    beginShape();
    // color of the waveform
    stroke(226,164,43);
    // this for loop continues if w is smaller than the waveform.length
    for (let w = 0; w< waveform.length; w++){
        // determine the width 
        let x = map(w, 0, waveform.length, 0, width);
        // determines the height
        let y = map( waveform[w], -1, 1, 0, height);
        vertex(x, y);
    }
    // the second half of the shape function and is meant to stop the shape from growing
    endShape();
    // If the "B" key is pressed, then a function is called
    if(keyIsPressed === true){
        if (key === 'b') 
        {
            
            bPressed();
       
        }
    }
   
 }


// if the button is pressed a sound will play
 function bPressed(){
     mySound.play();
 }

 // this function will alert if mySound works
 function right(){
    alert("it works");
 }
// this function will alert of mySound does not work
 function wrong(){
    alert("does not work");
 }