function climbingLeaderboard(ranked, player) {
  // Write your code here
  const result = [];
  const uniqueRanked = [...new Set(ranked)];
  let rank = uniqueRanked.length - 1;
  player.forEach((score) => {
    while (rank >= 0 && score >= uniqueRanked[rank]) {
      rank--;
    }
    result.push(rank + 2);
  });
  return result;
}
