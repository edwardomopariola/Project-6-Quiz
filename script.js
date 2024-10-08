function check() {

let question1 = document.quiz.question1.value;
let question2 = document.quiz.question2.value;
let question3 = document.quiz.question3.value;
let quesOneAns = "Barack Hussein Obama"
let quesTwoAns = "George Washington"
let quesThreeAns = "Abraham Lincoln"

    if (question1 == "Barack Hussein Obama") {
        document.getElementById("correctAnswer").innerHTML = `Correct ${quesOneAns}. was the correct Answer`
    }
    else {
        document.getElementById("correctAnswer").innerHTML = `Incorrect ${quesOneAns}. was the correct Answer`
    }
}



    