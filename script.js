const text = document.getElementById("info-text");
const image = document.getElementById("info-image");
const dots = document.querySelectorAll(".dot");

const steps = [

{
text: "Concept du produit et inspiration nacrée.",
img: "image/general-img-portrait.png"
},

{
text: "Création du modèle 3D et exploration des textures.",
img: "image/general-img-portrait.png"
},

{
text: "Tests d'éclairage et rendu dans Blender.",
img: "image/general-img-portrait.png"
},

{
text: "Produit final et présentation du projet.",
img: "image/fardPaupière.png"
}

];

dots.forEach(dot => {

dot.addEventListener("click", () => {

const step = dot.dataset.step;

text.style.opacity = 0;
image.style.opacity = 0;

setTimeout(()=>{

text.textContent = steps[step].text;
image.src = steps[step].img;

dots.forEach(d => d.classList.remove("active"));
dot.classList.add("active");

text.style.opacity = 1;
image.style.opacity = 1;

},200);

});

});