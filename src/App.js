import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllSteps from "./component/AllSteps";
import React, { createContext ,useState} from 'react';
const updateData = createContext()
function App() {
 
  const [updateItem,setUpdateItem] =useState()
  return (
      <updateData.Provider value={{updateItem,setUpdateItem}}>
    <div className="App">

        <AllSteps/>
    </div>
      </updateData.Provider>
  );
}

export default App;
export {updateData}
