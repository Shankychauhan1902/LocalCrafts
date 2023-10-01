function loadProducts() {
    const container = document.getElementById('productsContainer');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const productImg = document.createElement('img');
        productImg.src = product.imageUrl;
        productImg.alt = product.name;

        const productTitle = document.createElement('h2');
        productTitle.textContent = product.name;

        const productDesc = document.createElement('p');
        productDesc.textContent = product.description;

        productDiv.appendChild(productImg);
        productDiv.appendChild(productTitle);
        productDiv.appendChild(productDesc);
        container.appendChild(productDiv);
    });
}

// Load products when the page loads:
document.addEventListener('DOMContentLoaded', loadProducts);
