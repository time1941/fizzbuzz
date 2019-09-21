const Fizzbuzz = require("./fizzbuzz");


describe("Test Fizzbuzz", () => {
    // test("Test 1 expect 1", () => {
    //     const result = Fizzbuzz.say(1);
    //     expect(result).toEqual(1); //Assert Function
    // });
    // test("Test 30 expect Fizzbuzz", () => {
    //     const result = Fizzbuzz.say(30);
    //     expect(result).toEqual("Fizzbuzz"); //Assert Function
    // });
    // test("Test 3 expect Fizzbuzz", () => {
    //     const result = Fizzbuzz.say(3);
    //     expect(result).toEqual("Fizz"); //Assert Function
    // });
    // test("Test 5 expect Fizzbuzz", () => {
    //     const result = Fizzbuzz.say(5);
    //     expect(result).toEqual("Buzz"); //Assert Function
    // });
    // test("Test 12 expect Fizzbuzz", () => {
    //     const result = Fizzbuzz.say(12);
    //     expect(result).toEqual("Fizz"); //Assert Function
    // });

    test("Test 5%5 expect 0", () => {
        const result = Fizzbuzz.say(5, 5);
        expect(result).toEqual(0); //Assert Function
    });
    test("Test 5%3 expect 0", () => {
        const result = Fizzbuzz.say(5, 3);
        expect(result).toEqual(2); //Assert Function
    });
    test("Test 5%7 expect 0", () => {
        const result = Fizzbuzz.say(5, 7);
        expect(result).toEqual(5); //Assert Function
    });
});