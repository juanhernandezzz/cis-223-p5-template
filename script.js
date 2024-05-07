

//global variables will allow multiple functions access to these variables

let w;


let mySelect;
let mySound;
let mySound2;
let mySound3;

let mySelect2
let mySound4;
let mySound5;
let mySound6;

function preload(){
    // allows me to to use multiple types of sound files for references
    soundFormats('mp3','wav','ogg');
    // loads a sound file and the right & wrong are just measures I put in to see if it loaded correctly
    mySound = loadSound("bass.wav");
    mySound2 = loadSound("bass2.mp3");
    mySound3 = loadSound("bass3.wav");
    mySound4 = loadSound("snare.wav");
    mySound5 = loadSound("snare2.wav");
    mySound6 = loadSound("snare3.wav");
}
function setup() {
    alert("Welcome to my Final project!!! To use this website, choose a sound from the 2 dropdown menus, either bass or snare. Then press the 'b' button or 's' button and have at it!!!");
    // // creates a 400 px by 40 px canvas
    createCanvas(400, 400);
    // // A button is created that says Bass
    // let buttonB = createButton('Bass"B"');
    // // // Puts the button in a certain location
    // buttonB.position(50, 120);
    // // // when the button is pressed the a function is called
    // buttonB.mousePressed(bPressed);
    // fft means Fast Fourier Transform and is basically a method to capture a single frequency within a waveform
    fft = new p5.FFT();
    // It's a fancy version of volume
    mySound.amp(0.2);
// creates and positions a menu for the bass
    mySelect = createSelect();
    mySelect.position(162,8);
// options for bass
    mySelect.option('bass','mySound');
    mySelect.option('bass2','mySound2');
    mySelect.option('bass3','mySound3');
    mySelect.selected('bass');
// creates and positions a menu for the snare
    mySelect2 = createSelect();
    mySelect2.position(218,8);
// options for snare
    mySelect2.option('snare','mySound4');
    mySelect2.option('snare2','mySound5');
    mySelect2.option('snare3','mySound6');
    mySelect2.selected('snare');
   
 
}

 function draw() {
    
//these two mySelect will be drawn into the canvas for the user to interact and choose their sound
    let b = mySelect.selected();
    background(b);
    let s = mySelect2.selected();
    background(s);
    // this is meant to spread out the spectrum across the canvas
    let w = width / 64;
   // turns the canvas black
    background(0);
    // .analyze will start to turn the sound into a form factor that a computer will understand based on what people are capable of hearing
    let spectrum = fft.analyze();
    // no color borders
    noStroke();
  //Line 79 - 112 is code that I used from Dan Shiffman's video(AKA The coding train) https://youtu.be/NCCHQwNAN6Y?si=vruP0Gwa86gpljac and https://youtu.be/2O3nm0Nvbi4?si=J7juWfd0bRDW-Bfu
    // a for loop that continues to make a spectrum until s is greater than the spectrum.length or graph
    for (let s = 0; s< spectrum.length; s++)
       {
         // the spectrum will turn into a special orange color
         fill(s * 3,164,56);
         // color outline
         stroke(30);
        // the width of the spectrum will depend on how long the song lasts, on how many instruments playing, what kind of sound is being produced
        let x = map(s, 0, spectrum.length, 0, width);
        // determines height of the spectrum based on the range the sound produces from 0 to 255, sounds that are low or high will be different on the spectrum
        let h = -height + map(spectrum[s], 0, 255, height, 0);
    // creates a rectangle based on x and h
    rect(x * w - 5, height, width / spectrum.length - 2 , h )
    }
    // A way I thought of waveform is when a sound wave is made or maybe ocean waves if it makes any sense
    let waveform1 = fft.waveform();
    //clears the previous fill function
    noFill();
    // first half of the shape function and is meant to create a shape
    beginShape();
    // color of the waveform
    stroke(102,255,255);
    // this for loop continues if w is smaller than the waveform.length
    // w will keep increasing as long as long it is smaller than the length of the waveform
    for (let w = 0; w< waveform1.length; w++){
        // x or pitch represents how far away each wave is and depending on the sound the waves will be either closer or farther away
        let x = map(w, 0, waveform1.length, 0, width);
        // y or amplitude is going to show how loud or quite the sound by increase the height of the wave
        let y = map( waveform1[w], -1, 1, 0, height);
        // the vertex will be the place the individual vertexes based on the sound
        vertex(x, y);
    }
    // the second half of the shape function and is meant to stop the shape from growing
    endShape();

    
   
 }

 function keyPressed(){
    // If the "B" key is pressed, then a function is called
    if (key === 'b'){
     bPressed();
    }
    // If the "S" key is pressed, then a function is called
    else if (key === 's'){
    sPressed();
    }       
 }

// if the B button is pressed a sound will play and depending on what the user choose for the menu, a certain sound will play
 function bPressed(){
    if(mySelect.value() == 'mySound'){
     mySound.play();
    }
    else if (mySelect.value() == 'mySound2'){
        mySound2.play();
    }
    else if (mySelect.value() == 'mySound3'){
        mySound3.play();
    }
 }
// if the S button is pressed a sound will play and depending on what the user choose for the menu, a certain sound will play
 function sPressed(){
    if(mySelect2.value() == 'mySound4'){
     mySound4.play();
    }
    else if (mySelect2.value() == 'mySound5'){
        mySound5.play();
    }
    else if (mySelect2.value() == 'mySound6'){
        mySound6.play();
    }
 }

//  // this function will alert if mySound works
//  function right(){
//     alert("it works");
//  }
// // this function will alert of mySound does not work
//  function wrong(){
//     alert("does not work");
//  }

