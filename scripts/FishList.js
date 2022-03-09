import { getFish } from "./fishData.js";
import { Fish } from "./fish.js";

export const FishList = () => {

    
    const contentElement = document.querySelector(".fishList")
   
    const fishes = getFish()
    
	let fishHTMLRepresentation = "";
    // debugger;
    for (const oneThingFromTheSea of fishes) {
		fishHTMLRepresentation += Fish(oneThingFromTheSea);
	}

    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
}