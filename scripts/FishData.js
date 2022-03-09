const nemoFish = {
        species: "Fish",
        length: 15,
        location: "Honoluu, HI",
        saltwater: true,
        image: "NemoPic.jpg",
        name: "Nemo",
        diet: "chips"
    };
const doryFish = {
        species: "Fish",
        length: 2.5,
        location: "Honoluu, HI",
        saltwater: true,
        image: "DoryPic.jpg",
        name: "Dory",
        diet: "cheese"
    };
const marlinFish = {
        species: "Fish",
        length: 25,
        location: "Honoluu, HI",
        saltwater: true,
        image: "MarlinPic.jpg",
        name: "Marlin",
        diet: "tuna"
    }
const gillFish = {
    species: "Fish",
    length: 15,
    location: "Honoluu, HI",
    saltwater: true,
    image: "GillPic.jpg",
    name: "Gill",
    diet: "smaller fish"
};

    const fishCollection = [nemoFish, doryFish, marlinFish, gillFish];

    export const getFish= () => {
        return fishCollection
    }