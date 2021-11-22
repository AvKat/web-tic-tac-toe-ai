const deepCopy: (inp: any[]) => any[] = (inp) => {
  const res: any[] = [];
  for (let i in inp) {
    let item = inp[i];
    if (Array.isArray(item)) {
      res.push(deepCopy(item));
    } else {
      res.push(item);
    }
  }

  return res;
};

const chooseRandom = (arr: any[]) => {
  let i,
    n = arr.length;
  i = Math.floor(Math.random() * n);
  return arr[i];
};

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export { deepCopy, winConditions, chooseRandom };
