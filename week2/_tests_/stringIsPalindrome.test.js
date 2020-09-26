const stringIsPalindrome = require("../stringIsPalindrome");


describe("Test cases to check palindrome", ()=>{
    test("check palindrome", () => {
        expect(stringIsPalindrome("A man, a plan, a canal: Panama")).toBe(true)
    })

    test("check palindrome", () => {
        expect(stringIsPalindrome("race a car")).toBe(false)
    })

    test("check palindrome", () => {
        expect(stringIsPalindrome("1,0001;0001")).toBe(true)
    })
})