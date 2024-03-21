import MapImage from './img/location.png'


export default function createContactPage() {
    const element = document.createElement('div')
    element.classList.add('content-box')
    element.setAttribute('id', 'contact')

    const pageTitle = document.createElement('div')
    pageTitle.textContent = "Contact Us"
    pageTitle.classList.add('page-title')
    
    const image = document.createElement('img')
    image.src = MapImage

    const tel = document.createElement('p')
    tel.classList.add('description')
    tel.textContent = '📞123 456 789'

    const address = document.createElement('p')
    address.classList.add('description')
    address.textContent = '📍1 Chome-5-16 Minami 11 Jonishi, Chuo Ward, Sapporo'

    element.appendChild(pageTitle)
    element.appendChild(image)
    element.appendChild(address)
    element.appendChild(tel)
    

    return element
}