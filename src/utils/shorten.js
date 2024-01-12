import { formattedPrice } from "@/utils/formattedPrice";

const shorten = (title, price) =>{
	let returnPackage = [];
	let newTitle;
	let newPrice;
	let limit = 9;

	if (title.length > limit){
		newTitle = title.substr(0,limit) + "...";
	}
	else {
		newTitle = title;
	}

	// if (price > 1000){
	// 	newPrice = "$" + (price.toPrecision(3));
	// }
	// else {
	// 	newPrice = formattedPrice(price);
	// }
	newPrice = formattedPrice(price);


	returnPackage.push(newTitle);
	returnPackage.push(newPrice)
	return returnPackage;
}

export default shorten;