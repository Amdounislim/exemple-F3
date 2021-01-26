import React, {useState} from "react"
import './App.css';
import Header from './components/Header';
import Main from './components/Main'

function App() {
  const [list, setList] = useState(['Bonjour', 'Hello', 'Ola'])

  const Add=(x)=>{
    setList([...list, x])
  }


  return (
    <div className="App">
     <Header Add={Add} />
     <Main list={list}/>
    </div>
  );
}

export default App;
