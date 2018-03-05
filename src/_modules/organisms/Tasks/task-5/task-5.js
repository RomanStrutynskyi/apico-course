export default {
  classes: {
    roor: '.js-task-five',
    input: '.js-task-five-input',
    textarea: '.js-task-five-textarea',
  },

  init() {
    const self = this;
    $(this.classes.input).keypress(function (e) {
      if (e.which == 13) {
        let number = $(this).val();
        let arr = number.split("").map(function (item) {
          return parseInt(item);
        });
        $(self.classes.textarea).val(self.sortArray(number,arr))
      }
    });
  },
  sortArray(number,arr) {
    let numbers=[], comma = /\,/g;
    if (arr.length < 2)
      return `-1`;
    for (let i = 0; i < arr.length; i++) 
      if (arr[i] !== arr[0])
        if (arr.length === 2)
          numbers = arr.reverse();
          let numbesReult = String(numbers);
          return numbesReult.replace(comma, "")
      
      
    return `-1`;
    
        
    //     console.log('element');
    //   }
    // });
    // return [number, arr];
  },
};