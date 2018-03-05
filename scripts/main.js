(function () {
'use strict';

// *      Developed by Roman Strutynskyi *//

// =============================================
// Modules navigation
// =============================================

// 1.

// =========================================
// Configuration
// =========================================
var Config = {
  siteName: 'Perfect application'
};

var TaskOne = {
  classes: {
    roor: '.js-task-one',
    input: '.js-task-one-input',
    textarea: '.js-task-one-textarea'
  },

  init: function init() {
    var self = this;
    $(this.classes.input).keypress(function (e) {
      if (e.which == 13) {
        var arr = $(this).val().split(",").map(function (item) {
          return item;
        });
        $(self.classes.textarea).val(self.sortArray(arr));
      }
    });
  },
  sortArray: function sortArray(arr) {
    var name = [],
        quantity = [],
        parseArray = [],
        prev = void 0;
    var comma = /\,/g;
    arr.sort();
    arr.forEach(function (element, index) {
      if (element !== prev) {
        name.push('arr.occurencesCount(' + element + ')');
        quantity.push(1);
      } else {
        quantity[quantity.length - 1]++;
      }
      prev = element;
    });
    name.forEach(function (element, index) {
      parseArray.push(element + ': ' + quantity[index] + ';\n');
    });
    parseArray = String(parseArray);
    return parseArray.replace(comma, "");
  }
};

var TaskTwo = {
  classes: {
    roor: '.js-task-two',
    capital: '.js-task-two-capital',
    interestRate: '.js-task-two-interest-rate',
    taxes: '.js-task-two-taxes',
    desirableSum: '.js-task-two-desirable-sum',
    textarea: '.js-task-two-textarea'
  },

  init: function init() {
    var self = this;
    $(this.classes.desirableSum).keypress(function (e) {
      if (e.which == 13) {
        var capital = parseFloat($(self.classes.capital).val());
        var interestRate = parseFloat($(self.classes.interestRate).val());
        var taxes = parseFloat($(self.classes.taxes).val());
        var desirableSum = parseFloat($(self.classes.desirableSum).val());
        $(self.classes.textarea).val(self.getYears(capital, interestRate, taxes, desirableSum));
      }
    });
  },
  getYears: function getYears(capital, interestRate, taxes, desirableSum) {
    var currentSum = capital;
    var years = 0;
    while (currentSum <= desirableSum) {
      var interest = currentSum * interestRate;
      var taxe = interest * taxes;
      var interestSum = interest - taxe;
      currentSum = currentSum + interestSum;
      years++;
    }
    return '\u0427\u0435\u0440\u0435\u0437 ' + years + ' \u0440\u043E\u043A\u0438 \u0432\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u0454\u0442\u0435 ' + parseInt(currentSum);
  }
};

var TaskThree = {
  classes: {
    roor: '.js-task-three',
    input: '.js-task-three-input',
    textarea: '.js-task-three-textarea'
  },

  init: function init() {
    var self = this;
    $(this.classes.input).keypress(function (e) {
      if (e.which == 13) {
        var string = $(this).val().split(" ").map(function (item) {
          return item;
        });
        $(self.classes.textarea).val(self.sortString(string));
      }
    });
  },
  sortString: function sortString(string) {
    var resultString = [],
        numbers = void 0;
    var comma = /\,/g;
    for (var i = 0; i < string.length; i++) {
      for (var j = 0; j < string[i].length; j++) {
        if (!isNaN(string[i][j]) && string[i][j] != 0) {
          numbers = string[i][j];
          resultString[numbers] = string[i];
          break;
        }
      }
    }
    resultString = String(resultString);
    return resultString.replace(comma, " ");
  }
};

var TaskFour = {
  classes: {
    roor: '.js-task-four',
    customers: '.js-task-four-customers',
    quantity: '.js-task-four-quantity',
    textarea: '.js-task-four-textarea'
  },

  init: function init() {
    var self = this;
    $(this.classes.quantity).keypress(function (e) {
      if (e.which == 13) {
        var customers = $(self.classes.customers).val().split(" ").map(function (item) {
          return parseInt(item);
        });
        var quantity = parseInt($(this).val());
        if (quantity <= 0) {
          $(self.classes.textarea).val("0");
        } else if (quantity === 1) {
          $(self.classes.textarea).val(quantity + ' \u043A\u0430\u0441\u0430 \u0431\u0443\u0434\u0435 \u0432\u0456\u043B\u044C\u043D\u0430 \u0447\u0435\u0440\u0435\u0437  ' + self.convertMinsToHrsMins(self.queueTime(customers, quantity)) + ' \u0433\u043E\u0434\u0438\u043D.');
        } else {
          $(self.classes.textarea).val(quantity + ' \u043A\u0430\u0441\u0438 \u0431\u0443\u0434\u0435 \u0432\u0456\u043B\u044C\u043D\u0456 \u0447\u0435\u0440\u0435\u0437  ' + self.convertMinsToHrsMins(self.queueTime(customers, quantity)) + ' \u0433\u043E\u0434\u0438\u043D.');
        }
      }
    });
  },
  queueTime: function queueTime(customers, quantity) {
    if (customers.length === 0) return 0;
    var tills = [];
    for (var i = 0; i < quantity; i++) {
      tills.push(0);
    }while (customers.length > 0) {
      var ind = tills.indexOf(Math.min.apply(null, tills));
      tills[ind] += customers.shift();
    }
    return Math.max.apply(null, tills);
  },
  convertMinsToHrsMins: function convertMinsToHrsMins(minutes) {
    if (isNaN(minutes)) return 0;

    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    return h + ':' + m;
  }
};

var TaskFive = {
  classes: {
    roor: '.js-task-five',
    input: '.js-task-five-input',
    textarea: '.js-task-five-textarea'
  },

  init: function init() {
    var self = this;
    $(this.classes.input).keypress(function (e) {
      if (e.which == 13) {
        var number = $(this).val().split("").map(function (item) {
          return parseInt(item);
        });
        $(self.classes.textarea).val(self.nextBiggest(number));
      }
    });
  },
  nextBiggest: function nextBiggest(number) {
    var stoppingPoint = -1;
    for (var i = number.length; i > 0; i--) {
      if (number[i] > number[i - 1]) {
        stoppingPoint = i - 1;
        break;
      }
    }

    if (stoppingPoint == -1) return stoppingPoint;

    var rightSide = number.splice(stoppingPoint);
    var replaceNumber = rightSide.splice(0, 1)[0];
    var item = void 0,
        itemIndex = void 0;

    rightSide.forEach(function (element, index) {
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

console.log(Config);
// =========================================
// Initialization
// =========================================
TaskOne.init();
TaskTwo.init();
TaskThree.init();
TaskFour.init();
TaskFive.init();

}());
