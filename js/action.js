var morseField = document.getElementById('morseField');
var morseConverter = new MorseCode();

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('morse_render').innerHTML = morseConverter.translate(morseField.value);
});