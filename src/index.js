const accordionQuestions = document.querySelectorAll(".faqs");
const boxIllustration = document.querySelector(".box-illust");

accordionQuestions.forEach(questions => {
    questions.addEventListener('click', function() {
        
        // To show and hide answers on FAQs
        this.classList.toggle("active");

        // To hide other answers when one question is clicked
        if(questions.classList.contains("active")){
            accordionQuestions.forEach(function(questions){
                questions.classList.remove("active");
            })
            questions.classList.toggle("active");
            }   
        })
        
})