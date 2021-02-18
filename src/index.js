module.exports = function reverse(n) {
    let result = 0;
    let last_digit = 0;
    if (n > 0) {
        while (n > 0) {
            last_digit = n % 10;
            n = Math.floor(n / 10);
            result *= 10;
            result += last_digit;
        }
    } else if (n < 0) {
        n *= -1
        while (n > 0) {
            last_digit = n % 10;
            n = Math.floor(n / 10);
            result *= 10;
            result += last_digit;
        }
    }

    return result;
};
