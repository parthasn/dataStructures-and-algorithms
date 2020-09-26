const twoSum = require("../twoSum");


describe("Test cases for two sum", ()=>{
    test("check for two sum", () => {
        expect(twoSum([4,1,2], 3)).toStrictEqual([ 1, 2 ])
    })

    test("check for two sum", () => {
        expect(twoSum([1,5,9,3,6], 11)).toStrictEqual([ 1, 4 ])
    })

    test("check for two sum", () => {
        expect(twoSum([11,10,5,12,7], 15)).toStrictEqual([ 1, 2 ])
    })
})