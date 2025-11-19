/**
 * @param {number[]} deck
 * @returns {number[]} deck with every card doubled
 */

export const seeingDouble = (deck) => deck.map((v) => v * 2);

/**
 * Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 * @returns {number[]} deck with triplicate 3s
 */
export const threeOfEachThree = (deck) =>
  deck.flatMap((v) => (v === 3 ? [3, 3, 3] : v));

/**
 * Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 * @returns {number[]} deck with triplicate 3s
 */

export const middleTwo = (deck) => {
  const start = deck.length / 2 - 1;
  return deck.slice(start, start + 2);
};

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck
 * @returns {number[]} transformed deck
 */

export const sandwichTrick = (deck) => {
  const [firstValue, ...rest] = deck;
  const lastValue = rest.pop();
  const midIndex = Math.floor(rest.length / 2);
  return [
    ...rest.slice(0, mid),
    lastValue,
    firstValue,
    ...rest.slice(midIndex),
  ];
};

/**
 * Removes every card except 2s.
 *
 * @param {number[]} deck
 * @returns {number[]} deck with only 2s
 */
export const twoIsSpecial = (deck) => deck.filter((v) => v === 2);

/**
 * Returns a perfectly ordered deck from lowest to highest.
 *
 * @param {number[]} deck
 * @returns {number[]} ordered deck
 */
export const perfectlyOrdered = (deck) => deck.toSorted((a, b) => a - b);

/**
 * Reorders the deck so the top card ends at the bottom.
 *
 * @param {number[]} deck
 * @returns {number[]} reordered deck
 */

export const reorder = (deck) => [...deck].reverse();
