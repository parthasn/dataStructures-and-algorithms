const reverseNumber = require("../reverseNumber");


describe("Test cases to reverse numbers", ()=>{
    test("reverse -123", () => {
        expect(reverseNumber(-123)).toBe(-321)
    })

    test("reverse 54321", () => {
        expect(reverseNumber(54321)).toBe(12345)
    })

    test("reverse 1001002", () => {
        expect(reverseNumber(1001002)).toBe(2001001)
    })
})