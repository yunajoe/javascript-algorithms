function bonAppetit(bill, k, b) {
  let totalFoodPrice = bill.reduce((acc, item, index) => {
    if (index === k) return acc;
    acc += item;
    return acc;
  }, 0);
  let eachPrice = totalFoodPrice / 2;

  let result = b - eachPrice === 0 ? "Bon Appetit" : b - eachPrice;
  console.log(result);
}
