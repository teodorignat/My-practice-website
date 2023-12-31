const btnScroll = document.querySelector('.scrollbtn');

btnScroll.onclick = () => {
    btnScroll.scrollIntoView(true);
}

let reveal = () => {
    let reveals = document.querySelectorAll('.reveal')   
    for (let i=0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 100; 
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();