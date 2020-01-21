function logThis() {
    console.log(this)
  }
  
  let test = {
    id: "2312",
  
    logId(func, arrowFunction, undef) {
  
      /* IMPLICIT BINDING */
  
      console.log(this.id);
  
      (function() {
        console.log(this.id)
      })();
  
      (() => {
        console.log(this.id)
      })();
  
      /*********************/
  
      func(this.id)
      arrowFunction(this.id)
  
      /******UNDEFINED******/
  
      undef()
  
      /***NESTED FUNCTIONS ***/
  
      function test() {
        return function() {
          console.log(this)
        }
      }
  
      test()()
  
      function lostArrow() {
        return () => console.log(this)
      }
  
      lostArrow()()
  
      let arrowTest = () => console.log(this.id)
  
      arrowTest()
  
      let nestedArrows = () => {
        return () => {
          console.log(`Nested arrow -> ${this.id}`)
        }
      }
  
      nestedArrows()()
  
    },
  
    logThis() {
      console.log(this)
    }
  }
  
  test.logId(function(id) { console.log(id) }, (id) => console.log(id), () => console.log(this.id))
  
  /* */
  
  let testButton = document.querySelector("#test")
  let testButtonTwo = document.querySelector("#test2")
  
  testButton.addEventListener("click", test.logThis)
  testButtonTwo.addEventListener("click", test.logThis())
  
  /* REACT */
  
  `
  
  let handleClick = function() {console.log("BOOOO")}
  
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      //this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      /*
      this.setState({
        name : "Reack Rocks!"
      })*/
      console.log("Not this")
      console.log(MyComponent)
      console.log(this)
      function test() {
        console.log(this)
      }
      test.bind(MyComponent)()
      test();
      (() => {console.log(this)})()
    }
    render() {
      console.log(this.state)
      return (
        <div>{this.state.name}
          <button onClick={handleClick}>Click Me</button>
          <h1>Function reference</h1>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>Calling the function from the object</h1>
          <button onClick={this.handleClick()}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };
  
  let testing = new MyComponent();
  //console.log(testing.handleClick)
  //testing.handleClick()
  console.log(testing.name)
  let sebas = {
    name : "Sebastian",
    handleClick = testing.handleClick
  }
  
  testing.handleClick()
  //console.log(sebas.handleClick)
  //sebas.handleClick()
  
  render(<MyComponent/>, document.querySelector("#test"))
  
  `