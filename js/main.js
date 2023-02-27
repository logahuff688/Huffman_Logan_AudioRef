 // collect all of the album covers into a variable
 const albumCovers = document.querySelectorAll("#album-art img");
        theAudioEl = document.querySelector("audio");
        PlayButton = document.querySelector('#PlayButton');
        PauseButton = document.querySelector('#PauseButton0');
        RewindButton = document.querySelector('#RewindButton');
        VolumeSlider = document.querySelector('#volume-control')

 // tell the audio element to play
 function playAudio() {
    let currentSrc = `audio/${this.dataset.trackref}.mp3`;
    // set the new audio source
    theAudioEl.src = currentSrc;
    

    // load the new audio source
    theAudioEl.load();
    

    // tell the audio element to play
    theAudioEl.play();
 }

 function restartAudio() {
    theAudioEl.currentTime = 0;
 }

 function pauseAudio() {
    theAudioEl.pause();
 }

 function setVolume() {
    // get the numeric value of the Volume Slider between 0 (min) and 100 (max)
    // that's what the volume of the audio should be set to
    console.log(this.value)

    theAudioEl.volume = (this.value/100) // divide the value to get a floating point number between 0 and 1
    // and then set the audio element's volume level to match
 }

 // add event handling to the album covers (listen for a click event)
 albumCovers.forEach(cover => cover.addEventListener('click', playAudio))


 // add event handling for the custom controls
 PlayButton.addEventListener('click', playAudio);
 RewindButton.addEventListener('click', restartAudio);
 PauseButton.addEventListener('click', pauseAudio);
 VolumeSlider.addEventListener('click', setVolume)