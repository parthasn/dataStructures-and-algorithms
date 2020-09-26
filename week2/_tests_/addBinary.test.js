const addBinary = require("../addBinary");


describe("Test cases to to add binary numbers", ()=>{
    test("to add binary numbers 11 and 1", () => {
        expect(addBinary('11', '1')).toBe('100')
    })

    test("to add binary numbers 100 and 111", () => {
        expect(addBinary('100', '111')).toBe('1011')
    })

    test("to add binary numbers from 1101101111 and 1010101011", () => {
        expect(addBinary('1101101111', '1010101011' )).toBe('11000011010')
    })
})