export default function menu(){
    let container = document.createElement('div.menu');
    
    const header = document.createElement('h2');
    header.textContent = `Menu`

    container.appendChild(header)

    return container;
}