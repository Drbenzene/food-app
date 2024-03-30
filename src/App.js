import logo from "./logo.svg";
import Header from "./components/base/Header/Header";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import HomeScreen from "./pages/Home";

function App() {
  return (
    <div className="md:px-20 px-5 py-10">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
