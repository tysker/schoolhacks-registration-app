export const eachWordUppercase = (str: string[]) => {
  return str
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};
export const replaceWhitespace = (str: string) =>
  str.replaceAll(' ', '_').toLowerCase();
