import Coffee from './coffee.jpg';
import Espresso from './espresso.jpg'
import Beans from './beans.jpg'

export default function renderHome(){
    const container = document.createElement('div');

    const header = document.createElement('h1');
    header.textContent = 'Generic Cafe';
    container.appendChild(header);
    
    let images = document.createElement('div');
    images.className = 'images';



    images.appendChild(imgDiv(320, 480, Coffee, `Photo by <a href="https://unsplash.com/@nate_dumlao?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan Dumlao</a> on <a href="https://unsplash.com/photos/shallow-focus-photography-of-coffee-late-in-mug-on-table-zUNs99PGDg0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`))
    images.appendChild(imgDiv(320, 480, Espresso, `Photo by <a href="https://unsplash.com/@nate_dumlao?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan Dumlao</a> on <a href="https://unsplash.com/photos/shallow-focus-photography-of-coffee-late-in-mug-on-table-zUNs99PGDg0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`))
    images.appendChild(imgDiv(320, 480, Beans, `Photo by <a href="https://unsplash.com/@pariwatt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pariwat Pannium</a> on <a href="https://unsplash.com/photos/white-ceramic-mug-on-brown-wooden-table-S8daAB_nJSg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`))
   

    container.appendChild(images)

    return container;
}


function imgDiv(height, width, src, description){
    const element = document.createElement('div')
    element.className = 'picture'
    const image = new Image(height, width);
    image.src = src;
    const credit = document.createElement('small')
    credit.innerHTML = description;
    element.appendChild(image)
    element.appendChild(credit);
    return element;
}