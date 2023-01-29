import './App.css';
import {Routes,Route } from 'react-router-dom';
import './App.css';
import Pagecon from './Compenent/Pagecon';
import Ajouter from './Config/Ajouter';
import Tcontacts from './Config/Tcontacts';
import './Styl.css';



function App() {
  return (
    <div className="App">
      <Pagecon />
      <Routes>
      <Route path="/" element={<Tcontacts />} />
      <Route path="/Ajouter" element={<Ajouter />} />
      </Routes>
    </div>
  );
}
export default App;

