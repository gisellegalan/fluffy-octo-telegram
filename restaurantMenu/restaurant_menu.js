const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// Traversing array using map
// arr.map(arrow fn) creates a new array that transforms each element of array by the function
// so breakfastMenu.map(arrow fn) = ['<p>Item 1: Pancakes</p>', ..., '<p>Item 4: Frittata</p>']
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
// join creates and returns a new string by concatenating all of the elements in this array, 
// separated by commas or a specified separator string
// so breakfastMenuItemsHTML = breakfastMenu.map(arrow fn).join('') = '<p>Item 1: Pancakes</p>...<p>Item 4: Frittata</p>'
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// Traversing array using forEach
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
// The above code results in: mainCourseItem = '<p>Item 1: Steak</p>...<p>Item 4: Salmon</p>'
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// Traversing array using for loop
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
// The above results in: dessertItem = '<p>Item 1: Cake</p>...<p>Item 4: Fruit Salad</p>'
document.getElementById('dessertMenuItems').innerHTML = dessertItem;