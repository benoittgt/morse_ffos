var morseField = document.getElementById('morseField');
var morseConverter = new MorseCode();


document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    morseConverted = morseConverter.translate(morseField.value.toLowerCase());
    document.getElementById('morse_render').innerHTML = morseConverted;

    var morseConvertedA = morseConverted.split('');
    var morseLength = morseConvertedA.length;

    for (var morseChar = 0; morseChar < morseLength; morseChar++) {
            console.log(morseConvertedA[morseChar]);
            if (morseConvertedA[morseChar] == "_") {
                morseEmmit(500);
                console.log("500");
            } else if (morseConvertedA[morseChar] == ".") {
                morseEmmit(200);
                console.log("500");
            } else if (morseConvertedA[morseChar] == " ") {
                console.log("space");
                window.setTimeout(800);
            } else {
                  console.log(flag);
        }
    }

});