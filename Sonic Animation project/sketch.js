let imgSet = [];
let imgSet2 = [];
let imgSet3 = [];
let imgSet4 = [];
let pos1, pos2, pos3;
let lastUpdate = 0;
let updateInterval = 180;
let imgIndex1 = 0;
let imgIndex2 = 4;            // a set value for how much the images move around the screen when called
let imgIndex3 = 7;
let imgIndex4 = 2;
let imgIndex5 = 3;            
let imgIndex6 = 5;
let accessGranted = false;
let accessGranted2 = false;
let accessGranted3 = false;
let back;
let preAccessIndex = 0;             // resets to 0 allow for the first in all instances to be active when called, so no time is caught inbetween one another
let preAccessLastUpdate = 0;
let preAccessUpdateInterval = 175; // Initial speed (in milliseconds)
let frameDuration = 150;           // Duration for each frame in milliseconds
let musicFiles = [
  'Music use/02_-_Emerald_Hill_Zone.mp3',                        // all music downloaded from https://downloads.khinsider.com/search?search=sonic
  'Music use/03 Windy Hill - Zone 1.mp3',
  'Music use/16 Seaside Hill- Act 1.mp3',
  'Music use/1-21 Hi-Spec Robo Go! (Hard-Boiled Heavies Boss).mp3',
  'Music use/03_-_Chemical_Plant_Zone.mp3',
  'Music use/18-flying_battery_act_1.mp3', 
  'Music use/20 Rooftop Run- Act 1.mp3',
  'Music use/jp_stardust_speedway_zone_(bad_future).mp3',
  'Music use/us_metallic_madness_zone_(bad_future).mp3',   
];
let musicGreenHill = ['Music use/03 Green Hill- Act 2 - Normal.mp3'];
let sounds = [];
let currentSound = null;

function preload() {
  for (let i = 1; i <= 69; i++) {                          // calling through frame1 to frame69 for example
    imgSet.push(loadImage('pic2/frame' + i + '.jpg'));
  }
  for (let j = 1; j <= 87; j++) {
    let img = loadImage('pic4/frame' + j + '.jpg');            // calling all images here allows the code to not slowdown over itself preventing errors, aswell as allows easy manipulation to switch around images when editing
    imgSet2.push(img);                                                 
  }
  for (let k = 1; k <= 64; k++) { 
    let img = loadImage('pic1/frame' + k + '.jpg');          // all images were captured in video format on my xbox and then captured in 20 frame intervals using VLC media player 
    imgSet3.push(img);
  }
    for (let l = 1; l <= 82; l++) { 
    let img = loadImage('pic3/frame' + l + '.jpg');
    imgSet4.push(img);
  }
  for (let i = 0; i < musicFiles.length; i++) {       // Load soundfiles
    sounds[i] = loadSound(musicFiles[i]);  
  }  
  greenHillSound = loadSound(musicGreenHill); // Load the green sound
}


function setup() {
  createCanvas(1200, 600);
  for (let i = 0; i < imgSet.length; i++) {   // allows for the smaller videos to scale down into the canvas
    imgSet[i].resize(200, 100);
  }
  for (let l = 0; l < imgSet4.length; l++) {  
    imgSet4[l].resize(200, 100);
  }
  back = imgSet2[0];              // Initialize back with the first image in imgSet2
  background(0);
  
  pos1 = createVector(50, 80);
  pos2 = createVector(-70, 100);
  pos3 = createVector(110, 150);
}


function keyPressed() {
  if (key === ' ') {       // Allows for use of the Spacebar
    accessGranted = true;
    if (currentSound && currentSound.isPlaying()) {
      currentSound.stop();
    }    
    let randomIndex = floor(random(sounds.length));
    currentSound = sounds[randomIndex];
    currentSound.play();     
  }

  if (keyCode === RETURN) {   
    accessGranted = false;    // allows for the animation to appear to reset back to the start like the game
    imgIndices = [];
    preAccessIndex = 0;
    preAccessLastUpdate = 0;
    if (currentSound && currentSound.isPlaying()) {
      currentSound.stop();
    }
    
  } 

  if (key === 'f') {
    // If 'f' key is pressed again the images are removed/ when pressed images are shown
    if (accessGranted2) {
      accessGranted2 = false;
    } else {
      accessGranted2 = true;
    }
  }

  if (key === 'j') {
    // If 'j' key is pressed again the images are removed/ when pressed images are shown
    if (accessGranted3) {
      accessGranted3 = false;
    } else {
      accessGranted3 = true;
    }
  }
}


function mousePressed() {
  // Stop current sound if playing
  if (currentSound && currentSound.isPlaying()) {
    currentSound.stop();
  }
  
  // Play a random sound
  let randomIndex = floor(random(sounds.length));
  currentSound = sounds[randomIndex];
  currentSound.play();                              // allows for the songs to refresh and play again at random
}


