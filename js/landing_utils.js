// Add dollar symbol and resize decimal:
// .price-decimal
const decimal_prices = document.querySelectorAll(".price-decimal");
decimal_prices.forEach((element) => {
	const price = Number(element.textContent.split(" ")[0]);

	if (!isNaN(price)) {
		element.innerHTML = "";

		const element_currency = document.createElement("span");
		element_currency.style.fontSize = "0.8em";
		element_currency.style.fontWeight = "400";
		element_currency.innerText = "$ ";
		element.append(element_currency);

		if (price % 1 != 0) {
			const price_int = Math.trunc(price);
			const price_dec = (price % 1).toFixed(2).split(".")[1];
			const element_dec = document.createElement("sup");
			element_dec.style.top = "-0.2rem";
			element_dec.style.fontSize = "0.75em";
			element_dec.style.fontWeight = "400";
			element_dec.innerText = "." + price_dec;
			element.append(price_int);
			element.append(element_dec);
		} else {
			element.append(price);
		}
	}
});
