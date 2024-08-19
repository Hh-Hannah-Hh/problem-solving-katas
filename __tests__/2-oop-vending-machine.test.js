const VendingMachine = require("../sections/2-oop-vending-machine.js");

describe("Vending Machine", () => {
  describe("properties", () => {
    test("properties", () => {
      const testVendingMachine = new VendingMachine();
      expect(testVendingMachine).toHaveProperty("credit");
      expect(testVendingMachine.credit).toBe(0);
    });
    test("properties", () => {
      const testVendingMachine = new VendingMachine();
      expect(testVendingMachine).toHaveProperty("stock");
      expect(testVendingMachine.stock).toHaveProperty("A");
      expect(testVendingMachine.stock).toHaveProperty("B");
      expect(testVendingMachine.stock).toHaveProperty("C");
    });
  });
  describe("addCredit method", () => {
    test("adds initial amount given", () => {
      const testVendingMachine = new VendingMachine();
      testVendingMachine.addCredit(10);
      expect(testVendingMachine.credit).toBe(10);

      const alternativeTestVendingMachine = new VendingMachine();
      alternativeTestVendingMachine.addCredit(48);
      expect(alternativeTestVendingMachine.credit).toBe(48);
    });
    test("accumulates the amount given", () => {
      const testVendingMachine = new VendingMachine();
      testVendingMachine.addCredit(10);
      expect(testVendingMachine.credit).toBe(10);
      testVendingMachine.addCredit(40);
      expect(testVendingMachine.credit).toBe(50);
    });
  });

  describe("helper methods", () => {
    test("creditChecker validates when there is sufficient credit for an item", () => {
      const testVendingMachine = new VendingMachine();
      testVendingMachine.addCredit(60);
      expect(testVendingMachine.creditChecker(50)).toBe(true);
      expect(testVendingMachine.creditChecker(60)).toBe(true);
    });
    test("creditChecker validates when there is sufficient credit for an item", () => {
      const testVendingMachine = new VendingMachine();
      testVendingMachine.addCredit(50);
      expect(testVendingMachine.creditChecker(100)).toBe(false);
    });
  });

  describe("addStock method", () => {
    test("provides a function that will add stock to the object at a given position when invoked with a position and object argument", () => {
      const marsBars = { name: "marsBar", price: 50, quantity: 6 };
      const testVendingMachine = new VendingMachine();
      testVendingMachine.addStock("A", marsBars);
      testVendingMachine.addCredit(80);
      const received = testVendingMachine.purchaseItem("A");
      expect(received).toEqual("marsBar");
    });

    describe("purchaseItem method", () => {
      test("returns the item name when there is enough credit to purchase the item at the input position", () => {
        const marsBars = { name: "marsBar", price: 50, quantity: 6 };
        const testVendingMachine = new VendingMachine();
        testVendingMachine.addStock("A", marsBars);
        testVendingMachine.addCredit(60);
        const received = testVendingMachine.purchaseItem("A");
        expect(received).toEqual("marsBar");
      });
      test("decreases the amount of credit available when there is enough credit to purchase the item at the input position", () => {
        const marsBars = { name: "marsBar", price: 50, quantity: 6 };
        const testVendingMachine = new VendingMachine();
        testVendingMachine.addStock("A", marsBars);
        testVendingMachine.addCredit(80);
        testVendingMachine.purchaseItem("A");
        expect(testVendingMachine.credit).toEqual(30);
      });
      test("decreases the stock quantity by one when there is enough credit to purchase the item at the input position", () => {
        const marsBars = { name: "marsBar", price: 50, quantity: 6 };
        const testVendingMachine = new VendingMachine();
        testVendingMachine.addStock("A", marsBars);
        testVendingMachine.addCredit(80);
        testVendingMachine.purchaseItem("A");
        const received = testVendingMachine.stock.A.quantity;
        expect(received).toEqual(5);
      });
      test("returns a string of 'Insufficient credit!' when there is not enough credit to purchase the item at the input position", () => {
        const marsBars = { name: "marsBar", price: 50, quantity: 6 };
        const testVendingMachine = new VendingMachine();
        testVendingMachine.addStock("A", marsBars);
        testVendingMachine.addCredit(40);
        const received = testVendingMachine.purchaseItem("A");
        expect(received).toEqual("Insufficient credit!");
      });
    });
  });
});
