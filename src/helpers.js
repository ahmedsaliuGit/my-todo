export const limitText = (str, limit = 30) => {
  if (str.length > limit) {
    str = str.slice(0, limit + 1).trim() + "...";
  }

  return str;
};
