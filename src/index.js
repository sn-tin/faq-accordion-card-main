const accordionQuestions = document.querySelectorAll(".questions");
const boxIllustration = document.querySelector(".box-illust");

accordionQuestions.forEach(questions => {
    questions.addEventListener('click', function() {
    
        accordionQuestions.forEach(itm => itm.classList.remove("active"));
        this.classList.toggle("active");

        const accordionAnswers = questions.nextElementSibling;

        if (questions.classList.contains("active")) { 
            boxIllustration.classList.add("move-box")
            accordionAnswers.classList.toggle("collapse-answer")
        } else {
            boxIllustration.classList.remove("move-box")
            accordionAnswers.classList.remove("collapse-answer")
        }

    })
})