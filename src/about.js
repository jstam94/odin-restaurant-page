import Shop from './shop.jpg';

export default function about(){
    let container = document.createElement('div.menu');
    
    const header = document.createElement('h2');
    header.textContent = `About`

    container.appendChild(header)


    let imgDiv = document.createElement('div')
    imgDiv.className = 'picture';
    const shop = new Image(640, 360);
    shop.src = Shop;
    imgDiv.appendChild(shop);
    let credit = document.createElement('small')
    credit.innerHTML = `Photo by <a href="https://unsplash.com/@nputra?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nafinia Putra</a> on <a href="https://unsplash.com/photos/black-kitchen-appliance-on-kitchen-island-with-pendant-lights-Kwdp-0pok-I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`
    imgDiv.appendChild(credit)
    container.appendChild(imgDiv);

    let paragraph = document.createElement('p')
    paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse';
    container.appendChild(paragraph);
    

    return container;
}