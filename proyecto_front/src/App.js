
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/login/login';
import Menu from './components/navbar/navbar';


function App() {
  return (
    <div className="App">
      
        <Menu />
       <Login/>
   
    </div>
  );
}

export default App;
