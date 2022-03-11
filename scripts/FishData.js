const nemoFish = {
        species: "Fish",
        length: 10,
        location: "Honoluu, HI",
        saltwater: true,
        image: "NemoPic.jpg",
        name: "Nemo",
        diet: "chips"
    };
const doryFish = {
        species: "Fish",
        length: 7,
        location: "Honoluu, HI",
        saltwater: true,
        image: "DoryPic.jpg",
        name: "Dory",
        diet: "cheese"
    };
const marlinFish = {
        species: "Fish",
        length: 9,
        location: "Honoluu, HI",
        saltwater: true,
        image: "MarlinPic.jpg",
        name: "Marlin",
        diet: "tuna"
    }
const gillFish = {
    species: "Fish",
    length: 178,
    location: "Honoluu, HI",
    saltwater: true,
    image: "GillPic.jpg",
    name: "Gill",
    diet: "smaller fish"
};

    const fishCollection = [nemoFish, doryFish, marlinFish, gillFish];

    export const getFish= () => {
        let holies = getMostHolyFish(fishCollection);
        let soldies = getSoldierFish(fishCollection);
        let lowlies = getUnworthy(fishCollection);
        let sorted = [...holies, ...soldies, ...lowlies];        
        return sorted;
    }
    
     const getMostHolyFish = (fishies) => {
        // 3, 6, 9, 12, etc... fish
        const holyFishArray = [];
    
        for (const fish of fishies) {
            if (fish.length % 3 === 0) {
                holyFishArray.push(fish)
            }
        }
        return holyFishArray
    }

     const getSoldierFish = (fishies) => {
        // 3, 6, 9, 12, etc... fish
        const soldiersArray = [];
    
        for (const fish of fishies) {
            if (fish.length % 5 === 0) {
                soldiersArray.push(fish)
            }
        }
        return soldiersArray
    }

     const getUnworthy = (fishies) => {
        // Any fish not a multiple of 3 or 5
        const unworthyArray = [];
    
        for (const fish of fishies) {
            if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
                unworthyArray.push(fish)
            }
        }
        return unworthyArray
    }

