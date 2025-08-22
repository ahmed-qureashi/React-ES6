const product = {
  name: 'PEN',
  rating: 9.5,
  date: new Date(),
  deal: "deal of the day",
  price: 1.99,
  tags: ['stationery', 'writing'],
  offer: {
    discount: 0.1,
    validUntil: new Date('2023-12-31')
  },
}

// Display the product information
console.log('Product Details:');
console.log('---------------');
console.log('Name:', product.name);
console.log('Rating:', product.rating);
console.log('Price: $' + product.price);
console.log('Deal:', product.deal);
console.log('Tags:', product.tags.join(', '));
console.log('Discount:', product.offer.discount * 100 + '%');
console.log('Offer valid until:', product.offer.validUntil.toDateString());