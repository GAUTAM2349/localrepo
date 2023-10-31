// function traditionalFunction(name,address) {
//     console.log(arguments[0]);
//   }

//   traditionalFunction();

  
//   const arrowFunction = () => {
//     console.log(arguments[0]); // This will not work.
//   }

  var textNode1 = document.createTextNode("Hello, ");
var textNode2 = document.createTextNode("world!");

// Find an element to append the text nodes to
var element = document.getElementById("myElement");

// Append the text nodes to the element
element.appendChild();
element.appendChild(textNode2);

console.log(element.firstChild);
  