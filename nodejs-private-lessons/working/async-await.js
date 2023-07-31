const add = (a, b) => {
  return new Promise((resolve, rejected) => {
    let sum = a + b;
    setTimeout(() => {
      resolve(sum);
    }, 2000);
  });
};

const doWork = async () => {
  const sum = await add(1, 4)
  const sum2 = await add(1, sum);
  return sum2;
}

doWork().then(result => {
  console.log(result);
}).catch(e => {
  console.log("e", e);
})
