export const formattedPrice = (price) => {
	const formattedPriceUSD = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(price);
	console.log(formattedPriceUSD)
	return formattedPriceUSD;
};
