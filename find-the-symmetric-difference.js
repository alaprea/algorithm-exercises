function sym(arr) {
  let symmetricSet = new Set();
  let sets = [];

  for (let i = 0; i < arguments.length; i++) {
    let newSet = new Set(arguments[i]);
    sets.push(newSet);
  }

  symmetricSet = sets[0];
  for (let i = 1; i < sets.length; i++) {
    sets[i].forEach(val => {
      if (symmetricSet.has(val)) symmetricSet.delete(val);
      else symmetricSet.add(val);
    });
  }

  return [...symmetricSet];
}

sym([1, 2, 3], [5, 2, 1, 4]);