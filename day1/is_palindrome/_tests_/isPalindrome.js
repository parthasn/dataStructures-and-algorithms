var isPalindromeUsingRecursion = require('./isPalindromeUsingRecursion.js')


describe("Test cases for checking palindrome", ()=>{
    test("check if malayalam is palindrome", () => {
        expect(isPalindromeUsingRecursion('malayalam')).toBe(true)
    })

    test("check if 1221 is palindrome", () => {
        expect(isPalindromeUsingRecursion('1221')).toBe(true)
    })

    test("check if amma is palindrome", () => {
        expect(isPalindromeUsingRecursion('amma')).toBe(true)
    })
})


    