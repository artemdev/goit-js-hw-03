const findBestEmployee = function (employees) {
  let numberOne = { tasks: 0 };
  for (const key in employees) {
    if (employees[key] > numberOne.tasks) {
      numberOne.name = key.charAt(0).toUpperCase() + key.slice(1);
      numberOne.tasks = employees[key];
    }
  }

  return `${numberOne.name}`;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
