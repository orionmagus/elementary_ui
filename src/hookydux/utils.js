export const compose = (...funcs) =>
    funcs.length > 1
      ? funcs.reduce((a, b) => (...args) => a(b(...args)))
      : funcs.length === 1
      ? funcs[0]
      : ld.noop,
  composeR = (...funcs) => x =>
    funcs.reduceRight((composed, f) => f(composed), x),
  dontUseError = (msg = `This is not allowed.`) => () => {
    throw new Error();
  };
