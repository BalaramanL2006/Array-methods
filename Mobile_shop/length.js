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

const featureLength = (mobile) =>{
    return mobile.features.length
};

for(const mobile of mobiles){
    console.log(featureLength(mobile));
};

const colorLength = (mobile) =>{
    return mobile.colors.length
};

for(const mobile of mobiles){
    console.log(colorLength(mobile));
};