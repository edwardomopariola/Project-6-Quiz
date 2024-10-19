
    function check(event) {
        event.preventDefault()
        const answer1 = document.querySelector('input[name="Question1"]:checked');
        const answer2 = document.querySelector('input[name="Question2"]:checked');
        const answer3 = document.querySelector('input[name="Question3"]:checked');
        let quiz = document.getElementById("quiz");
        let result = document.getElementById("result");
       
        const answer1Value = "Barack Hussein Obama"
        const answer2Value = " Benjamin Franklin"
        const answer3Value = "Abraham Lincoln"

         if (answer1 !== "barack hussein obama") {
            document.getElementById("result").innerHTML = "incorrect"
         };

         if (answer2 !== "benjamin franklin"); {
            document.getElementById("result").innerHTML = "incorrect"
         };

         if (answer3 !== "abraham lincoln"); {
            document.getElementById("result").innerHTML = "incorrect"
         };

        document.getElementById("result").innerHTML = `Question1 answer was ${answer1Value}. Question2 answer was ${answer2Value}. Question3 answer was ${answer3Value}`

    };
        

