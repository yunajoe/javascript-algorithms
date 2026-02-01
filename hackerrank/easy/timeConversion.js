const parseTimeData = (time) => {
  const regex = /PM|AM/gi;
  const [h, m, s] = time.replaceAll(regex, "").split(":").map(Number(item));
  return {
    h,
    m,
    s,
  };
};

const pad = (s) => {
  return String(s).padStart(2, "0");
};

const parsePadding = (h, m, s) => {
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
};

const parsePMDate = (time) => {
  const { h, m, s } = parseTimeData(time);
  if (h < 1 || h > 12) throw new Error("[ERROR]");
  if (h <= 11) {
    return parsePadding(h + 12, m, s);
  }
  return parsePadding(h, m, s);
};

const parseAMDate = (time) => {
  const { h, m, s } = parseTimeData(time);
  if (h < 1 || h > 12) throw new Error("[ERROR]");
  if (h <= 11) {
    return parsePadding(h, m, s);
  }
  return parsePadding(0, m, s);
};

function timeConversion(s) {
  if (s.includes("PM")) {
    return parsePMDate(s);
  }
  if (s.includes("AM")) {
    return parseAMDate(s);
  }
}
