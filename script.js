console.log('Starting script.js')

function animateNodeListOnIntersection(selector) {
    const elements = document.querySelectorAll(selector)

    elements.forEach((element, index) => {
        element.style.animationDelay = `${0.2 * index}s`
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate')
                    observer.unobserve(entry.target)
                }
            })
        })

        observer.observe(element)
    })
}

animateNodeListOnIntersection('.skills__container__element:nth-child(n)')
animateNodeListOnIntersection('.services__card__bx:nth-child(n)')
