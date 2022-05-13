// let faq1 = document.querySelector("faq-1");
// let faq2 = document.querySelector("faq-2");
// let faq3 = document.querySelector("faq-3");
// let faq4 = document.querySelector("faq-4");
// let faq5 = document.querySelector("faq-5");
// let questionsArrow = [faq1, faq2, faq3, faq4, faq5];

const clickTitleQuestions = document.querySelectorAll(".title-questions");
const questionsArrow = document.querySelectorAll(".arrow-down");

for(let i = 0; i <= clickTitleQuestions.length; i++){
    clickTitleQuestions[i].addEventListener("click", function(){
        questionsArrow.classList.toggle("arrow-clicked");
    }) 

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
}
