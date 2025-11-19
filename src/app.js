

let navlnk = document.querySelector('#navlink');

let bars = document.querySelector('#micon');

bars.addEventListener("click", () => {

    navlnk.classList.toggle("left-[0px]");

})





///Counter Animation Effect 



const counters = document.querySelectorAll('.counter');

const observerOptions = {
    threshold: 0.5
};


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {


            startCounter(entry.target);

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


function startCounter(counterElement) {

    const target = +counterElement.dataset.target;
    let current = 0;
    const duration = 2000;

    const increment = target / duration;

    const timer = setInterval(() => {
        current += increment;


        if (current >= target) {
            clearInterval(timer);

            counterElement.innerText = target.toLocaleString() + '+';
        } else {

            counterElement.innerText = Math.ceil(current).toLocaleString() + '+';
        }
    }, 1);
}


counters.forEach(counter => {
    observer.observe(counter);
});








