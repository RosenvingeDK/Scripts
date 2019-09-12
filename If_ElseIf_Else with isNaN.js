//Your code goes here

var myNum = 8

var isEven = function (number) {

    if (isNaN(number)) {
        return "This is not a number, try again!";
    }
    else if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

isEven(myNum)
