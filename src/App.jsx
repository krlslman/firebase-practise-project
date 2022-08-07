// import './App.css';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";




function App() {
  return (
    <div className="App flex justify-center items-center mt-20">
      {/* <Register /> */}
      <Login />
      <Home />
    </div>
  );
}

export default App;
