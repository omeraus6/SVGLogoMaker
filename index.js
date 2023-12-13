const inquirer = require('inquirer');
const fs = require('fs');
const FinalLogo = require("./lib/shapes");
const Validate = require('./lib/validation');

//question prompit
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for the logo. (must not be more than 3 char)',
    },
    {
      type: 'input',
      name: 'textcolor',
      message: 'Enter the text color: ',
    },
    {
      type: 'list',
      name: 'logoshap',
      message: 'select a shape for the logo : ',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapecolor',
      message: 'Enter the shape color',
    },
  ])
  .then((data) => {
    //let validate = new Validate.Textchar()
    let result;
    let finallogo;
    switch(data.logoshap) {
      case 'circle':
         finallogo = new FinalLogo.Circle(data.text,data.shapecolor,data.logoshap,data.textcolor);         
        break;
      case 'triangle':
         finallogo = new FinalLogo.Triangle(data.text,data.shapecolor,data.logoshap,data.textcolor);
        break;
      case 'square':
          finallogo = new FinalLogo.Square(data.text,data.shapecolor,data.logoshap,data.textcolor);
    }

    fs.writeFile("./examples/logo.svg", finallogo.createSvg(), (err) =>
      err ? console.log(err) : console.log('Generated logo.svg')
    );
   
  });

