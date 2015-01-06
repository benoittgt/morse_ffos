var audioCtx = new AudioContext();
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
var initialFreq = 800;
var initialVol = 0.1;
var dotTime = 200
gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
gainNode.gain.value = initialVol;
oscillator.connect(gainNode);
oscillator.type = 'sine';
oscillator.frequency.value = initialFreq; // value in hertz

gainNode.connect(audioCtx.destination);
oscillator.start();

function trigger() {
  gainNode.gain.setValueAtTime(0.8, audioCtx.currentTime);
  gainNode.gain.setTargetAtTime(0.0, audioCtx.currentTime + 0.0, 0.1);
}

var mute = document.querySelector('.mute');
mute.ontouchstart = trigger;
mute.onclick= trigger;

