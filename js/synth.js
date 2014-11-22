// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
// create Oscillator and gain node
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
// connect oscillator to gain node to speakers
oscillator.connect(gainNode);
// create initial theremin frequency and volumn values
var initialFreq = 800;
var initialVol = 0.006;
// set options for the oscillator
oscillator.type = 'sine';
oscillator.frequency.value = initialFreq; // value in hertz
oscillator.detune.value = 100; // value in cents
oscillator.start();
oscillator.onended = function() {
	console.log('Your tone has now stopped playing!');
}
gainNode.gain.value = initialVol;

// mute button
var mute = document.querySelector('.mute');
mute.onclick = function() {
		gainNode.connect(audioCtx.destination);
		setTimeout("gainNode.disconnect(audioCtx.destination)", 200);
}

