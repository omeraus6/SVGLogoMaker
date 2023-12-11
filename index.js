const inquirer = require('inquirer');
const fs = require('fs');

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
      name: 'shapcolor',
      message: 'Enter the shape color',
    },
  ])
  .then((data) => {
    //const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    //fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      //err ? console.log(err) : console.log('Success!')
   // );
  });