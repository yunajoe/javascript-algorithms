function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let keyboardPointer = 0;
  let drivePointer = 0;
  let maxBudget = 0;

  while (keyboardPointer < keyboards.length) {
    let sum = keyboards[keyboardPointer] + drives[drivePointer];

    while (drivePointer < drives.length) {
      if (sum <= b) {
        maxBudget = Math.max(sum, maxBudget);
      }
      drivePointer++;
      sum = keyboards[keyboardPointer] + drives[drivePointer];
    }
    keyboardPointer++;
    drivePointer = 0;
  }
  if (maxBudget === 0) {
    return -1;
  }
  return maxBudget;
}
