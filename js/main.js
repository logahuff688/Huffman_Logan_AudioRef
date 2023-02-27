//coolect all of the album covers into a variable

const   albumcovers = document.querySelectorAll("#album-art img"),
        theAudioEl = document.querySelector('audio'),
        playbutton = document.querySelector('#play'),
        stopbutton = document.querySelector('#stop'),
        rewindbutton = document.querySelector('#rewind'),
        volslider = document.querySelector('#volumeControl');




//tell the audio elemet to play

function loadAudio() {
    let currentSrc =`audio/${this.dataset.trackref}.mp3`;

    //set a new audio source
    theAudioEl.src=currentSrc;

    //load the nnew audio source
    theAudioEl.load;


    //tell the audio element to return
    playAudio();

}
//load  a new audio sorce to start play




function playAudio(){ theAudioEl.play();}
function restartAudio(){ theAudioEl.currentTime = 0;}
function pauseAudio(){ theAudioEl.pause();}


function setVolume(){
    //get the nnumeric value of the volume slider between 0 min and 100 max
    //that's what the volume of the audio should be set to 10

    console.log(this.value);

    //divide the value by 100 to get q floating poinnt between o annnd 1 -> .5 .85 etc
    theAudioEl.volume = (this.value/100);
}



//add  event hanndlinng to the album covers (listen for a click event)

albumcovers.forEach(cover => cover.addEventListener('click',loadAudio));

//add event handeling for the custom controls
playbutton.addEventListener('click', playAudio);
rewindbutton.addEventListener('click', restartAudio);
stopbutton.addEventListener('click', pauseAudio)
volslider.addEventListener('change',setVolume);