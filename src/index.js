// Get each questions

const accordionQuestions = document.querySelectorAll(".questions");

accordionQuestions.forEach(questions => {
    questions.addEventListener('click', function() {
        this.classList.toggle("active");

        const accordionAnswers = questions.nextElementSibling;

        if (questions.classList.contains("active")) {
            accordionAnswers.classList.toggle("collapse-answer")
        } else {
            accordionAnswers.classList.remove("collapse-answer")
        }
    })
})

//