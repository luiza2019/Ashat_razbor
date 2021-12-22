export const calcSubPrice = (product) => {
    return product.count * product.phone.price;
}
export const calcTotalPrice = (cart) => {
    let sum = 0;
    cart.phones.forEach((item) => {
        sum += item.subPrice;

    });
    return sum
}