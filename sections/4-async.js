const { findIngredients, priceCheck } = require("../utils/ingredientsUtils");

async function processItemRequest(itemStr) {
  try {
    const result = await findIngredients(itemStr);
    return { itemName: itemStr, ingredients: result };
  } catch (err) {
    return { msg: `${itemStr} not found` };
  }
}

async function orderIngredients(itemStr) {
  try {
    const result = await processItemRequest(itemStr);
    return { itemName: itemStr, ingredients: result };
    
  } catch (err) {
    return { msg: `could not find one or more ingredients` };
  }
}

module.exports = { processItemRequest, orderIngredients };
