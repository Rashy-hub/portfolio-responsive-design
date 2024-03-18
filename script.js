console.log('Starting script.js')
const skillElements = document.querySelectorAll(
    '.skills__container__element:nth-child(n)'
)

skillElements.forEach((element, index) => {
    const delay = 0.2 * index // Recalculer le délai en utilisant l'index
    element.style.animationDelay = delay + 's'

    // Déclencher l'animation à l'intersection
    const observerA = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate')
                observerA.unobserve(entry.target)
            }
        })
    })
    observerA.observe(element)
})

const servicesElements = document.querySelectorAll(
    '.services__card__bx:nth-child(n)'
)

servicesElements.forEach((element, index) => {
    const delay = 0.2 * index // Recalculer le délai en utilisant l'index
    element.style.animationDelay = delay + 's'

    // Déclencher l'animation à l'intersection
    const observerB = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate')
                observerB.unobserve(entry.target)
            }
        })
    })
    observerB.observe(element)
})
