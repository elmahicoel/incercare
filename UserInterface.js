export default class UserInterface {

	createProductList(data) {
		console.log(data)
		const productElement = document.querySelector('#products');
		let html = '';
			data.forEach((product, idx) => {
				if(product===null)return;
				html += `
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 G" id="list-${idx}">
					<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 "><img src="${product.image}"
									alt="Produs"
									class="poza">
						<h4>${product.title}</h4>
						<h3>${product.price}</h3>
						<button id="detaild-${idx}">DETALII</button>
					</div>
				</div>
			`
			});
			productElement.innerHTML = html;
	}

	createProductLink(data) {
		for (let i in data) {
			if(data[i]===null)continue;
			const detailsBtn = document.querySelector(`#detaild-${i}`);
			detailsBtn.addEventListener('click', () => {
				window.location.href = `/details.html?id=${i}`;
			});
		}
	}

	// find product fron data feed based on the product ID fron querystring
	findProduct(data) {
		const queryString = new URLSearchParams(window.location.search);
		const id = parseInt(queryString.get('id'));

		if (queryString.has('id')) {
			for (let i = 0; i < data.length; i++) {
				if (i === id) {
					return data[i];
				}
			}
		}
		return new Error(`There is no product with the specified ID=${id}`);
	}
	
	
	createProductDetail(product) {
		const details = document.querySelector('#details');
		details.innerHTML = `
			<div class="col-xs-12 main">
				<div>
					<img src="${product.image}" alt="">
				</div>
				<div class="detalii-produs">
						<h3>${product.title}</h3>
						<div>${product.description}</div>
						<h3>${product.price}</h3>
						<hr>           
						<div>In stoc: ${product.stoc}</div>
						<div>Cantitate:<input type="number" class="js-quantity" min="1" value="1"></input></div>
						<button class="js-add-to-cart">aduaga-produs</button>
				</div>
			</div>`
	}



}