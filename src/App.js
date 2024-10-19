import { Route } from 'react-router-dom';
import './App.css';
import { Routes} from 'react-router-dom';
import NavBar from './NavBar';
import Students from './components/Students';
import InsertStudent from './components/InsertStudent';
import UpdateStudent from './components/UpdateStudent';
import DeleteStudent from './components/DeleteStudent';
function App() {
  return (
    <div className="App">
      <h1>Students Data Fetching!!</h1>
      <NavBar></NavBar>
      <Routes>
      <Route path="/" element={<Students/>}></Route>
      <Route path="/insert" element={<InsertStudent/>}/>
      <Route path="/update" element={<UpdateStudent/>}/>
      {/* <Route path="/update/:item" element={<UpdateStudent/>}/> */}

      <Route path="/delete" element={<DeleteStudent/>}/>
      {/* <Route path="/delete/:id" element={<DeleteStudent/>}/> */}

      </Routes>
    </div>
  );
}

export default App;
