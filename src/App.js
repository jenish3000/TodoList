import React, { useState } from "react";
import "./App.css";
import Itemlist from "./Itemlist";
function App() {
  const [itemArr, setItemArr] = useState([]);
  const [item, setItem] = useState("");

  const handleInput = (event) => {
    setItem(event.target.value);
  };

  const handleList = () => {
    setItemArr((olditems) => {
      return [...olditems, item];
    });
    setItem("");
  };
  return (
    <>
      <div className="main_div">
        <div className="card shadow">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Item"
            name="item"
            value={item}
            onChange={handleInput}
          />
          <button className="button" onClick={handleList}>+</button>
          {/* <ol>
            <li>
              
            </li>
            </ol> */}

          <ul>
            {itemArr.map((value) => {
              return  <Itemlist text={value}/>  
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
