const removeDuplicates = require("../removeDuplicates");


describe("Test cases to remove duplicates", ()=>{
    test("remove duplicates from [1,1,2]", () => {
        expect(removeDuplicates([1,1,2])).toBe(2)
    })

    test("remove duplicates from [2,2,2,7,7,9]", () => {
        expect(removeDuplicates([2,2,2,7,7,9])).toBe(3)
    })

    test("remove duplicates from [1,1,1,1,1,1]", () => {
        expect(removeDuplicates([1,1,1,1,1,1])).toBe(1)
    })
})