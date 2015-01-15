(function() {

  var PlayMorseCode = function() {
    this.timeUnit = 1;
    this.play = function (morse){
      var morseSplit = morse.split("").map(this.convertToTime);
      return morseSplit;
    };
    this.convertToTime = function (morse) {
      var timeUnit = 1;
      if (morse == ".") {
        console.log("dot");
        return timeUnit;
      } else if (morse == "_") {
        console.log("dash");
        return 3 * timeUnit;
      } else {
        console.log("silence")
        return 7;
      }
    };
    this.playUnit = function (units, synth){
      if(units.length > 0){
        var rest = units.splice(1,units.length);
        this.playUnit(rest, synth);
      }
      setInterval(synthEmit(units[0]), 3000);

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


