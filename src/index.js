const accordionQuestions = document.querySelectorAll(".faqs");
const boxIllustration = document.querySelector(".box-illust");

accordionQuestions.forEach(questions => {
    questions.addEventListener('click', function() {
    
        // accordionQuestions.forEach(itm => itm.classList.remove("active"));
        // this.classList.toggle("active");    

        // if (questions.classList.contains("active")) { 
        //     boxIllustration.classList.add("move-box")
        // } else {
        //     boxIllustration.classList.remove("move-box")

        // }
        
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