import Shop from './shop.jpg';

export default function about(){
    let container = document.createElement('div.menu');
    
    const header = document.createElement('h2');
    header.textContent = `About`

    container.appendChild(header)

    const shop = new Image(640, 360);
    shop.src = Shop;
    container.appendChild(shop);

    let paragraph = document.createElement('p')
    paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse';
    container.appendChild(paragraph);
    

    return container;
}