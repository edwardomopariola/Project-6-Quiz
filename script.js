let submit = document.getElementById("btn");
let question1 = "Barack Hussein Obama"
let question2 = "George Washington"
let question3 = "Abraham Lincoln"

document.getElementById("btn").addEventListener('click', function(event) {
    event.preventDefault()
    if (question1 == "Barack Hussein Obama") {
        output.innerHTML = `Correct ${question1}. was the correct answer`
    }
})
    