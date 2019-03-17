import { formatLocale } from "d3-format";
import moment from "dayjs";
import Extended from "./plugins/dayjs-ext"; // load on demand
import en from "./locale/en";
moment.extend(Extended);
moment.locale(en);

export { moment };
export const { format, formatPrefix } = formatLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["R", ""]
});

var FORMATTERS = {
  ".1%": format(".1%"),
  ",.0f": format(",.0f")
};
const createFormat = k => {
  FORMATTERS[k] = format(k);
  return FORMATTERS[k];
};

export const formatter = k =>
    !(k in FORMATTERS) ? createFormat(k) : FORMATTERS[k],
  fnFormat = {
    datetime: (formatString = "YYYY-MM-DD HH:mm:ss") => v =>
      moment(v).format(formatString),
    duration: (formatString = "d[d] hh[h] mm[m]") => v =>
      moment(v).format(formatString),
    duration_days: (formatString = "d[d]") => v =>
      moment(v).format(formatString),
    default: (formatString = ".1%") => formatter(formatString)
  },
  formatValue = (type = "", formatString = "") =>
    formatString in fnFormat
      ? fnFormat[formatString](type)
      : type in fnFormat
      ? fnFormat[type](formatString)
      : formatString.length > 0
      ? formatter(formatString)
      : type.length > 0
      ? formatter(type)
      : FORMATTERS[".1%"],
  formatDuration = formatString => formatValue("duration", formatString);
