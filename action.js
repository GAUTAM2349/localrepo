

//traversing DOM 
let itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'grey';
console.log(itemList.parentElement.parentElement);
console.log(itemList.children);  
itemList.children[0].style.backgroundColor = 'green'; 

//firstchildelement


console.log(itemList.firstElementChild);
console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);

// adding  "hello" before item listener

let headToInsert1 = document.createElement('h2');
let tn1 = document.createTextNode("hello");
headToInsert1.appendChild(tn1);
let container1 = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

console.log(headToInsert1);

container1.insertBefore(headToInsert1,h1);
