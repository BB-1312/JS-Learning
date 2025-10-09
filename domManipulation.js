// domManipulation.js

/**
 * High-level function to render a list of items into a specified container.
 * It clears the container and declaratively reconstructs the content.
 *
 * @param {HTMLElement} containerElement - The parent DOM element to insert the list into.
 * @param {Array<Object>} items - An array of objects to display, each must have a 'text' property.
 * @param {string} title - The title for the list.
 */
function renderItemList(containerElement, items, title) {
    if (!containerElement) {
        console.error("Container element is null or undefined. Cannot render list.");
        return;
    }

    // 1. High-level: Clear existing content for a fresh render
    containerElement.innerHTML = '';
    console.log(`Rendering list: '${title}' into container...`);

    // 2. Create the main structure
    const fragment = document.createDocumentFragment();
    
    const h2 = document.createElement('h2');
    h2.textContent = title;
    fragment.appendChild(h2);

    const ul = document.createElement('ul');

    // 3. Declaratively create list items
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${item.text}`;
        
        // Add a high-level style or class for visual distinction
        li.classList.add('list-item'); 
        
        ul.appendChild(li);
    });

    fragment.appendChild(ul);
    
    // 4. Single-pass insertion for better performance
    containerElement.appendChild(fragment);
    console.log(`Finished rendering ${items.length} items.`);
}

// Example usage (requires an HTML environment)
/*
// Assume an HTML structure: <div id="app-container"></div>
document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');
    const data = [
        { text: 'Learn React/Vue' },
        { text: 'Master modern JS' },
        { text: 'Build a full-stack project' }
    ];

    renderItemList(appContainer, data, 'My High-Priority Tasks');
});
*/

export { renderItemList };
