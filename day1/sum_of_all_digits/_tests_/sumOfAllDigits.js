var sumUsingRecursion = require('./sumUsingRecursion.js')


describe("Test cases for sum of all digits in a number", ()=>{
    test("calculate sum of all digits of 1234", () => {
        expect(sumUsingRecursion(1234)).toBe(10)
    })

    test("calculate sum of all digits of 100", () => {
        expect(sumUsingRecursion(100)).toBe(1)
    })

    test("calculate sum of all digits of 9999", () => {
        expect(sumUsingRecursion(9999)).toBe(36)
    })
})


    