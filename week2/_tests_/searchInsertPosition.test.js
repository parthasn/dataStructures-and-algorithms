const searchInsertPosition = require("../searchInsertPosition");


describe("Test cases for searching position", ()=>{
    test("search position of 2", () => {
        expect(searchInsertPosition([1,1,2], 2)).toBe(2)
    })

    test("search position of 3", () => {
        expect(searchInsertPosition([2,2,2,7,7,9], 3)).toBe(3)
    })

    test("search position of 1", () => {
        expect(searchInsertPosition([1,1,1,1,1,1], 1)).toBe(0)
    })
})