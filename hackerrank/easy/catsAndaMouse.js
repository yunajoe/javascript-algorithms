function catAndMouse(x, y, z) {
  const distanceA = Math.abs(x - z);
  const distanceB = Math.abs(y - z);
  if (distanceA < distanceB) {
    return "Cat A";
  }
  if (distanceB < distanceA) {
    return "Cat B";
  }

  return "Mouse C";
}
