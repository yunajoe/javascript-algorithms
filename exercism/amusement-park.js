/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Object} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  return {
    name,
    age,
    ticketId,
  };
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Object} visitor
 * @returns {Object} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  const keys = Object.keys(tickets);
  if (!keys.includes(ticketId)) return "unknown ticket id";
  if (!tickets[ticketId]) return "not sold";
  return `sold to ${tickets[ticketId]}`;
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  const keys = Object.keys(tickets);
  // !tickets[ticketID] 하지 않은 이유는 falsy값이 다 들어가서, (0, "")이 다 속해 있는다.
  if (!keys.includes(ticketId) || tickets[ticketId] === null)
    return "invalid ticket !!!";
  return tickets[ticketId];
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {Object} visitor
 * @returns {string | undefined} version
 */

export function gtcVersion(visitor) {
  const gtc = "gtc";
  if (!visitor[gtc]) return undefined;
  return visitor[gtc].version;
}
