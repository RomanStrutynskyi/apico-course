export default {
  classes: {
    roor: '.js-task-two',
    capital: '.js-task-two-capital',
    interestRate: '.js-task-two-interest-rate',
    taxes: '.js-task-two-taxes',
    desirableSum: '.js-task-two-desirable-sum',
    textarea: '.js-task-two-textarea',
  },

  init() {
    const self = this;
    $(this.classes.desirableSum).keypress(function (e) {
      if (e.which == 13) {
        let capital = parseFloat($(self.classes.capital).val());
        let interestRate = parseFloat($(self.classes.interestRate).val());
        let taxes = parseFloat($(self.classes.taxes).val());
        let desirableSum = parseFloat($(self.classes.desirableSum).val());
        $(self.classes.textarea).val(self.getYears(capital, interestRate, taxes, desirableSum))
      }
    });
  },
  getYears(capital, interestRate, taxes, desirableSum) {
    let currentSum = capital;
    let years = 0
    while (currentSum <= desirableSum) {
      let interest = currentSum * interestRate;
      let taxe = interest * taxes;
      let interestSum = interest - taxe;
      currentSum = currentSum + interestSum;
      years++;
    }
    return `Через ${years} роки ви отримаєте ${parseInt(currentSum)}`
  },
};