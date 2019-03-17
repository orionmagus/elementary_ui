import * as checkUtils from "./checkUtils";
import * as componentUtils from "./componentUtils";
import * as htmlUtils from "./htmlUtils";
import * as colorUtils from "./colorUtils";
import * as reduxUtils from "./reduxUtils";
import * as stringUtils from "./stringUtils";
import * as transformUtils from "./transformUtils";

const ld = () => {
  return {
    ...checkUtils,
    ...componentUtils,
    ...htmlUtils,
    ...colorUtils,
    ...reduxUtils,
    ...stringUtils,
    ...transformUtils
  };
};
