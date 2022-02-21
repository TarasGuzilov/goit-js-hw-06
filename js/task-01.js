const categoriesRef = document.querySelectorAll('#categories .item');
console.log(`Number of Categories:`, categoriesRef.length);


categoriesRef.forEach((category) => {
    console.log(`Categoty:`, category.querySelector('h2').textContent);
    console.log(`Elements:`, category.querySelectorAll('ul li').length);
});

