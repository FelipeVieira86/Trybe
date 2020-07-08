// https://www.freecodecamp.org/learn/front-end-libraries/react/

// 1 - The current code uses JSX to assign a div element to the constant JSX. Replace the div with an h1 element and add the text Hello JSX! inside it.

const JSX = <h1>Hello JSX!</h1>;

// 2 - Define a new constant JSX that renders a div which contains the following elements in order:
// An h1, a p, and an unordered list that contains three li items. You can include any text you want within each element.

const JSX = (
  <div>
    <h1>Coisas que eu amo</h1>
    <p>Top 3</p>
    <ul>
      <li>Comer</li>
      <li>Dormir</li>
      <li>Comer</li>
    </ul>
  </div>
);

// 3 - Add a comment somewhere within the provided div element, without modifying the existing h1 or p elements.

const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    {/* comentario lindo do pai */}
  </div>
);

// 4 - Use the ReactDOM.render() method to render this component to the page. You can pass defined JSX elements directly in as the first argument and use document.getElementById() to select the DOM node to render them to. There is a div with id='challenge-node' available for you to use. Make sure you don't change the JSX constant.

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);

ReactDOM.render(JSX, document.querySelector('#challenge-node'));

// 5 - Apply a class of myDiv to the div provided in the JSX code.

const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);

// 6 - Fix the errors in the code editor so that it is valid JSX and successfully transpiles. Make sure you don't change any of the content - you only need to close tags where they are needed.

const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

// 7 - The code editor has a function called MyComponent. Complete this function so it returns a single div element which contains some string of text.

const MyComponent = function () {
  const JSX = <div>'To com fome...'</div>;
  return JSX;
};

// 8 - MyComponent is defined in the code editor using class syntax. Finish writing the render method so it returns a div element that contains an h1 with the text Hello React!.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const JSX = (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    return JSX;
  }
}

// 9 - In the code editor, there is a simple functional component called ChildComponent and a class component called ParentComponent. Compose the two together by rendering the ChildComponent within the ParentComponent. Make sure to close the ChildComponent tag with a forward slash.

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
}
