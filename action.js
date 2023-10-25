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

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}

// changing a list manually added with different class name

let myLastList = document.getElementsByClassName('myLastList');
console.log(myLastList);
myLastList.textContent = 'my list';
// it doesn't change anything bcz getElementByClassName() return array of nodes and not specific node
// we can change it like this, although we shouldn't

myLastList[0].textContent = 'this is my list';

// using getElementsByTagName

let li = document.getElementsByTagName('li');


let len = li.length;
li[len-1].textContent = "my list"

