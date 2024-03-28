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

function addEventListenersOnDOMelements(selector, event) {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
        element.addEventListener(event, (e) => {
            e.target.classList.toggle(className)
        })
    })
}

function toggleActiveNavElements() {
    const navItems = document.querySelectorAll('.navbar__item')
    navItems.forEach((item) => {
        item.addEventListener('click', function () {
            navItems.forEach((navItem) => {
                console.log(navItem)
                navItem.classList.remove('navbar__item--active')
            })
            this.classList.add('navbar__item--active')
        })
    })
}

const myform = document.querySelector('.contact__form')
animateNodeListOnIntersection('.skills__card:nth-child(n)')
animateNodeListOnIntersection('.services__card:nth-child(n)')
animateNodeListOnIntersection('.projects__card:nth-child(n)')
toggleActiveNavElements()

myform.addEventListener('submit', function (event) {
    event.preventDefault()
    alert('Le formulaire a été soumis avec succès (simulé)')
    myform.reset()
})
