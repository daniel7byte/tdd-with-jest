const { isPalindrome } = require('../src/palindrome');


describe('palindrome', () => {
  test.skip('of midudev', () => {
    const result = isPalindrome('midudev')
    expect(result).toBe(false);
  })

  test('of saippuakauppias', () => {
    const result = isPalindrome('saippuakauppias')
    expect(result).toBe(true);
  })

  test('of undefined', () => {
    const result = isPalindrome()
    expect(result).toBeUndefined();
  })
})