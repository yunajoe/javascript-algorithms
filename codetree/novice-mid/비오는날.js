const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map((line) => line.split(" "));

// Please Write your code here.
// filter

class Weather {
  constructor(date, day, weather) {
    this.date = date;
    this.day = day;
    this.weather = weather;
  }
}

const data = forecasts.map((value) => {
  const [date, day, weather] = value;
  return new Weather(date, day, weather);
});

const rainForecasts = data
  .filter((item) => item.weather === "Rain")
  .sort((a, b) => a.date.localeCompare(b.date));

const { date, day, weather } = rainForecasts[0];
console.log(`${date} ${day} ${weather}`);
