class Fizzbuzz {
    // static say(number) {
    //     if (number % 3 == 0 && number % 5 == 0) {
    //         return "Fizzbuzz";
    //     } else if (number % 3 == 0) {
    //         return "Fizz";
    //     } else if (number % 5 == 0) {
    //         return "Buzz";
    //     } else {
    //         return number;
    //     }

    // }
    // static say(number) {
    //     switch (True) {
    //         case number % 3 === 0 && number % 5 === 0:
    //             return "Fizzbuzz";
    //             break;
    //         case number % 3 === 0:
    //             return "Fizz";
    //             break;
    //         case number % 5 === 0:
    //             return "Fizz";
    //             break;
    //         default:
    //             return number;

    //     }
    // }
    static mod(number, base) {
        while (number >= base) {
            number -= base;
        }
        return number;

    }




}

module.exports = Fizzbuzz;