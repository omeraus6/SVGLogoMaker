# SVGLogoMaker

GIVEN a command-line application that accepts user input
Q1
WHEN I am prompted for text
THEN I can enter up to three characters
Q2
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
Q2
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
Q3
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line

WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

first question : add three characters for logo text
second question : text color(color keyword or hexadecimal)
thired question : shape(list: circle, triangle, and square)
fourth question : shapes color(color keyword or hexadecimal)

Questions
-Enter text for the logo. (must not be more than 3 char)
-Enter the text color 
-select a shape for the logo
-Enter the shape color

massage come: Generated logo.svg

run app : npm index.js

when open logo.svg file show (300x200 pixel)


rectangle
<rect x="10" y="10" width="30" height="30"/> squre
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>rectangle

circle
<circle cx="25" cy="75" r="20"/>

text
<text x="10" y="10">Hello World!</text>


<?xml version="1.0" standalone="no"?>
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>

  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>

  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>

