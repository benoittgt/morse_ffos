var PlayMorseCode =  require("../js/play_morsecode.js");

describe("test morse app", function () {
	var player = new PlayMorseCode();

	it("play_morse exist", function(){
		expect(player.play("-.--")).toEqual(true);
	})

	it("convert to time", function(){
		expect(player.convertToTime("_")).toEqual(3000);
		expect(player.convertToTime(".")).toEqual(1000);
	})

});