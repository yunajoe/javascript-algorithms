export const toRna = (dna) => {
  let str = "";
  dna.split("").forEach((item) => {
    str += switchStr(item);
  });
  return str;
};

const switchStr = (str) => {
  let finalStr = "";
  switch (str) {
    case "C":
      finalStr = "G";
      break;
    case "G":
      finalStr = "C";
      break;
    case "T":
      finalStr = "A";
      break;
    case "A":
      finalStr = "U";
      break;
  }
  return finalStr;
};
