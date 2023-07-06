const categoriesList = document.querySelectorAll('.item');
const totalItems = categoriesList.length;
console.log(`Number of category: ${totalItems}`);

categoriesList.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    console.log(`Category: ${categoryName}`);
    const categoryElements = category.querySelectorAll('li').length;
    console.log(`Elements: ${categoryElements}`);
});