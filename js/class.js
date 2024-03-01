class Product{
    constructor(name,price,category){
        this.name=name;
        this.price=price;
        this.category=category;
    }
    describe() {
        console.log('この商品は'+this.name+'です。');
    }
}


const shampoo = new Product('シャンプー',1500,'生活雑貨');
const cofee = new Product('マンハッタンカフェ',3200,'飲料');

console.log(shampoo);
console.log(cofee);

cofee.describe();
