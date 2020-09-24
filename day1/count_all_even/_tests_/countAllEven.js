var countEvenUsingRecursion = require('./countAllEven.js')


describe("Test cases for counting all evens in an array", ()=>{
    test("calculate count of even numbers in the given array [1,2,3,4,5,6,7,8,9]", () => {
        expect(countEvenUsingRecursion([1,2,3,4,5,6,7,8,9])).toBe(4)
    })

    test("calculate count of even numbers in the given array [1,3,5,7,9]", () => {
        expect(countEvenUsingRecursion([1,3,5,7,9])).toBe(0)
    })

    test("calculate count of even numbers in the given array [2,2,2,2,2]", () => {
        expect(countEvenUsingRecursion([2,2,2,2,2])).toBe(5)
    })
})


    