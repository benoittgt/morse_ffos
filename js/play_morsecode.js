(function() {

  var PlayMorseCode = function() {
    this.timeUnit = 1;
    this.play = function (morse){
      var morseTemp = morse.split("");
      console.log(morseTemp);

      var morseSplit = morseTemp.forEach(function (morse) {
        var timeUnit = 1;
        if (morse == ".") {
          return timeUnit;
        } else if (morse == "_") {
          return 3 * timeUnit;
        } else {
          return 7;
        }
      });

      console.log(morseSplit);
      console.log(morse);
      return morseSplit;
    };

    this.convertToTime = function (morse) {
      var timeUnit = 1;
      if (morse == ".") {
        return timeUnit;
      } else if (morse == "_") {
        return 3 * timeUnit;
      } else {
        return 7;
      }
    };

    this.playUnit = function (units, synth){
      if(units.length > 0){
        var rest = units.splice(1,units.length);
        this.playUnit(rest, synth);
        if (units[0] == 7) {
          console.log("silence :no sound");
        } else {
          synthEmit(units[0]);
          console.log(units[0]);
          console.log(units);
          setInterval(this.playUnit(rest, synth), 3000);
        }
      }

    };
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = PlayMorseCode;
    } else {
      exports.PlayMorseCode = PlayMorseCode;
    }
  } else {
    window.PlayMorseCode = PlayMorseCode;
  }

}());


