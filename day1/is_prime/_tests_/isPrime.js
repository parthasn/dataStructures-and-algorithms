var isPrimeUsingRecursion = require('./isPrimeUsingRecursion.js')


describe("Test cases for checking prime numbers", ()=>{
    test("To check if 2 is prime", () => {
        expect(isPrimeUsingRecursion(2)).toBe(true)
    })

    test("To check if 23 is prime", () => {
        expect(isPrimeUsingRecursion(23)).toBe(true)
    })

    test("To check if 47 is prime", () => {
        expect(isPrimeUsingRecursion(47)).toBe(true)
    })
})


    