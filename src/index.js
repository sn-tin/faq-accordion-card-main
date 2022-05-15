const accordionQuestions = document.querySelectorAll(".faqs");
const boxIllustration = document.querySelector(".box-illust");

accordionQuestions.forEach(questions => {
    questions.addEventListener('click', function() {
        
        // To show and hide answers on FAQs
        this.classList.toggle("active");
        // Box moves to left when question is clicked
        boxIllustration.classList.toggle("move-box")

        // To hide other answers when one question is clicked
        if(questions.classList.contains("active")){
            accordionQuestions.forEach(function(questions){
                questions.classList.remove("active");
                boxIllustration.classList.remove("move-box")
            })
            questions.classList.toggle("active");
            boxIllustration.classList.toggle("move-box")
            }   
        })
        
})