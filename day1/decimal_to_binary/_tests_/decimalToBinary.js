var decimalToBinary = require('./decimalToBinary.js')


describe("Test cases for converting decimal to binary", ()=>{
    test("convert 25 to binary", () => {
        expect(decimalToBinary(25)).toBe("11001")
    })

    test("convert 1325 to binary", () => {
        expect(decimalToBinary(1325)).toBe('10100101101')
    })

    test("convert 100 to binary", () => {
        expect(decimalToBinary(100)).toBe('1100100')
    })
})


    