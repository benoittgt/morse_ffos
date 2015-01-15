var morseField = document.getElementById('morseField');
var morseConverter = new MorseCode();
var player = new PlayMorseCode();

document.querySelector('#txt_morse').addEventListener("click", function (e) {
  morseConverted = morseConverter.translate(morseField.value.toLowerCase());
  document.getElementById('morse_render').innerHTML = morseConverted;
});

document.querySelector('#prod_morse').addEventListener("click", function (e) {
  var produce_morse = document.getElementById('morse_render').innerHTML;

  player.play(produce_morse);

});

