# [Sonic Generative Animation Poster]

23046621 BSc Computer Science Spring '24

# Project Description

I have created a time based animation featuring the sonic the hedgehog character. It involves both an imitaiton moving startscreen, background when entering the "game", as well as the ability to add random generative animation and finally play music.

#### Design Ideas and Inspirations

Inspired by the classic arcade sonic, this project featured the opening animated cutscenes and start screen of sonic mania. It was made to imitate the feel of playing the game, using footage of the first special stage as the first thing you see when you "start" the game. The main source of the code came directly from week 4 being the idea of the random moving images; with a lot of additional parts to the code, primarily being the moving aspect of all images moving in their array 1+ for each picture. An additioanlly alteration to the code was also the use of scalefactor on the addedd images allowing them to shrink and grow around the screen as they move randomly. I also used music downloaded online from past sonic tracks to convey even furthur the feel of setting up the "game". when past the start screen I added additional music to imitate how there are different music each stage in the actually games.

#### Design Criteria and Outcome

Even tho this was an animation I still wanted some interactivity. As a result, I used both key and mouse functions: keys such as spacebar to bring the "game" past start and then F and J to add the random arranging images, and finally return to go back to the start screen and essentially reset the animation. MousePress is soley used to change the music track after the "game" has started. This was done via an assortment of if and else statements, with the key reason why this was applicable to achieve being the use of ! , meaning not which helped in allowing the prevention of music as well as images to not show and play. The preload function to call allowed the animation to play smoothly as well as allow for easy editing of images as arrays in the draw function. In setup the resize method is called to shrinl the would be added images, allowing for the scalefactor function to work acceptible, so the whole screen isnt covered for example. The draw function makes use of this, showing that the images shink in even increments as well as grow, with each image set shown being different with different integers being used, to show more variation. Although this part is fixed, the random criteria is fulfilled with the noise function, which allows the images to be mapped on the canvas at random directions, being able to randomly  move around and through a fixed point mention in the code. This was done so the majority of images do not overlap. The aspect for two different sets of images to cycle was done by having the key pressed function allow for the two different keys, F and J to give accesGranted to two more seperate assesGranted functions so that no image set can overlap. To capture the images in all the video sets, I used VLC media to capture every 20 frames of my uploaded video as images spanning over the entire video, to which I then deleted some images where there were to many black frames etc, to make the animation flow more smoothly; I wouldve done 10 frames but this wouldve made the saving and naming of all images to frame_++ increments to long to fill out. I then finally added text at the top of the page to focus on a user friendly environment where now anyone can use and see the full extent of the animation, instead of typing random keys to see if something would change the animation.
I am satisfied with the end product of this animation, as it does convey the feel of a Sonic game which was my intended goal for this animation, however to improve I would want to have the mousePressed function to change the background images to cycle to a different set, however I did attempt this to no avail, otherwise with the addition of the music function alone, I belive fits and builds upon the visually entertaining criteria, making the viewer more excited. 

#### Artifact Demo

[Attached seperately due to size]

#### Credits

Videos were captured by myself using my xbox
- [Sonic the Hedghog 2 02_-_Emerald_Hill_Zone.mp3](https://downloads.khinsider.com/search?search=sonic)                      
- [Sonic the lost world 03 Windy Hill - Zone 1.mp3](https://downloads.khinsider.com/search?search=sonic)
- [Sonic Heroes 16 Seaside Hill- Act 1.mp3](https://downloads.khinsider.com/search?search=sonic)
- [Sonic Mania 1-21 Hi-Spec Robo Go! (Hard-Boiled Heavies Boss).mp3](https://downloads.khinsider.com/search?search=sonic)
- [Sonic the Hedgehog 2 03_-_Chemical_Plant_Zone.mp3](https://downloads.khinsider.com/search?search=sonic)
- [Sonic 3 & Knuckles 18-flying_battery_act_1.mp3](https://downloads.khinsider.com/search?search=sonic)
- [Sonic Unleashed 20 Rooftop Run- Act 1.mp3](https://downloads.khinsider.com/search?search=sonic)
- [Sonic CD jp_stardust_speedway_zone_(bad_future).mp3](https://downloads.khinsider.com/search?search=sonic)
- [Sonic CD us_metallic_madness_zone_(bad_future).mp3](https://downloads.khinsider.com/search?search=sonic)
- [Sonic Generations Green Hill- Act 2 - Normal.mp3](https://downloads.khinsider.com/search?search=sonic)


# Author(s) and License(s)

MIT License

Copyright (c) [2024] [Balmee Hunumunt]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.