var stringInReverseUsingRecursion = require('./stringInReverseUsingRecursion.js')


describe("Test cases for reverse of a string", ()=>{
    test("To check reverse of '1234' ", () => {
        expect(stringInReverseUsingRecursion('1234')).toBe('4321')
    })

    test("To check reverse of 'partha'", () => {
        expect(stringInReverseUsingRecursion('partha')).toBe('ahtrap')
    })

    test("To check reverse of '1001101'", () => {
        expect(stringInReverseUsingRecursion('1001101')).toBe('1011001')
    })
})


    