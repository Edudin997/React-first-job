import React, {useState} from "react";
import './styles/App.css'
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState('Текст в инпуте');

  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. Javascript</strong>
          <div>Javascript - Язык программирования</div>
        </div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default App;