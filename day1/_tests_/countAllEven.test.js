const countEvenUsingRecursion = require("../countAllEven");
test("Returns 4 on the given list 1,2,3,4,5,6,7,8,9", () => {
    expect(countEvenUsingRecursion([1,2,3,4,5,6,7,8,9])).toBe(4);
});