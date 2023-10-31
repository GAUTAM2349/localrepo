
console.dir(document);
console.dir(document.body);





let form = document.querySelector('#addForm');
let temp = document.createElement('li');


form.addEventListener('submit',addItem);

let items = document.getElementById('items');
items.addEventListener('click',removeItems)

function addItem(e){ //e helps to acces event related properties, 'e' is not compulsory and can be replaced by any variable name
    e.preventDefault();

    let newItem = document.querySelectorAll('#newItem');
    console.log(newItem);
    let ul = document.querySelector('.list-group');
    let li = document.createElement('li');
    li.className = 'list-group-item';

    Array.from(newItem).forEach((item)=>{
        
        let txt = document.createTextNode(item.value);
        li.appendChild(txt);

        li.textContent += " ";
         
    
    });

    // //adding edit button 

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

// filtering

let filter = document.querySelector('#filter');
filter.addEventListener('keyup',filterText);

function filterText(e){
    let txt = e.target.value.toLowerCase();
    let itemList = document.getElementsByTagName('li');

    Array.from(itemList).forEach(function(item){
        console.log(item);
        let listText = item.firstChild.textContent;
        if(listText.toLowerCase().indexOf(txt) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
    
}
