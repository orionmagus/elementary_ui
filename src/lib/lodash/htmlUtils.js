export const htmlInputAttrs = [
  // REACT
  "selected",
  "defaultValue",
  "defaultChecked",

  // LIMITED HTML PROPS
  "autoCapitalize",
  "autoComplete",
  "autoCorrect",
  "autoFocus",
  "checked",
  "disabled",
  "form",
  "id",
  "list",
  "max",
  "maxLength",
  "min",
  "minLength",
  "multiple",
  "name",
  "pattern",
  "placeholder",
  "readOnly",
  "required",
  "step",
  "type",
  "value"
];

export const htmlInputEvents = [
  // EVENTS
  // keyboard
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",

  // focus
  "onFocus",
  "onBlur",

  // form
  "onChange",
  "onInput",

  // mouse
  "onClick",
  "onContextMenu",
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",

  // selection
  "onSelect",

  // touch
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart"
];

export const htmlInputProps = [...htmlInputAttrs, ...htmlInputEvents];

export const partitionHTMLProps = (props, options = {}) => {
  const { htmlProps = htmlInputProps, includeAria = true } = options;
  const inputProps = {};
  const rest = {};

  _.forEach(props, (val, prop) => {
    const possibleAria =
      includeAria && (/^aria-.*$/.test(prop) || prop === "role");
    const target =
      _.includes(htmlProps, prop) || possibleAria ? inputProps : rest;
    target[prop] = val;
  });

  return [inputProps, rest];
};
