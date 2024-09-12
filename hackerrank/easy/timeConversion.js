const timeAMObj = {
  "01": "01",
  "02": "02",
  "03": "03",
  "04": "04",
  "05": "05",
  "06": "06",
  "07": "07",
  "08": "08",
  "09": "09",
  10: "10",
  11: "11",
  12: "00",
};
const timePMObj = {
  "01": "13",
  "02": "14",
  "03": "15",
  "04": "16",
  "05": "17",
  "06": "18",
  "07": "19",
  "08": "20",
  "09": "21",
  10: "22",
  11: "23",
  12: "24",
};

function timeConversion(s) {
  // Write your code here

  const isAm = s.includes("AM");
  if (isAm) {
    const replaceS = s.replace("AM", "");
    const arr = replaceS.split(":");
    const [hh, mm, ss] = [arr[0], arr[1], arr[2]];
    return `${timeAMObj[hh]}:${mm}:${ss}`;
  }
  // pm
  if (!isAm) {
    const replaceS = s.replace("PM", "");
    const arr = replaceS.split(":");
    const [hh, mm, ss] = [arr[0], arr[1], arr[2]];
    return `${timePMObj[hh]}:${mm}:${ss}`;
  }
}
