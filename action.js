

let newlist = document.createElement('li');
newlist.className = 'list-group-item'   
newlist.textContent = "HELLO";

let ul = document.querySelector('.list-group');
ul.insertBefore(newlist,ul.firstChild);