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

const addMobile = (mobile) =>{
    mobiles.unshift(mobile);

    return mobiles;
};

const newMobile ={
    mobileId: 103,
    brand: "Apple",
    model: "iPhone 15",
    price: 65000,
    features: ["5G", "Super Retina XDR", "Face ID", "Fast Charging"],
    colors: ["Black", "Blue", "Pink"],
    specs: {
        ram: ["6GB"],
        storage: ["128GB"],
        camera: ["48MP"],
        processor: ["A16 Bionic"]
    }

};

console.log(addMobile(newMobile));