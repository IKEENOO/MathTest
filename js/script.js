let btnFinishTest = document.getElementById("finishTest");

btnFinishTest.addEventListener("click", checkTest);

function checkTest() {
    let result = 0;

    let answerOne = document.getElementById("questionOne").value;
    if(answerOne === "4"){
        result++;
    }

    let answerTwo = document.getElementById("questionTwo").value;
    if(answerTwo === "12"){
        result++;
    }   

    let answerThree = document.getElementById("questionThree").value;
    if(answerThree === "2"){
        result++;
    }

    if (result != 3) alert("\nNumber of correct answers: " + result + "\n\nTry harder!");
    else alert("\nNumber of correct answers: " + result + "\n\nCongratulations!");
}
