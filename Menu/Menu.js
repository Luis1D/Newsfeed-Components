/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function createMenu(array) {

  // CREATE ELEMENTS
  const menu = document.createElement('div');
  const ul = document.createElement('ul');


  // APPEND ELEMENTS
  menu.appendChild(ul);

  array.forEach(el => {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = el;
  })

  // PASS IN CLASSES
  menu.classList.add('menu');

  // ADD CLICK EVENT TO MENU BTN
  const menuBtn = document.querySelector('.menu-button');

  menuBtn.addEventListener('click', event => {
    menu.classList.toggle('menu--open');
    console.log('Clicked');
  })

  return menu;

}
const header = document.querySelector('.header');
header.appendChild(createMenu(menuItems))


/* 

      Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
