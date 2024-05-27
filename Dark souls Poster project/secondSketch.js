let textInput;
let pwRequest;
let correctPasswords = ["extinguish", "link"]; // Store passwords in an array
let accessGranted = false;
let accessLevel = 0;
let media;
let backgroundImage;
let soundFile;

function preload() {
    backgroundImage = loadImage('media/kiln.jpeg');                       // downloaded from Google images https://steamuserimages-a.akamaihd.net/ugc/272841093783413292/6E3D0CEFC292EE5DB48BD274CC4FFCA186159E7C/?imw=1024&imh=576&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true
    soundFile = loadSound('media/2-20 Epilogue (Alternative Edit).mp3');  // downloaded from https://downloads.khinsider.com/game-soundtracks/album/dark-souls-iii-soundtracks
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    pwRequest = createElement('h2', '[Link] the First Flame or [extinguish] the First Flame');   // creating the text for the question of the password
    pwRequest.position(windowWidth / 4 - 250, windowHeight / 3);
    pwRequest.style('color', 'white');
    pwRequest.style('text-shadow', '3px 3px 20px red');
    pwRequest.style('font-family', 'monospace');

    textInput = createInput('', 'password');                                 // where password is inputted
    textInput.position(windowWidth / 4 - 100, windowHeight / 2);
    textInput.size(200, 20);

    textInput.changed(checkPassword);

    backgroundImage.resize(windowWidth, windowHeight);
    image(backgroundImage, 0, 0);

    media = createVideo('media/Dark Soul.mp4');                             // calling video, sample taken from https://www.geeksforgeeks.org/p5-mediaelement-volume-method/
    media.size(1000, 600);                                                  // video use captured by me using my xbox
    media.position((windowWidth - 1000) / 2, (windowHeight - 600) / 2);
    media.hide();
    media.showControls();
}

function draw() {
    if (!accessGranted) {             // the ! means it is presenting as false and so shows the custom background image
        image(backgroundImage, 0, 0); // Draw background image
    } else {
        background(0);                // Set background to black when access is granted
        if (accessLevel === 1) {      // written this way so there can be two variable answers when access is granted
            // Display content 1
        } else if (accessLevel === 2) {
            // Display content 2
        }
        textInput.hide();
        pwRequest.hide();
    }
}

function checkPassword() {
    let enteredPassword = textInput.value();                  // the use of the array to call to answers to the password, giving three different outcomes, rather than two
    if (enteredPassword === correctPasswords[0]) {            // always starts at 0
        accessGranted = true;
        accessLevel = 1;
        clear();
        if (!soundFile.isPlaying()) {                         // same meaning as if now sound plays, now play sound
            soundFile.play();
        }        
    } else if (enteredPassword === correctPasswords[1]) {
        accessGranted = true;
        accessLevel = 2;
        clear();
        if (media) {
            media.show();
            media.play();
        }        
    } else {
        alert("Nothing happens, you sit and gaze into the bonfire");
        return;
    }

    textInput.hide();
    pwRequest.hide();
    textInput.value(''); // Clearing inputted value, the text box, and text
}








