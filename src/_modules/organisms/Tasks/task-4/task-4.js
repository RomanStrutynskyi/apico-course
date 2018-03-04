export default {
  classes: {
    roor: '.js-task-four',
    customers: '.js-task-four-customers',
    quantity: '.js-task-four-quantity',
    textarea: '.js-task-four-textarea',
  },

  init() {
    const self = this;
    $(this.classes.quantity).keypress(function (e) {
      if (e.which == 13) {
        let customers = $(self.classes.customers).val().split(" ").map(function (item) {
          return parseInt(item);
        });;
        let quantity = parseInt($(this).val());
        if (quantity <= 0) {
          $(self.classes.textarea).val("0")

        } else if (quantity === 1) {
          $(self.classes.textarea).val(`${quantity} каса буде вільна через  ${self.convertMinsToHrsMins(self.queueTime(customers, quantity))} годин.`)

        } else {
          $(self.classes.textarea).val(`${quantity} каси буде вільні через  ${self.convertMinsToHrsMins(self.queueTime(customers, quantity))} годин.`)
        }
      }
    });
  },
  queueTime(customers, quantity) {
    if (customers.length === 0)
      return 0;
    let tills = [];
    for (let i = 0; i < quantity; i++)
      tills.push(0);
    while (customers.length > 0) {
      let ind = tills.indexOf(Math.min.apply(null, tills));
      tills[ind] += customers.shift();
    }
    return Math.max.apply(null, tills) ;
   
    
  },
  convertMinsToHrsMins(minutes) {
    if (isNaN(minutes))
      return 0;
      
    let h = Math.floor(minutes / 60);
    let m = minutes % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    return h + ':' + m;
  }
};