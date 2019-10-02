// import modules;
import GetHttpData from "./Modules/GetData.js";
import UserInterface from "./Modules/UserInterface.js";
import Cart from "./Modules/Cart.js";

// instantiate objects
const http = new GetHttpData();
const ui = new UserInterface();
const queryString = new URLSearchParams(window.location.search);
const api = 'https://mihai12a.firebaseio.com/.json';
const fetchedData = http.get(api); // filer for null!
const cart = new Cart();



// generates the product list and the product page
if (queryString.has('id')) {
	fetchedData.then(data => {
		// generate the product page based on the ID
		ui.createProductDetail(ui.findProduct(data));

		// attach add to cart evt to the add to cart button
		const addToCartBtn = document.querySelector('.js-add-to-cart');
		addToCartBtn.addEventListener('click', () => { 
			const quantity = document.querySelector('.js-quantity').value;
			cart.add(ui.findProduct(data), quantity);
		});

	});
} else {
	// generate the product list
	fetchedData.then(data => ui.createProductList(data));
	fetchedData.then(data => ui.createProductLink(data));
}

// call static method when the the page loads
Cart.updateCartCount();