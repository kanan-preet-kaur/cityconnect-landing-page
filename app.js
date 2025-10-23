//selecting buttons->
const homebtn = document.querySelector("#home");
const aboutbtn = document.querySelector("#about");
const featuresbtn = document.querySelector("#features");
const faqbtn = document.querySelector("#faq");
const navbtns = document.querySelectorAll(".navbtns")
const discovermore = document.querySelector("#two");

//selecting sections->
const homepg = document.querySelector(".home");
const featurespg = document.querySelector(".features");
const aboutpg = document.querySelector(".about");
const faqpg = document.querySelector(".faq");
const allpgs = document.querySelectorAll(".content");

//display pages->
homebtn.addEventListener("click", ()=> {
    navbtns.forEach(btn => btn.style.opacity=0.7);
    homebtn.style.opacity = 1;
    showpg(homepg);
});
featuresbtn.addEventListener("click", ()=> {
    navbtns.forEach(btn => btn.style.opacity=0.7);
    featuresbtn.style.opacity = 1;
    showpg(featurespg);
});
aboutbtn.addEventListener("click", ()=> {
    navbtns.forEach(btn => btn.style.opacity=0.7);
    aboutbtn.style.opacity = 1;
    showpg(aboutpg);
});
faqbtn.addEventListener("click", ()=> {
    navbtns.forEach(btn => btn.style.opacity=0.7);
    faqbtn.style.opacity = 1;
    showpg(faqpg);
});
discovermore.addEventListener("click", ()=> {
    navbtns.forEach(btn => btn.style.opacity=0.7);
    aboutbtn.style.opacity = 1;
    showpg(aboutpg);
});

//show pages->
function showpg(page) {
    allpgs.forEach( pg => hide(pg));
    page.classList.remove("hidden");
};

//hiding pages->
function hide(page) {
    page.classList.add("hidden");
};