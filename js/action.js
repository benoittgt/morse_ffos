var morseField = document.getElementById('morseField');
var morseConverter = new MorseCode();

document.querySelector('#txt_morse').addEventListener("click", function (e) {
  morseConverted = morseConverter.translate(morseField.value.toLowerCase());
  document.getElementById('morse_render').innerHTML = morseConverted;
});

document.querySelector('#prod_morse').addEventListener("click", function (e) {
  var player = new PlayMorseCode();
  var produce_morse = document.getElementById('morse_render').innerHTML;

  var playerPlay = player.play(produce_morse);
  player.playUnit(playerPlay);
});

document.querySelector('.mute').addEventListener("click", trigger);
document.querySelector('.mute').addEventListener("touchstart",trigger);
