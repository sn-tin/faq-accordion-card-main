const clickTitleQuestions = document.querySelectorAll(".title-questions");
const questionsArrow = document.querySelectorAll(".arrow-down");
let arrayOfQuestions = [...clickTitleQuestions];

arrayOfQuestions.forEach(questions => {
    questions.addEventListener("click", function(){
        this.classList.toggle("arrow-clicked");
        this.classList.toggle("bold-questions");
        
        let moveBoxIllust = document.querySelector(".box-illust");

        if(this.classList.contains("arrow-clicked")){
            moveBoxIllust.style.left = "-10rem";
        } else {
            moveBoxIllust.style.left = "-7rem";
            this.classList.remove("bold-questions");
        }

        let answer1 = document.querySelector(".answer-1");
        let answer2 = document.querySelector(".answer-2");
        let answer3 = document.querySelector(".answer-3");
        let answer4 = document.querySelector(".answer-4");
        let answer5 = document.querySelector(".answer-5");

        if(this.classList.contains("q-1")){
            answer1.classList.toggle("show-answer");
            answer2.classList.remove("show-answer");
            answer3.classList.remove("show-answer");
            answer4.classList.remove("show-answer");
            answer5 .classList.remove("show-answer");
        } else if(this.classList.contains("q-2")){
            answer1.classList.remove("show-answer");
            answer2.classList.toggle("show-answer");
            answer3.classList.remove("show-answer");
            answer4.classList.remove("show-answer");
            answer5 .classList.remove("show-answer");
        } else if(this.classList.contains("q-3")){
            answer1.classList.remove("show-answer");
            answer2.classList.remove("show-answer");
            answer3.classList.toggle("show-answer");
            answer4.classList.remove("show-answer");
            answer5 .classList.remove("show-answer");
        } else if(this.classList.contains("q-4")){
            answer1.classList.remove("show-answer");
            answer2.classList.remove("show-answer");
            answer3.classList.remove("show-answer");
            answer4.classList.toggle("show-answer");
            answer5 .classList.remove("show-answer");
        } else if(this.classList.contains("q-5")) {
            answer1.classList.remove("show-answer");
            answer2.classList.remove("show-answer");
            answer3.classList.remove("show-answer");
            answer4.classList.remove("show-answer");
            answer5.classList.toggle("show-answer");
        }
    })
})
