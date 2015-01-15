var PlayMorseCode =  require("../js/play_morsecode.js");
//require("../js/synth.js");

describe("test morse app", function () {
  var player = new PlayMorseCode();

  xit("play_morse exist", function(){
    expect(player.play("-.--")).toEqual(true);
  })

  it("convert to time", function(){
    expect(player.convertToTime("_")).toEqual(3);
    expect(player.convertToTime(".")).toEqual(1);
  })

  xit("play unit", function(){
    memory = 0
    player.playUnit([1],function(value){memory = value})
    expect(memory).toEqual(1);
  })

  xit("play units", function(){
    memory = new Array();
    player.playUnit([1,3],function(value){memory.push(value)})
    expect(memory).toEqual([1,3]);
  })

});
