export default {
  classes: {
    roor: '.js-task-one',
    input: '.js-task-one-input',
    textarea: '.js-task-one-textarea',
  },

  init() {
    const self = this;
    $(this.classes.input).keypress(function (e) {
      if (e.which == 13) {
        const arr = $(this).val().split(",").map(function (item) {
          return item;
        });
        $(self.classes.textarea).val(self.sortArray(arr))
      }
    });
  },
  sortArray(arr) {
    let name = [], quantity = [], parseArray = [], prev;
    const comma = /\,/g; 
    arr.sort();
    arr.forEach((element, index) => {
      if (element !== prev) {
        name.push(`arr.occurencesCount(${element})`);
        quantity.push(1);
      } else {
        quantity[quantity.length - 1]++;
      }
      prev = element;
    });
    name.forEach((element, index) => {
      parseArray.push(`${element}: ${quantity[index]};\n`)
    });
    parseArray = String(parseArray);
    return parseArray.replace(comma, "")
  },
};