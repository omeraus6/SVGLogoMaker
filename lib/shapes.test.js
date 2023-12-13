const { Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
  it("should render svg for a green circle element", () => {
    const circle = new Circle("hello world", "green", "circle", "black")
  console.log(circle.createSvg())
  expect(circle.createSvg()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">hello world</text></svg>`)
  });
});

describe("Triangle", () => {
  it("should render svg for a green triangle element", () => {
    const triangle = new Triangle("hello world", "green", "triangle", "black")
  console.log(triangle.createSvg())
  expect(triangle.createSvg()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="green" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="black">hello world</text></svg>`) 
 
  });
});


describe("Square", () => {
    it("should render svg for a green polygon element", () => {
     const square = new Square ("hello world", "green", "square", "black");
    console.log(square.createSvg())
    expect(square.createSvg()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">hello world</text></svg>`)

    });
  });





