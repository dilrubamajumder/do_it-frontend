import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import NavBar from './Components/NavBar.jsx';
import ShowList from "./Components/ShowList.jsx";
import NewTaskPage from "./Pages/NewTaskPage.jsx";
import HomePage from "./Pages/HomePage.jsx";

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path ="/" element = { <HomePage/>} />
            <Route path="/tasks" element = { <ShowList /> } />

          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
