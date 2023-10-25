console.log('hello');
console.log(document.title);
document.title = 'changed title';

let headTitle = document.getElementById('header-title');
headTitle.style.borderBottom = '5px solid black';

let addItems = document.getElementById('addItems');
addItems.style.fontWeight = 'bold';
addItems.style.color = "green";

let items = document.getElementsByClassName('list-group-item');
//changing the first list item and not the second one
items[0].textContent = 'changed list name';
items[2].style.backgroundColor = 'green';

