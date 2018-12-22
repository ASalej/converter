export function generateUI(dropdownItems: string[]): void {
    const fromDropdownMenuElement = document.querySelector('.dropdown.from .dropdown-menu');
    const toDropdownMenuElement = document.querySelector('.dropdown.to .dropdown-menu');

    dropdownItems.forEach(dropdownItem => {
        fromDropdownMenuElement.appendChild(generateDropdownItem(dropdownItem, 'fromDropdown'));
        toDropdownMenuElement.appendChild(generateDropdownItem(dropdownItem, 'toDropdown'));
    }) ;
}

function generateDropdownItem(name: string, dropdownButtonId: string): HTMLElement {
    const item = document.createElement('a');
    item.classList.add('dropdown-item');
    item.innerText = name;
    item.addEventListener('click', () => {
        const dropdownButton = document.getElementById(dropdownButtonId);
        dropdownButton.innerText = name;
    });
    return item;
}
