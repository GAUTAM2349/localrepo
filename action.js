
console.dir(document);
console.dir(document.body);





let form = document.querySelector('#addForm');
let temp = document.createElement('li');
temp.textContent = 'temporary';
console.dir(temp)
form.appendChild(temp);
console.dir(form);

form.addEventListener('submit',addItem);

let items = document.getElementById('items');
items.addEventListener('click',removeItems)

function addItem(e){ //e helps to acces event related properties, 'e' is not compulsory and can be replaced by any variable name
    e.preventDefault();

    let newItem = document.querySelector('#newItem').value;
    let ul = document.querySelector('.list-group');
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = newItem;

    //adding edit button 

    let editButton = document.createElement('button');
    
    
    editButton.className = "btn btn-success btn-sm float-right";
    editButton.textContent = 'EDIT';
    li.appendChild(editButton);

    ul.appendChild(li);


    //adding delete button 

    let deleteButton = document.createElement('button');
    deleteButton.className = "btn btn-danger btn-sm float-right delete";
    deleteButton.textContent = 'X';
    deleteButton.style.marginLeft = '2px';
    deleteButton.style.marginRight = '2px';
    
    li.appendChild(deleteButton);

    
}

function removeItems(e){
    e.preventDefault();
    if(e.target.classList.contains("delete")){
        let parent = e.target.closest('li');
        if(parent){
            items.removeChild(parent);
        }
    }
}