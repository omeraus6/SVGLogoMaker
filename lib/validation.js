class Validate {
    constructor(text, textColor) {
      this.text = text;
      this.textColor = textColor;
    } 
    
  }
  
  
  class Textcolor extends Validate {
    constructor (text, textColor) {
      super(text, textColor)
    }
    colorval() {
      let Reg_Exp = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i; 
      if (!Reg_Exp.test(this.textColor))
      {
          return `this color code is not found, Please run you app agin`;
      }
  }
    
  }

  class Textchar extends Validate {
    constructor (text, textColor) {
      super(text, textColor)
    }
    textval() {
      if(this.text.length > 3)
      {
          const first3 = this.text.slice(0, 3);
          return first3;
      }
  }
  }

  module.exports = { Textchar, Textcolor };
