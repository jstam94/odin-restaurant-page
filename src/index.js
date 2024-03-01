
import home from './home.js'
import menu from './menu.js'
import about from './about.js'
import './style.css'


let app = (function(){
    const content = document.querySelector('#content');
    const buttons = document.querySelectorAll('button');
    const homeBtn = document.querySelector('#home')
    const menuBtn = document.querySelector('#menu')
    const aboutBtn = document.querySelector('#about')
    
    function clearButtons(){
        buttons.forEach(button => {
            button.classList.remove('selected'
            )
        });
    }
    
    content.appendChild(home());
    
    
    
    
    homeBtn.addEventListener('click', () =>{
        content.innerHTML = ``;
        clearButtons();
        homeBtn.className = 'selected'
        content.appendChild(home());
    })
    
    menuBtn.addEventListener('click', () =>{
        content.innerHTML = ``;
        clearButtons();
        menuBtn.className = 'selected'
        content.appendChild(menu());
    })
    
    aboutBtn.addEventListener('click', () =>{
        content.innerHTML = ``;
        clearButtons();
        aboutBtn.className = 'selected'
        content.appendChild(about());
    })

})()

