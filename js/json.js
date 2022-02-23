//JavaScript Object Notation
// JSON

const user = {
  id: 12,
  name: "Pobarul islam",
  job: "actor",
};
const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir road',
    products: ['Laptop', 'mobile', 'pepsi'],
    isExpensive: false   
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);
const converted = JSON.parse(shopStringified)
console.log(shopStringified);
console.log(converted)