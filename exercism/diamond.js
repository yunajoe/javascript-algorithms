const rows = (letter) => {
  const A_UniCode = "A".charCodeAt(0);
  const target_Unicode = letter.charCodeAt(0);

  const maxIndex = target_Unicode - A_UniCode;

  const makeLine = (i) => {
    const char = String.fromCharCode(A_UniCode + i);
    const sidePadding = maxIndex - i;
    if (i === 0) {
      return " ".repeat(sidePadding) + "A" + " ".repeat(sidePadding);
    }
    const innerPadding = i * 2 - 1;
    return (
      " ".repeat(sidePadding) +
      char +
      " ".repeat(innerPadding) +
      char +
      " ".repeat(sidePadding)
    );
  };

  const top = Array.from({ length: maxIndex + 1 }, (_, i) => makeLine(i));
  const bottom = top.slice(0, -1).reverse();

  return [...top, ...bottom];
};
