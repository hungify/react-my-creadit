export const toNumber = (str: string | number) => {
  if (typeof str === "string") {
    const newStr = str.replaceAll(/ /g, "");
    return parseInt(newStr);
  } else {
    return str;
  }
};
