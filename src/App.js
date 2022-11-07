import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllSteps from "./component/AllSteps";

function App() {
 
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path ="/" element={<AllSteps/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
