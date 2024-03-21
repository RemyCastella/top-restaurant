import createHomePage from './home.js'
import { createMenuPage, menu } from './menu.js'
import createContactPage from './contact.js'
import './style.css'

function removeActiveButton() {
    const buttons = document.querySelectorAll('button')
    let activeButton = Array.from(buttons).filter(el => el.classList.contains('active'))
    activeButton[0].classList.remove('active')
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => console.log(button.textContent))
    let activeButton = Array.from(buttons).filter(el => el.textContent === button)
    activeButton[0].classList.add('active')
    console.log(activeButton)
}

function loadButtonEvents() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.addEventListener("click", e => buttonEvent(e))
    })
}

function clearContent(content) {
    content.innerHTML = ''
}

function buttonEvent(e) {
    switch(e.target.textContent) {
        case 'Home':
            loadHome()
            break
        case 'Menu':
            loadMenu()
            break
        case 'Contact':
            loadContact()
            break
    }
}

function loadHome() {
    const content = document.querySelector('#content')
    clearContent(content)
    content.appendChild(createHomePage())
    removeActiveButton()
    setActiveButton('Home')
}

function loadMenu() {
    const content = document.querySelector('#content')
    clearContent(content)
    content.appendChild(createMenuPage(menu))
    removeActiveButton()
    setActiveButton('Menu')
}

function loadContact() {
    const content = document.querySelector('#content')
    clearContent(content)
    content.appendChild(createContactPage())
    removeActiveButton()
    setActiveButton('Contact')
}

loadButtonEvents()
loadHome()

