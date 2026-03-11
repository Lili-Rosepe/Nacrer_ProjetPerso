document.addEventListener("DOMContentLoaded", function(){

const dots = document.querySelectorAll(".dot");
const contents = document.querySelectorAll(".info-content");

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        // enlever active partout
        dots.forEach(d => d.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        // ajouter active au bon
        dot.classList.add("active");
        contents[index].classList.add("active");

    });

});

});