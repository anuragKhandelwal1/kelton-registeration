const is_anagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  if (str1 !== str2) return false;
  return true;
};
