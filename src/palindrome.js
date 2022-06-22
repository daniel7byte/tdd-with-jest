const isPalindrome = (str) => {
  // if (!str) return
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

module.exports = { isPalindrome }