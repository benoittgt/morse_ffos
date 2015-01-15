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

  it("play unit", function(){
    memory = 0
    player.playUnit([1000],function(value){memory = value})
    expect(memory).toEqual(1000);
  })

  it("play units", function(){
    memory = new Array();
    player.playUnit([1000,3000],function(value){memory.push(value)})
    expect(memory).toEqual([1000,3000]);
  })

});
