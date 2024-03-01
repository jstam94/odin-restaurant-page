export default function menu(){
    let container = document.createElement('div');
    container.className = `menu`;
    
    const header = document.createElement('h2');
    header.textContent = `Menu`


    container.appendChild(header)

    let menu = document.createElement('ul')
   
    addItem('test', 4, `Lorem ipsum dolor sit amet, consectetur adi`)
    addItem('test', 12, `Lorem ipsum dolor sit amet, consectetur adi`)
    addItem('test', 1.5, `Lorem ipsum dolor sit amet, consectetur adi`)
    addItem('test', 3, `Lorem ipsum dolor sit amet, consectetur adi`)
    addItem('test', 12, `Lorem ipsum dolor sit amet, consectetur adi`)
    addItem('test', 5, `Lorem ipsum dolor sit amet, consectetur adi`)
    addItem('test', 4, `Lorem ipsum dolor sit amet, consectetur adi`)
    addItem('test', 1, `Lorem ipsum dolor sit amet, consectetur adi`)
    addItem('test', 4, `Lorem ipsum dolor sit amet, consectetur adi`)
    addItem('test', 12, `Lorem ipsum dolor sit amet, consectetur adi`)
    addItem('test', 1.5, `Lorem ipsum dolor sit amet, consectetur adi`)
    addItem('test', 3, `Lorem ipsum dolor sit amet, consectetur adi`)
    addItem('test', 12, `Lorem ipsum dolor sit amet, consectetur adi`)
    addItem('test', 5, `Lorem ipsum dolor sit amet, consectetur adi`)
    addItem('test', 4, `Lorem ipsum dolor sit amet, consectetur adi`)
    addItem('test', 1, `Lorem ipsum dolor sit amet, consectetur adi`)



    container.appendChild(menu);

    return container;

    function addItem(name, price, info){
        menu.appendChild(menuItem(name, price, info))
    }
}


function menuItem (name, price, info){
    let item = document.createElement('li');

    let itemHeader = document.createElement('div');
    itemHeader.className = 'itemHeader';

    let itemName = document.createElement('h4');
    itemName.textContent = name;

    let itemPrice = document.createElement('span');
    itemPrice.textContent = price;

    itemHeader.appendChild(itemName);
    itemHeader.appendChild(itemPrice)

    let itemInfo = document.createElement('p');
    itemInfo.textContent = info;

    item.appendChild(itemHeader);
    item.appendChild(itemInfo)

    return item;
}




