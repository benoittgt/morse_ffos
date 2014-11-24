// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
// create Oscillator and gain node
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
// connect oscillator to gain node to speakers
oscillator.connect(gainNode);
// oscillator parameters
var initialFreq = 800;
var initialVol = 0.1;
var dotTime = 200
// set options for the oscillator
oscillator.type = 'sine';
oscillator.frequency.value = initialFreq; // value in hertz
oscillator.start();

gainNode.gain.value = initialVol;

var flag = true;


function morseEmmit(dotTime) {
	flag = false
	console.log(flag);
    gainNode.connect(audioCtx.destination);
    window.setTimeout("gainNode.disconnect(audioCtx.destination)", 1200);
    window.setTimeout("var flag = true", 1400);
    window.setTimeout("console.log(flag)", 1400);
}

// mute button
var mute = document.querySelector('.mute');
mute.onclick = function() {
	morseEmmit(300);
};

