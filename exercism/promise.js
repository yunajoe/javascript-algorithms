export const promisify = (fn) => {
  return (value) => {
    return new Promise((resolve, reject) => {
      fn(value, (error, value) => {
        if (value) {
          resolve(value);
        } else {
          reject(error);
        }
      });
    });
  };
};

export const all = async (args) => {
  const answer = [];
  if (!args) return Promise.resolve(undefined);
  for (const arg of args) {
    const result = await arg;
    answer.push(result);
  }
  return answer;
};

export const allSettled = async (args) => {
  const answer = [];
  if (!args) return Promise.resolve(undefined);
  for (const arg of args) {
    try {
      const result = await arg;
      answer.push(result);
    } catch (error) {
      answer.push(error);
    }
  }
  return answer;
};

export const race = async (args) => {
  if (!args) return Promise.resolve(undefined);
  if (args.length === 0) return Promise.resolve([]);
  return new Promise((resolve, reject) => {
    for (const arg of args) {
      arg.then((data) => resolve(data)).catch((error) => reject(error));
    }
  });
};

export const any = (args) => {
  if (!args) return Promise.resolve(undefined);
  if (args.length === 0) return Promise.resolve([]);
  return new Promise((resolve, reject) => {
    let rejectionCount = 0;
    const errors = [];
    for (const arg of args) {
      arg
        .then((data) => resolve(data))
        .catch((error) => {
          rejectionCount++;
          errors.push(error);
          if (rejectionCount === args.length) {
            reject(errors);
          }
        });
    }
  });
};
