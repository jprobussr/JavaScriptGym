const values = [
  false,
  0,
  -0,
  '',
  null,
  undefined,
  NaN,
  '0',
  [],
  {},
  'hello',
  1,
];

for (const v of values) {
    console.log(v, '=>', Boolean(v));
}
