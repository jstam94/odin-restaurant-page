import home from './home.js'
import menu from './menu.js'
import about from './about.js'

const content = document.querySelector('#content')

content.appendChild(home());



document.querySelector('button#home').addEventListener('click', () =>{
    content.innerHTML = ``;
    content.appendChild(home());
})

document.querySelector('button#menu').addEventListener('click', () =>{
    content.innerHTML = ``;
    content.appendChild(menu());
})

document.querySelector('button#about').addEventListener('click', () =>{
    content.innerHTML = ``;
    content.appendChild(about());
})