export default class Cart {
	
	add(product, qty) {
		this.cartContent(product, qty);
		Cart.updateCartCount();
	}

	remove(product, qty) {
		// fin the product and update the qty then rebuild the items in cart
	}

	delete(product) {
		// fin the product and remove it from the array, then rebuild the items in cart
	}

	displayCart() {
		//get all cart content from sesstionStorage and then print it to the page.
	}

	// store cart content in sessionStorage
	cartContent(product, qty) {
		const cartContent = sessionStorage.getItem('cart');
		if (cartContent === null) {
			const result = { 'Quantity': parseInt(qty), 'Product': [product] };
			sessionStorage.setItem('cart', JSON.stringify([result]));

		} else {
			const data = JSON.parse(cartContent);
			data.map((item, index) => {
				// check if the product is already in cart
				if (Object.entries(item.Product[0]).toString() === Object.entries(product).toString()) {
					//just update quantity
					item.Quantity = parseInt(item.Quantity) + parseInt(qty);
					sessionStorage.setItem('cart', JSON.stringify(data));
				}
			});
		}
	}

	static updateCartCount() {
		const countElement = document.querySelector('#js-class-count');
		if (sessionStorage.getItem('cart') !== null) {
			countElement.textContent = JSON.parse(sessionStorage.getItem('cart')).length;
		}
		
	}
}