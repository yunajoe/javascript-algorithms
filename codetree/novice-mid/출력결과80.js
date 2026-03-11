function draw(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n || i === j || n - i + 1) {
        console.log("*");
      } else {
        console.log(" ");
      }
    }
    console.log("\n");
  }
}
