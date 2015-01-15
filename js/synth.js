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
oscillator.frequency.value = initialFreq;

gainNode.connect(audioCtx.destination);
oscillator.start();

function trigger() {
  syntEmmit(0.1);
}

function syntEmmit (duration) {
  gainNode.gain.setValueAtTime(0.8, audioCtx.currentTime);
  gainNode.gain.setTargetAtTime(0.0, audioCtx.currentTime + duration, 0.001);

}


