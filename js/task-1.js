const categoriesEl = document.querySelector("#categories");

const itemEl = document.querySelectorAll(".item");




let total = 0;
itemEl.forEach(function(item) {
    total++
});

console.log(`Number of categories: ${total}`);





itemEl.forEach(function(item) {
    const titleCategories = item.querySelector("h2");
    const resultTitle = titleCategories.textContent;
    // const listItemCategoriesEl = item.querySelectorAll(".list-item-categories");
    // const resultEl = listItemCategoriesEl.length;
    console.log(`Category: ${resultTitle}`);
    // console.log(`Elements: ${resultEl}`);
});