function draw() {
  if (!accessGranted && !greenHillSound.isPlaying()) {    // written with isPlaying so that music isnt overlayed with itself
    greenHillSound.loop();
  } else if (accessGranted && greenHillSound.isPlaying()) {
    greenHillSound.stop();
  }  
  if (accessGranted) {
    let currentTime = millis();
    if (currentTime - lastUpdate > updateInterval) {
      background(back);

      if (accessGranted2) {                                                // taken from my week 4 work, modified so all images now scale to diffent sizes continuosly whilst cycling through sets
        let scaleFactor0 = map(sin(millis() / 700), -1, 1, 0.5, 2);
        let w1 = imgSet[imgIndex2].width * scaleFactor0;
        let h1 = imgSet[imgIndex2].height * scaleFactor0;
        let x1 = map(noise(pos2.x), 3, 0, 0, width - imgSet[imgIndex2].width);
        let y1 = map(noise(pos2.y), 2, 0, 0, height - imgSet[imgIndex2].height);     // noise being the movement style of sporadic placement printed again on the canvas
        image(imgSet[imgIndex2], x1, y1, w1, h1);

        let scaleFactor = map(sin(millis() / 1100), -1, 1, 0.5, 2);
        let w2 = imgSet[imgIndex2].width * scaleFactor;
        let h2 = imgSet[imgIndex2].height * scaleFactor;
        let x2 = map(noise(pos2.x), 0, 1, 0, width - imgSet[imgIndex2].width);
        let y2 = map(noise(pos2.y), 0, 1, 0, height - imgSet[imgIndex2].height);
        image(imgSet[imgIndex2], x2, y2, w2, h2);

        let scaleFactor2 = map(sin(millis() / 1900), -1, 1, 0.5, 2);
        let w3 = imgSet[imgIndex3].width * scaleFactor2;
        let h3 = imgSet[imgIndex3].height * scaleFactor2;
        let x3 = map(noise(pos3.x), 0, 5, 1, width - imgSet[imgIndex3].width);
        let y3 = map(noise(pos3.y), 0, 5, 1, height - imgSet[imgIndex3].height);
        image(imgSet[imgIndex3], x3, y3, w3, h3);

        pos1.x += 0.1;
        pos1.y += 0.1;
        pos2.x += 0.3;
        pos2.y += 0.3;
        pos3.x += 0.5;
        pos3.y += 0.5;

        imgIndex1 = (imgIndex1 + 1) % imgSet.length;       // this is what prints the actual images after the scaled variable is added
        imgIndex2 = (imgIndex2 + 1) % imgSet.length;
        imgIndex3 = (imgIndex3 + 1) % imgSet.length;
      }
    
      if (accessGranted3) {                                                           // two access granteds are used so the two button promts can print seperately
        let scaleFactor0 = map(sin(millis() / 1000), -1, 1, 1.1, 2);
        let w1 = imgSet4[imgIndex4].width * scaleFactor0;
        let h1 = imgSet4[imgIndex4].height * scaleFactor0;
        let x1 = map(noise(pos2.x), 1, 0, 4, width - imgSet4[imgIndex4].width);
        let y1 = map(noise(pos2.y), 1, 0, 4, height - imgSet4[imgIndex4].height);
        image(imgSet4[imgIndex4], x1, y1, w1, h1);

        let scaleFactor = map(sin(millis() / 500), -1, 1, 0.5, 1.5);
        let w2 = imgSet4[imgIndex5].width * scaleFactor;
        let h2 = imgSet4[imgIndex5].height * scaleFactor;
        let x2 = map(noise(pos2.x), 2, 0, 6, width - imgSet4[imgIndex5].width);
        let y2 = map(noise(pos2.y), 0, 2, 0, height - imgSet4[imgIndex5].height);
        image(imgSet4[imgIndex5], x2, y2, w2, h2);

        let scaleFactor2 = map(sin(millis() / 3000), -4, 4, 0.5, 2);
        let w3 = imgSet4[imgIndex6].width * scaleFactor2;
        let h3 = imgSet4[imgIndex6].height * scaleFactor2;
        let x3 = map(noise(pos3.x), 0, 2, 3, width - imgSet4[imgIndex6].width);
        let y3 = map(noise(pos3.y), 2, 0, 6, height - imgSet4[imgIndex6].height);
        image(imgSet4[imgIndex6], x3, y3, w3, h3);

        pos1.x += 0.1;
        pos1.y += 0.1;
        pos2.x += 0.3;
        pos2.y += 0.3;
        pos3.x += 0.5;
        pos3.y += 0.5;

        imgIndex4 = (imgIndex4 + 1) % imgSet4.length;
        imgIndex5 = (imgIndex5 + 1) % imgSet4.length;
        imgIndex6 = (imgIndex6 + 1) % imgSet4.length;
      }


      // Update the back variable to cycle through imgSet2
      let frameIndex = floor(currentTime / frameDuration) % imgSet2.length;
      back = imgSet2[frameIndex];

      lastUpdate = currentTime;
    }
  } else {                             // this is what plays the intro animation continuously allowing for loop and constant movement
    let currentTime = millis();
    if (currentTime - preAccessLastUpdate > preAccessUpdateInterval) {
      background(imgSet3[preAccessIndex]);
      preAccessIndex = (preAccessIndex + 1) % imgSet3.length;
      preAccessLastUpdate = currentTime;
    }
  }
}


// //save to gif animation
// function keyPressed() {
//   if (key === 's'){
//     saveGif('time-based_animation.gif', 1); // 1 sec
//   }
// }
