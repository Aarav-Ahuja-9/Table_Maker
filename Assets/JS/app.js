const nums = document.querySelectorAll(".number");
const answers = document.querySelectorAll(".answer");

for (let answer of answers) {
    answer.innerText = 0;
}

let input = prompt("please enter the desired value of the table");


for (let num of nums) {
    num.innerText = input;
}

if (input === "" || input === null ) {
    input = prompt("Please enter a value");
    for (let num of nums) {
        num.innerText = input;
    }
} else if (input !== "" || input !== null) {}

const calculate = () => {
    for (i = 0; i < 3; i++) {
        if (input === "" || input === null) {
            input = prompt("Please enter a value");
            for (let num of nums) {
                num.innerText = input;
            }
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

for (let num of nums) {
    if (input === "" || input === null) {
        num.innerText = 0;
    }
}
