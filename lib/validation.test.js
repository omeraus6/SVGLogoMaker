const { Textchar,Textcolor } = require("./validation");

describe("Textcolor", () => {
  it("should return if color code not found", () => {
    const tcolor = new Textcolor("hello", "#zabbcc")
  console.log(tcolor.colorval())
  expect(tcolor.colorval()).toEqual("this color code is not found, Please run you app agin")
  });
});

describe("Textchar", () => {
  it("should slice first 3 char from string", () => {
    const char = new Textchar("hello", "#zabbcc")
  console.log(char.textval())
  expect(char.textval()).toEqual("hel") 
 
  });
});