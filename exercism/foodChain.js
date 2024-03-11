const dataArr = [
  {
    kind: "fly",
    description: "",
  },
  {
    kind: "spider",
    description: "It wriggled and jiggled and tickled inside her.",
  },
  {
    kind: "bird",
    description: "How absurd to swallow a bird!",
  },
  {
    kind: "cat",
    description: "Imagine that, to swallow a cat!",
  },
  {
    kind: "dog",
    description: "What a hog, to swallow a dog!",
  },
  {
    kind: "goat",
    description: "Just opened her throat and swallowed a goat!",
  },
  {
    kind: "cow",
    description: "I don't know how she swallowed a cow!",
  },
  {
    kind: "horse",
    description: "She's dead, of course!",
  },
];

class Song {
  constructor() {
    this.arr = [...dataArr];
  }
  firstLine(index) {
    return `I know an old lady who swallowed a ${this.arr[index - 1].kind}.\n`;
  }

  lastLine() {
    return `I don't know why she swallowed the fly. Perhaps she'll die.\n`;
  }

  // index 2부터 해당됨.. 즉 spider부터 해당이 된다
  swallowLine(index) {
    let swallowSentences = "";
    let swallowSentence = "";
    let indexCopy = index;

    while (indexCopy >= 2) {
      if (indexCopy >= 3 && this.arr[indexCopy - 2].kind === "spider") {
        swallowSentence = `She swallowed the ${
          this.arr[indexCopy - 1].kind
        } to catch the ${
          this.arr[indexCopy - 2].kind
        } that wriggled and jiggled and tickled inside her.\n`;
      } else {
        swallowSentence = `She swallowed the ${
          this.arr[indexCopy - 1].kind
        } to catch the ${this.arr[indexCopy - 2].kind}.\n`;
      }

      swallowSentences += swallowSentence;
      indexCopy = indexCopy - 1;
    }

    return swallowSentences;
  }

  verse(index) {
    let TotalDescription = "";
    // firstLine
    const firstLine = this.firstLine(index);
    const arrCopy = [...this.arr]; // Create a copy of the original array

    TotalDescription += arrCopy[index - 1].description + "\n";
    if (index === 1) return firstLine + this.lastLine();

    if (index === 8) return firstLine + TotalDescription;
    return (
      firstLine + TotalDescription + this.swallowLine(index) + this.lastLine()
    );
  }
  verses(index1, index2) {
    const songArray = [];
    let final = "";
    for (let i = index1; i <= index2; i++) {
      songArray.push(this.verse(i));
    }
    songArray.forEach((song) => {
      final += song + "\n";
    });
    return final;
  }
}

const song = new Song();

console.log(song.verses(1, 2));
console.log(song.verses(1, 8));
