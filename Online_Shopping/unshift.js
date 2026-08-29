const products = [
    {
        productId: 1,
        name: "Face Wash",
        category: "Cosmetics",
        price: 500,
        features: ["Oil Control", "Deep Cleansing", "Removes Dirt", "Hydrating", "Suitable for All Skin Types"],
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
},

{
    productId: 3,
    name: "Leather Handbag",
    category: "Accessories",
    price: 1800,
    features: ["Stylish", "Spacious", "Lightweight", "Durable", "Water Resistant"],
    reviews: {
        "Priya": 5,
        "Kaviya": 4,
        "Harini": 5,
        "Nisha": 4,
        "Swetha": 3
    },
    specs: {
        material: ["Leather"],
        color: ["Brown"],
        compartments: ["3"],
        closure: ["Zip"]
    }
},

{
    productId: 4,
    name: "Cotton Kurti",
    category: "Wears",
    price: 1200,
    features: ["Soft Fabric", "Comfortable", "Breathable", "Stylish Design", "Easy to Wash"],
    reviews: {
        "Anitha": 5,
        "Pavithra": 4,
        "Lavanya": 5,
        "Keerthana": 4,
        "Sangeetha": 3
    },
    specs: {
        fabric: ["Cotton"],
        size: ["S", "M", "L", "XL"],
        color: ["Blue"],
        pattern: ["Printed"]
    }
}

];

const addProduct = (product) =>{
    products.unshift(product);

    return products;
};

const newProduct = {
    productId: 5,
    name: "Denim Jacket",
    category: "Wears",
    price: 1800,
    features: ["Comfortable", "Durable", "Stylish", "Warm", "Easy to Wash"],
    reviews: {
        "Arun": 5,
        "Kaviya": 4,
        "Harish": 5,
        "Divya": 4,
        "Meena": 3
    },
    specs: {
        fabric: ["Denim"],
        size: ["S", "M", "L", "XL"],
        color: ["Black"],
        pattern: ["Solid"]
    }
};

console.log(addProduct(newProduct));