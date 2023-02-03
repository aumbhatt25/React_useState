import { useState } from 'react';
import './App.css';

var x=2;
function App() {
  // const [title, setTitle] = useState([1,2]);

  // const [title, setTitle] = useState('hello ');
  let y='hi';
  // const [counter, setCounter] = useState(() => Math.floor(Math.random() * 16));

  const clickHandler = () => {
    setTitle("title set")
    console.log('here')
  }
  const Handler = () => {
    console.log('here handle');
    return printHello;
  }
  const printHello = () => {
    console.log("this is printHello")
    return "hello"
  }


  
  const [title, setTitle] = useState(Handler());
  // const [title, setTitle] = useState('hello ');

  // console.log('this is ' + title)

  // const clickHandler = () => {
    // x++;
    // setTitle([...title, x]);

    // setTitle(title+y)
  // }

  return (
    <div className="App">
      <p>{title}</p>
      {/* {counter} */}
      <button onClick={clickHandler}>Set Title</button>
      

      {/* <button onClick={() => setTitle(x++)}>Set {x}th Title</button> */}

      {/* <button onClick={() => setTitle(title+y)}>Set Title</button> */}

    </div>
  );
}

export default App;