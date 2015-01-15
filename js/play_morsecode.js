(function() {

  var PlayMorseCode = function() {
    this.timeUnit = 1000;
    this.play = function (morse){
      morse.split("").map(this.convertToTime);
      console.log(morse.split("").map(this.convertToTime));
      return true;
    };
    this.convertToTime = function (morse) {
      var timeUnit = 1000;
      if (morse == ".") {
        return timeUnit;
      } else {
        return 3 * timeUnit;
      }
    };
    this.playUnit = function (units, synth){
      if(units.length > 0){
        synth(units[0]);
        var rest = units.splice(1,units.length);
        this.playUnit(rest, synth);
      } else {
        return
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


