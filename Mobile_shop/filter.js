const mobiles = [
    {
        mobileId: 101,
        brand: "Samsung",
        model: "S23",
        price: 60000,
        features: ["5G", "AMOLED", "Fast Charging"],
        colors: ["Black", "White", "Green"],
        specs: {
            ram: ["8GB"],
            storage: ["256GB"],
            camera: ["50MP"]
        }
    },
    {
        mobileId: 102,
        brand: "Vivo",
        model: "V30",
        price: 35000,
        features: ["5G", "AMOLED", "Fast Charging"],
        colors: ["Black", "Blue"],
        specs: {
            ram: ["8GB"],
            storage: ["128GB"],
            camera: ["50MP"]
        }
    }
];

const filterBrand = (brand) => {
    return mobiles.filter(mobile => mobile.brand === brand);
};

console.log(filterBrand("Vivo"));