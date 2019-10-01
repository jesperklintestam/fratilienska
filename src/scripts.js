
let observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navAnchorArray.forEach(x => x.classList.remove('current-section'));
            if (entry.intersectionRatio < 0.9) {
                if (entry.boundingClientRect.top < entry.intersectionRect.top) {
                    document.getElementById(entry.target.id + '-nav').parentElement.nextElementSibling.firstElementChild.classList.add('current-section');
                } else {
                    document.getElementById(entry.target.id + '-nav').parentElement.previousElementSibling.firstElementChild.classList.add('current-section');
                }
            } else {
                document.getElementById(entry.target.id + '-nav').classList.add('current-section');
            }
        }
    });
}, { threshold: [0, 0.9, 1], rootMargin: "50px 0px 50px 0px" });

//An array with all anchor elements in nav
const navAnchorArray = [...document.querySelectorAll('nav ul li a')];
//An array with all the element ids to target, taken from the hrefs in the nav
const observeArray = navAnchorArray.map(x => x.getAttribute('href').slice(1));
observeArray.forEach(id => { observer.observe(document.getElementById(id)) });
