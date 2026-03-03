const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const first = async () => {
  console.log('first starting');
  await delay(2000);
  console.log('first done');
  return 1;
};

const second = async () => {
  console.log('second starting');
  await delay(4000);
  console.log('second done');
  return 2;
};

const runParallel = async () => {
    console.log('parallel');

    const p1 = first();
    const p2 = second();

    const a = await p1;
}
