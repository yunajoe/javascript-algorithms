/*
 - phone에 있는 사람들의 이름들 순으로 추억점수 구하기 .(photo값을 기준으로 해야한다)
 - name들이 phone에 있는지 없는지 확인하기  => 있으면은 return이음, 없으면은 return null
 - 1 번의 결과값이 [[이름1, 이름2],[이름3], [이름2]]
 - name과 yearning의 값을 map으로 mapping한다  new Map(key, value) => 이게 가장 먼저!!!
 -  1번의 결과값을 토대로 ..각 sub array의 합을 구한당   
*/
const map = new Map();

const getScore = (filterNameArr) => {
  if (filterNameArr.length === 0) {
    return 0;
  }
  return filterNameArr.reduce((acc, name) => {
    const eachScore = map.get(name);
    acc += eachScore;
    return acc;
  }, 0);
};

const filterName = (name, photo) => {
  return name.filter((item) => photo.includes(item));
};

const scoreMapping = (name, yearning) => {
  name.forEach((item, idx) => {
    map.set(item, yearning[idx]);
  });
  return map;
};

const getNames = (name, photo) => {
  return photo.reduce((acc, arr) => {
    const result = filterName(name, arr);
    const result2 = getScore(result);
    acc = [...acc, result2];
    return acc;
  }, []);
};

function solution(name, yearning, photo) {
  const copyName = [...name];
  const copyPhotos = [...photo];
  const answer = getNames(copyName, copyPhotos);
  return answer;
}
