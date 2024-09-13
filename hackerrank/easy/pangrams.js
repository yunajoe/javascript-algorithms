function pangrams(s) {
  // Write your code here
  const alpabetObject = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };
  const smallLetter = s.toLowerCase();
  let strings = smallLetter.split(" ").join("");

  for (let i = 0; i < strings.length; i++) {
    alpabetObject[strings[i]] += 1;
  }
  const values = Object.values(alpabetObject);
  const filteredValues = values.filter((num) => num === 0);
  if (filteredValues.length === 0) {
    return "pangram";
  }
  return "not pangram";
}
