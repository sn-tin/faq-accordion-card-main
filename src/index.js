const clickTitleQuestions = document.querySelectorAll(".questions");
const moveBoxIllust = document.querySelector(".box-illust");

clickTitleQuestions.forEach(questions => {
    questions.addEventListener("click", function() {
        this.classList.toggle("active");

        if(this.classList.contains("active")){
            moveBoxIllust.style.left = "-10rem";
        } else {
            moveBoxIllust.style.left = "-7rem";
        }

    })
})
