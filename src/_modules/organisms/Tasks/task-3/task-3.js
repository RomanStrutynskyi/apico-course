export default {
  classes: {
    roor: '.js-task-three',
    input: '.js-task-three-input',
    textarea: '.js-task-three-textarea',
  },

  init() {
    const self = this;
    $(this.classes.input).keypress(function (e) {
      if (e.which == 13) {
        const string = $(this).val().split(" ").map(function (item) {
          return item;
        });
        $(self.classes.textarea).val(self.sortString(string))
      }
    });
  },
  sortString(string) {
    let resultString = [], numbers;
    const comma = /\,/g; 
    for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < string[i].length; j++) {
        if (!isNaN(string[i][j]) && string[i][j] != 0 ) {
          numbers = string[i][j];
          resultString[numbers] = string[i];
          break;
        }
      }
    }
    resultString = String(resultString);
    return resultString.replace(comma, " ");
  },
};


