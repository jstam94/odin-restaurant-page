import Coffee from './coffee.jpg';

export default function renderHome(){
    const container = document.createElement('div.container');
    const header = document.createElement('h1');
    header.textContent = 'Generic Cafe';
    container.appendChild(header);
    
    const imgDiv = document.createElement('div')
    const coffee = new Image(320, 480);
    coffee.src = Coffee;
    const credit = document.createElement('small')
    credit.innerHTML = `Photo by <a href="https://unsplash.com/@nate_dumlao?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan Dumlao</a> on <a href="https://unsplash.com/photos/shallow-focus-photography-of-coffee-late-in-mug-on-table-zUNs99PGDg0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`
    imgDiv.appendChild(coffee)
    imgDiv.appendChild(credit);
    container.appendChild(imgDiv);
    return container;
}
