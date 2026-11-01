//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
class MoreLength extends CustomError {
  constructor(message = "slice length cannot be greater than series length") {
    super(message);
  }
}
class NonZero extends CustomError {
  constructor(message = "slice length cannot be zero") {
    super(message);
  }
}
class NonNegative extends CustomError {
  constructor(message = "slice length cannot be negative") {
    super(message);
  }
}
class NonEmpty extends CustomError {
  constructor(message = "series cannot be empty") {
    super(message);
  }
}

export class Series {
  constructor(series) {
    this.series = series;
    this.arr = [];
  }

  slices(sliceLength) {
    if (!this.series || this.series.length === 0) {
      throw new NonEmpty();
    }
    if (this.series.length < sliceLength) {
      throw new MoreLength();
    }
    if (sliceLength === 0) {
      throw new NonZero();
    }
    if (sliceLength < 0) {
      throw new NonNegative();
    }

    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      const subArray = [...this.series]
        .slice(i, i + sliceLength)
        .map((v) => Number(v));
      this.arr.push(subArray);
    }
    return this.arr;
  }
}
