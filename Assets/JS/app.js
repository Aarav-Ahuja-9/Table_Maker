const nums = document.querySelectorAll(".number");
const answers = document.querySelectorAll(".answer");
let input = prompt("please enter the desired value of the table");

if (input === "" || input === null ) {
    input = prompt("Please enter a value");
} else if (input !== "" || input !== null) {
    for (let num of nums) {
        num.innerText = input;
    }
}

const calculate = () => {
    for (i = 0; i < 15; i++) {
        if (input === "" || input === null) {
            input = prompt("Please enter a value");
            
        } else if (input !== "" || input !== null) {
            let num = 1;
            for (let answer of answers) {
                answer.innerText = input * num;
                num ++;
            }
        }
    }
}

calculate();    