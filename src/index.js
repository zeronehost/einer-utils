
// FirstName -> first-name
// FirstName -> first_name
// FirstName -> firstName
import {isString} from "einer-type"

/**
 * 大驼峰式命名转小驼峰式命名
 * @param {string} str 待转换字符串
 * @returns {string} 转换后的字符串
 */
export const camelUpperToLower = (str) => isString(str)? str.replace(/^([A-Z])/, (_, l)=> l.toLowerCase()):str;
/**
 * 小驼峰式命名转大驼峰式命名
 * @param {string} str 待转换字符串
 * @returns {string} 转换后的字符串
 */
export const camelLowerToUpper = (str) => isString(str)? str.replace(/^([a-z])/, (_, l)=> l.toUpperCase()):str;

/**
 * 驼峰式命名转下划线或中划线命名
 * @param {string} str 待转换字符串
 * @param {string} sep 分隔符
 * @returns {string} 转换后的字符串
 */
export const camelToLine = (str, sep="-") => isString(str) && isString(sep) ? str.replace(/([A-Z])/g, `${sep}$1`).toLowerCase().replace(new RegExp(`^${sep}`), "") : str;

/**
 * 下划线或中划线命名转驼峰式命名
 * @param {string} str 待转换字符串
 * @param {string} sep 分隔符
 * @param {boolean} upper 是否是大驼峰
 * @returns {string} 转换后的字符串
 */
export const lineToCamel = (str, sep="-", upper = false) => {
  if(!isString(str) && !isString(sep)) return str;
  const _str = str.replace(new RegExp(`\\${sep}(\\w)`, "g"), (_, l)=>l.toUpperCase());
  if(upper) return _str.replace(/^(\w)/, (_, l) => l.toUpperCase());
  return _str;
};