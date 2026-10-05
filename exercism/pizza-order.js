/// <reference path="./global.d.ts" />
//
// @ts-check

const PizzaPrices = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10,
};

const ExtraPrices = {
  ExtraSauce: 1,
  ExtraToppings: 2,
};

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */

export function pizzaPrice(pizza, ...extras) {
  let total = 0;
  if (pizza) {
    total += PizzaPrices[pizza];
  }
  if (Array.isArray(extras) && extras.length > 0) {
    for (const extra of extras) {
      total += ExtraPrices[extra];
    }
  }
  return total;
}
/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let total = 0;
  if (!pizzaOrders || pizzaOrders.length === 0) return 0;
  for (const order of pizzaOrders) {
    const { pizza, extras } = order;
    total += pizzaPrice(pizza, ...extras);
  }
  return total;
}
