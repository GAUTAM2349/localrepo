function traditionalFunction(name,address) {
    console.log(arguments[0]);
  }

  traditionalFunction();

  
  const arrowFunction = () => {
    console.log(arguments[0]); // This will not work.
  }

  
  