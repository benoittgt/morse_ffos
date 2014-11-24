// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
// create Oscillator and gain node
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
// connect oscillator to gain node to speakers
oscillator.connect(gainNode);
// oscillator parameters
var initialFreq = 440;
var initialVol = 0.1;
var dotTime = 200
// set options for the oscillator
oscillator.type = 'sine';
oscillator.frequency.value = initialFreq; // value in hertz
oscillator.start();

gainNode.gain.value = initialVol;


// mute button
var mute = document.querySelector('.mute');
mute.onclick = function() {
    // start and stop delayed on the oscillator doesn't work so I unmute-mute the signal.
    gainNode.connect(audioCtx.destination);
    window.setTimeout("gainNode.disconnect(audioCtx.destination)", dotTime);
};

