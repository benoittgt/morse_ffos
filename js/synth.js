var audioCtx = new AudioContext();
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
oscillator.start();

function trigger() {
  console.log("trigger");
  gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
  gainNode.gain.setTargetAtTime(0.0, audioCtx.currentTime + 0.01, 0.5);
}

var mute = document.querySelector('.mute');
mute.ontouchstart = trigger;
mute.onclick= trigger;

/*
var initialFreq = 800;
var initialVol = 0.1;
var dotTime = 200
oscillator.type = 'sine';
oscillator.frequency.value = initialFreq; // value in hertz
oscillator.start();

gainNode.gain.value = initialVol;

var morseStatut = morseEmmit(dotTime);

function morseEmmit(dotTime){
  if ( morseStatut != null )
  {
    gainNode.connect(audioCtx.destination);
    window.setTimeout("gainNode.disconnect(audioCtx.destination)", 1200);
  }
  else
  {
    window.setTimeout("morseEmmit(dotTime);",100);
  }
}

function computeVariable(morseStatut) {
  // arithmetic operations that use myVar [2]
}


// mute button
var mute = document.querySelector('.mute');
mute.onclick = function() {
  morseEmmit(300);
};
*/
