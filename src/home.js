import Salamander from './img/salamander.jpg'

export default function createHomePage() {
    const element = document.createElement('div')
    element.classList.add('content-box')
    element.setAttribute('id', 'home')

    const pageTitle = document.createElement('div')
    pageTitle.textContent = "Welcome"
    pageTitle.classList.add('page-title')
    element.appendChild(pageTitle)

    const image = document.createElement('img')
    image.src = Salamander

    const sub = document.createElement('div')
    sub.classList.add('home-title')
    sub.textContent = "We serve the strangest Japanese eats!"

    const description = document.createElement('p')
    description.classList.add('description')
    description.textContent = "Browse our Menu for Japan's strangest dishes"

    element.appendChild(sub)
    element.appendChild(image)
    element.appendChild(description)

    return element
}