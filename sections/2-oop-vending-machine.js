class VendingMachine {
  constructor() {
    this.credit = 0;
    this.stock = { A: {}, B: {}, C: {} };
  }

  addCredit(amount) {
    this.credit += amount;
  }

  creditChecker(price) {
    return this.credit >= price ? true : false;
  }

  addStock(positionToAdd, itemObject) {
    if (positionToAdd === "A") {
      this.stock["A"] = itemObject;
    }
    if (positionToAdd === "B") {
      this.stock["B"] = itemObject;
    }
    if (positionToAdd === "C") {
      this.stock["C"] = itemObject;
    }
  }

  purchaseItem(itemPosition) {
    if (this.credit >= this.stock[itemPosition].price) {
      this.credit -= this.stock[itemPosition].price;
      this.stock[itemPosition].quantity--;
      return this.stock[itemPosition].name;
    }
    if (this.credit < this.stock[itemPosition].price) {
      return "Insufficient credit!";
    }
  }
}

module.exports = VendingMachine;
