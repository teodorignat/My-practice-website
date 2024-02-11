const btnScroll = document.querySelector('.scrollbtn');
let reveals = document.querySelectorAll('.reveal');

btnScroll.onclick = () => {
    btnScroll.scrollIntoView(true);
}

function reveal() {
    let windowHeight = window.innerHeight;
    reveals.forEach( reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    })
}

reveal();
window.addEventListener("scroll", reveal);