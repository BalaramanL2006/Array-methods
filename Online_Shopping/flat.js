const products = [
    {
        productId: 1,
        name: "Face Wash",
        category: "Cosmetics",
        price: 500,
        features: ["Oil Control", ["Deep Cleansing", ["Removes Dirt", "Hydrating", "Suitable for All Skin Types"]]],
        reviews: {
            "Praveen": 5,
            "Jeeva": 4,
            "kalai": 5,
            "Deepika": 4,
            "Sandhiya": 3
        },
        specs: {
            skinType: ["All Skin Types"],
            quantity: ["100ml"],
            ingredients: ["Aloe Vera", "Vitamin E"],
            fragrance: ["Fresh"]
        }
    },
    {
        productId: 2,
        name: "Running Shoes",
        category: "Footwear",
        price: 2500,
        features: ["Lightweight", "Comfortable", "Breathable", "Slip Resistant", "Durable"],
        reviews: {
            "Arun": 5,
            "Bala": 4,
            "Karthik": 5,
            "Divya": 4,
            "Meena": 3
        },
        specs: {
            size: ["7", "8", "9", "10"],
            material: ["Mesh", "Rubber"],
            color: ["Black"],
            sole: ["Anti-Slip"]
        }
    }
    

];

const flatArray = (product)=>{
    return product.features.flat(Infinity);
}
console.log(flatArray(products[0]));

