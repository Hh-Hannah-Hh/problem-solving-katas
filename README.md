This repository contains examples of complex logic and problem solving katas. The answers to the below problems can be found in corresponding files in the sections folder. Tests can be found in the tests folder.

Problems to solve:

1 - Human Resources

You have been tasked with making name tags to be worn by guests at an upcoming company meeting. You have the data for the guests who have been invited and you will need to add some information on what their name tags should read.

Given an array of guest objects containing title, forename, surname and company keys, your makeNameTags function should return an array containing objects with an additional key, nameTag, the value of which is a string consisting of the title, forename, surname and company.

Usually we'd use SurveyMonkey, but the managers have taken to building polls across the organisation as strings. Given an array of strings, please build a much more useful poll object.

Your final test should be using the FruitBowl from the data/poll-data.js file. Do not copy and paste this into your test file - it's huge!

2 - OOP Vending Machine

The VendingMachine class has two properties. The first one is a credit property, which is a number representing an amount of pence, starting at 0. The second one is a stock property, which is an object representing the rows of items in the machine. Individual positions in the machine can then be referenced by the row, either "A", "B" or "C".

The machine has an addCredit method, which adds an amount of pence to the credit property.

Your first task is to introduce an addStock method which will add new stock to the vending machine at the correct position.

Create a purchaseItem method which will decrease the quantity of the stock if there is sufficient credit and return the stock name.

3 - Closure

Write a higher-order function called generateMultiples.

Your generateMultiples function should:

Take a number (representing a multiple) as an argument.
Return a new function.
The new function should:

Take a number to determine how long the list of multiples should be.
Return an array containing a list of multiples.

4 - Async

Implement the function called processItemRequest which takes a food item string and obtains the ingredients needed to make that item. In order to do so, you will need to use the utility function findIngredients.

Your promise should resolve with an object containing the item name and an ingredients array.

Given an item that could not be found, processItemRequest should resolve with an object with a msg key of <itemName> not found.

5 - DNA Pairs

Create a function that takes a string of DNA and matches each base with its pair, returning a nested array. In DNA, C pairs with G and T pairs with A.

6 - Create Ref.

Create a function called createRef which takes an array of Northcoders employees and returns an object mapping the value of one property to another.
