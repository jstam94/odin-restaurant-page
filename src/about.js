export default function about(){
    let container = document.createElement('div.menu');
    
    const header = document.createElement('h2');
    header.textContent = `About`

    container.appendChild(header)

    return container;
}