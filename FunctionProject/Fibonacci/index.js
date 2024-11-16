var bigInt = require("big-integer");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth;
    nth = bigInt(nth);
    let answer = bigInt.zero;
    let memo = {"0": bigInt.zero, "1": bigInt.one};

    function fibonacci(number){
        if (number < 0)
            throw 'must be greater than 0'
        else if (number in memo){
            return memo[number];
        }
        memo[number] = fibonacci(number.minus(1)).add(fibonacci(number.minus(2)));
        return memo[number];
    }

    answer = fibonacci(nth);

    context.res = {
        body: answer.toString()
    };
}