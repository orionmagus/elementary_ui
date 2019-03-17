var hasSpace = /\s/;
var hasSeparator = /(_|-|\.|:)/;
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase(string) {
  if (hasSpace.test(string)) return string.toLowerCase();
  if (hasSeparator.test(string))
    return (unseparate(string) || string).toLowerCase();
  if (hasCamel.test(string)) return uncamelize(string).toLowerCase();
  return string.toLowerCase();
}

/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g;

/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate(string) {
  return string.replace(separatorSplitter, function(m, next) {
    return next ? " " + next : "";
  });
}

/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g;

/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize(string) {
  return string.replace(camelSplitter, function(m, previous, uppers) {
    return (
      previous +
      " " +
      uppers
        .toLowerCase()
        .split("")
        .join(" ")
    );
  });
}
function toSpaceCase(string) {
  return toNoCase(string)
    .replace(/[\W_]+(.|$)/g, function(matches, match) {
      return match ? " " + match : "";
    })
    .trim();
}
/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */

function toCamelCase(string) {
  return toSpaceCase(string).replace(/\s(\w)/g, function(matches, letter) {
    return letter.toUpperCase();
  });
}

function toCharCase(string, sep = "-") {
  return toNoCase(string)
    .replace(/[\W_]+(.|$)/g, function(matches, match) {
      return match ? sep + match : "";
    })
    .trim();
}
function toTitleCase(string) {
  return toSpaceCase(string)
    .replace(/[\W\s]*([a-z]+)/gi, (matches, match) =>
      match ? ` ${match.charAt(0).toUpperCase()}${match.substring(1)}` : ""
    )
    .trim();
}
const e = {
  kebabCase: toCharCase,
  snakeCase: string => toCharCase(string, "_"),
  camelCase: toCamelCase,
  spaceCase: toSpaceCase,
  title: toTitleCase
};
export default e;
