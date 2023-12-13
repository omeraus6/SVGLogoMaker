const { Textchar,Textcolor } = require("./validation");

describe("Textcolor", () => {
  it("should return if color code found", () => {
    const tcolor = new Textcolor("hello", "#zabbcc")
  console.log(tcolor.colorval())
  expect(tcolor.colorval()).toEqual("this color code is not found, Please run you app agin")
  });
});

describe("Textchar", () => {
  it("should return if text has 3 char max", () => {
    const char = new Textchar("hello", "#zabbcc")
  console.log(char.textval())
  expect(char.textval()).toEqual("hel") 
 
  });
});