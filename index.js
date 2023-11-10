import inquirer from 'inquirer';




// inquirer
//     .prompt([
//         /* Pass your questions in here */
//     ])
//     .then((answers) => {
//         // Use user feedback for... whatever!!
//         console.log(answers);
//     })
//     .catch((error) => {
//         if (error.isTtyError) {
//             // Prompt couldn't be rendered in the current environment
//         } else {
//             // Something else went wrong
//         }
//     });

// const func = async () => {
//     let object = await inquirer.prompt({
//         name: "result",
//         type: "input",
//         message: "what is your name?"
//     })
//     return object;
// }

// const display = async () => {
//     let response = await func()
//     console.log(response)
// }

// display();


// const func = async () => {
//     let object = await inquirer.prompt({
//         name: "result",
//         type: "input",
//         message: "what is your name?"
//     })
//     return object;
// }

// const display = async () => {
//     let response = await func()
//     console.log(response)
// }

// display();


// let guess = 8

// let questions = [{
//     type: 'input',
//     name: 'number',
//     message: 'Think of a number between 1 and 10:'
// }]

// inquirer.prompt(questions, function (answers) {
//     let number = Number.parseInt(answers.number)
//     if (number == guess) {
//         console.log('That is the number')
//     } else {
//         console.log('Try again')
//     }
// })

// const func = async () => {
//     let { result } = await inquirer.prompt({
//         name: "result",
//         type: "confirm",
//         message: "Do you like pizza?"

//     })
//     return result
// }

// const display = async () => {
//     let response = await func()
//     console.log(response)
// }

// display();

// const func = async () => {
//     let { result } = await inquirer.prompt({
//         name: "result",
//         type: "list",
//         message: "What's your favourite cheese?",
//         choices: ["cheddar", "mozzarellla", "blue cheese", "parmesan"]
//     })


//     return result

// }
// const display = async () => {
//     let response = await func()
//     console.log(response)
// }

// display()
//-------------------------------------------------------------------------------------------------


//Rock, Paper, Scissors
const questionFunc = async () => {
    let { result } = await inquirer.prompt({
        name: "result",
        type: "list",
        message: "Choose rock, paper, or scissors:",
        choices: ["rock", "paper", "scissors"],
    })


    return result;

}
const display = async () => {
    let response = await questionFunc()
    console.log(response);
    // return response;
}

const rockPaperScissors = () => {
    let gameNumber = 1;
    let userScore = 0;
    let computerScore = 0;
    const choicesArr = ["rock", "paper", "scissors"];
    console.log(`------------------ GAME NUMBER!! ${gameNumber} ---------------`)




    const computerChoice = choicesArr[Math.floor(Math.random() * choicesArr.length)];
    console.log('computerChoice', computerChoice)
    const userChoice = questionFunc();
    console.log('userChoice', userChoice);

    // if (userChoice === computerChoice) {
    //     console.log('DRAW');
    // }



    // else if (
    //     ((computerChoice === 'paper') && (userChoice === 'rock'))
    //     ||
    //     ((computerChoice === 'scissors') && (userChoice === 'paper'))
    //     ||
    //     ((computerChoice === 'rock') && (userChoice === 'scissors'))
    // ) {
    //     computerScore += 1;
    //     console.log('COMPUTER WINS');
    // }



    // else if (
    //     ((userChoice === 'paper') && (computerChoice === 'rock'))
    //     ||
    //     ((userChoice === 'scissors') && (computerChoice === 'paper'))
    //     ||
    //     ((userChoice === 'rock') && (computerChoice === 'scissors'))
    // ) {
    //     userScore += 1;
    //     console.log('COMPUTER WINS');
    // }

    gameNumber += 1;







}
rockPaperScissors();
