
function App() {
  
  //A standard javascript function
  function sayHelloStandardFunction() {
    console.log('Hello - sayHelloStandardFunction')
  }

  //An arrow function
  const sayHelloArrowFunction = () => {
    console.log('Hello - sayHelloArrowFunction')
  }

  //An arrow function that uses the event object from the 
  //click event
  const sayHelloArrowFunctionUsingEventObject = (event) => {
    console.log('Hello - sayHelloArrowFunctionUsingEventObject:' + event.target)
  }

  //An arrow function that accepts a single argument
  const sayHelloWithArgument = (name) => {
    console.log('Hello ' + name + '- sayHelloWithArgument')
  }

  return (
    <div className="App">
      <h1>Event Handler Styles</h1>  

      { 
        // To use a function as an event handler, we pass a reference
        // to that function. 
      }
      <button onClick={sayHelloStandardFunction}>
        Say Hello
      </button>

      <button onClick={sayHelloArrowFunction}>
        Say Hello
      </button>

      <button onClick={sayHelloArrowFunctionUsingEventObject}>
        Say Hello
      </button>

      { 
        // When handler functions need to perform a simple action, we can use
        // an anonymous arrow function to keep the code short
      }
      <button onClick={() => console.log('Hello - an anonymous  arrow function') }>
        Say Hello
      </button>

      { 
        // We can access the event object from anonymous arrow functions 
        // like below
      }
      <button onClick={(e) => console.log('Hello - an anonymous  arrow function using the event object:' + e.target) }>
        Say Hello
      </button>

      { 
        // When we want to call another function with a specific argument
        // from an event handler we can also use anonymous arrow functions 
        // for this
      }
      <button onClick={() => sayHelloWithArgument('Mike') }>
        Say Hello
      </button>
    </div>
  );
}

export default App;
