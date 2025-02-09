const cart = [];
const priceAPIUrl = "http://localhost:3001/products/";

const fetchPrice = async (product) => {
    const response = await fetch(`${priceAPIUrl}${product}`);
    const data = await response.json();
    return data.price;
};

const addProduct = async () => {
    const productInput = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    
    const product = productInput.value.trim().toLowerCase();
    const quantity = parseInt(quantityInput.value);
    
    if (!product || quantity <= 0) {
        alert("Please enter valid product and quantity.");
        return;
    }
    
    // Fetch product price from the API
    try {
        const price = await fetchPrice(product);
        addToCart(product, price, quantity);
    } catch (error) {
        alert(`Failed to retrieve price for ${product}`);
    }

    // Clear inputs
    productInput.value = "";
    quantityInput.value = "";
    displayCart();
};

const addToCart = (product, price, quantity) => {
    const existingItem = cart.find(item => item.product === product);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ product, price, quantity });
    }
};

const calculateCart = () => {
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    const tax = Math.ceil(subtotal * 0.125 * 100) / 100; // rounded up to 2 decimal places
    const total = Math.ceil((subtotal + tax) * 100) / 100; // rounded up to 2 decimal places

    return { subtotal, tax, total };
};

const displayCart = () => {
    const cartState = document.getElementById("cartState");
    cartState.innerHTML = '';

    cart.forEach(item => {
        cartState.innerHTML += `<p>Cart contains ${item.quantity} x ${item.product}</p>`;
    });

    const { subtotal, tax, total } = calculateCart();
    
    cartState.innerHTML += `
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>
    `;
};

