import Shop from './shop.jpg';

export default function about(){
    let container = document.createElement('div');
    let map = document.createElement('div')
    map.innerHTML = `<div style="text-decoration:none; overflow:hidden;max-width:100%;width:500px;height:500px;"><div id="g-mapdisplay" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=statue+of+liberty&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="google-map-html" href="https://kbj9qpmy.com/hrn" id="make-map-infor-mation">Hosting Right Now</a><style>#g-mapdisplay .text-marker{}.map-generator{max-width: 100%; max-height: 100%; background: none;</style></div>`
    
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

    container.appendChild(map);
    

    return container;
}