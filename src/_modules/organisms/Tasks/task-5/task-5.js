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
        const number = $(this).val().split("").map(function (item) {
          return parseInt(item);
        });
        $(self.classes.textarea).val(self.nextBiggest(number))
      }
    });
  },
  nextBiggest(number) {
    let stoppingPoint = -1;
    for (let i = number.length ; i > 0; i--) {
      if (number[i] > number[i - 1]) {
        stoppingPoint = i - 1;        
        break;
      }
    }

    if (stoppingPoint == -1) 
      return stoppingPoint;
    
    let rightSide = number.splice(stoppingPoint);
    const replaceNumber = rightSide.splice(0, 1)[0];
    let item, itemIndex;

    rightSide.forEach((element, index) => {
      if (element > replaceNumber) {
        item = element;
        itemIndex = index;
      }
    });

    rightSide.splice(itemIndex, 1);
    rightSide.push(replaceNumber);
    rightSide = rightSide.sort();

    return number.concat([item]).concat(rightSide).join('');
  }

};