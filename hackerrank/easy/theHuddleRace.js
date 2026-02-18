function hurdleRace(k, height) {
  // Write your code here
  const maxHeightHuddle = Math.max(...height);
  return k >= maxHeightHuddle ? 0 : maxHeightHuddle - k;
}
