function breakingRecords(scores) {
  let HighestScore = scores[0];
  let LowestScore = scores[0];
  let theNumberOfHighestScore = 0;
  let theNumberOfLowestScore = 0;
  for (let i = 1; i < scores.length; i++) {
    let currentScore = scores[i];
    if (currentScore > HighestScore) {
      HighestScore = currentScore;
      theNumberOfHighestScore++;
    }
    if (currentScore < LowestScore) {
      LowestScore = currentScore;
      theNumberOfLowestScore++;
    }
  }

  return [theNumberOfHighestScore, theNumberOfLowestScore];
}
