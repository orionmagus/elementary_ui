export const forEach = (val, callback) =>
    Array.isArray(val)
      ? val.forEach(callback)
      : Object.entries(val).forEach(([i, v]) => callback(v, i, val)),
  map = (val, callback) =>
    Array.isArray(val)
      ? val.map(callback)
      : Object.entries(val).reduce(
          (acc, [i, v]) => ({ ...acc, [i]: callback(v, i, val) }),
          {}
        ),
  mapMerg = (val, callback) =>
    Object.entries(val).reduce(
      (acc, [i, v]) => ({ ...acc, ...callback(v, i, val) }),
      {}
    ),
  filter = (val, callback) =>
    Array.isArray(val)
      ? val.filter(callback)
      : Object.entries(val)
          .filter(([i, v]) => callback(v))
          .reduce((acc, [i, v]) => ({ ...acc, [i]: v }), {}),
  rev_kv = val =>
    Object.entries(val).reduce((acc, [i, v]) => ({ ...acc, [v]: i }), {});
