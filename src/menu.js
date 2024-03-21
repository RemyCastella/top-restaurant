import Fugu from './img/fugu.jpeg'
import Inago from './img/inago.webp'
import Salamander from './img/salamander.jpg'
import Shirako from './img/shirako.webp'

export const menu = [{
    name: 'Fugu Sashimi',
    description: 'A risky dish made from the potentially lethal pufferfish, adding a thrilling element of danger to your dining experience.',
    image: Fugu
},
{
    name: 'Simmered Inago',
    description: 'A deceptively delicious dish featuring succulent grasshoppers, offering a crunchy surprise in every bite.',
    image: Inago
},
{
    name: 'Smoked Salamander',
    description: 'Traditionally consumed as a potent aphrodisiac, a smoked salamander is the perfect accompaniment to a wild evening.',
    image: Salamander
},
{
    name: 'Shirako',
    description: 'A luxuriously creamy delicacy of, you guessed it... fish sperm! You will probably not regret trying this one. For the gents, no homo!',
    image: Shirako
}]

export const createMenuPage = (menu) => {
    const element = document.createElement('div')
    element.classList.add('content-box')
    element.setAttribute('id', 'menu')

    const pageTitle = document.createElement('div')
    pageTitle.textContent = "Menu"
    pageTitle.classList.add('page-title')
    element.appendChild(pageTitle)


    menu.forEach(item => {
        const menuItem = document.createElement('div')
        menuItem.classList.add('menu-item')

        const image = document.createElement('img')
        image.src = item.image
        image.classList.add('menu')

        const title = document.createElement('div')
        title.classList.add('menu-title')
        title.textContent = item.name

        const description = document.createElement('div')
        description.classList.add('description')
        description.textContent = item.description

        menuItem.appendChild(image)
        menuItem.appendChild(title)
        menuItem.appendChild(description)

        element.appendChild(menuItem)
    } )
    
    return element
}