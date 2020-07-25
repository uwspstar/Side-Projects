// Helper Function to Set Attributes on DOM Elements
const setAttributes = (element, attributes) => {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

const item = document.createElement('a');
setAttributes(item, {
    href: photo.links.html,
    target: '_blank',
});