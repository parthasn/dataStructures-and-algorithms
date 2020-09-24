var fibonacciUsingRecursion = require('./fibonacciUsingRecursion.js')


describe("Test cases for fibonacci of nth number", ()=>{
    test("calculate fibonacci of 1", () => {
        expect(fibonacciUsingRecursion(1)).toBe(1)
    })

    test("calculate fibonacci of 13", () => {
        expect(fibonacciUsingRecursion(8)).toBe(13)
    })

    test("calculate fibonacci of 100", () => {
        expect(fibonacciUsingRecursion(100)).toBe(218922995834555200000)
    })
})


    