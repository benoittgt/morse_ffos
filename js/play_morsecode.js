(function() {

	var PlayMorseCode = function() {
		this.play = function (morse){
			morse.split("").map(this.convertToTime);
			console.log(morse.split("").map(this.convertToTime));
			return true;
		};
		this.timeUnit = 1000;
		this.convertToTime = function (morse) {
			if (morse == ".") {
				return this.timeUnit;
			} else {
				return 3 * this.timeUnit;
			} 
		}
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


