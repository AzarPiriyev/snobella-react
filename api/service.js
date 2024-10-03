export const getCategory = async () => {
    const response = await fetch('http://localhost:3000/category');
    const category = await response.json();
    return category;
};

export const getFeatured = async () => {
    const response = await fetch('http://localhost:3000/Featured-Products');
    const featured = await response.json();
    return featured;
};

export const getBestseller = async () => {
    const response = await fetch('http://localhost:3000/Bestseller');
    const bestseller = await response.json();
    return bestseller;
};

export const getDiscount = async () => {
    const response = await fetch('http://localhost:3000/Discount');
    const discount = await response.json();
    return discount;
};

export const getProducts = async () => {
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();
    return products;
};

export const getProductsById = async (id) => {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const products = await response.json();
    return products;
};

export const getFeaturedById = async () => {
    const response = await fetch(`http://localhost:3000/Featured-Products/${id}`);
    const featured = await response.json();
    return featured;
};