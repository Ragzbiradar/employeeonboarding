import './App.css';
import Footer from "./components/footer";
import { BrowserRouter as Router} from 'react-router-dom'; 
import MiniDrawer from './components/MiniDrawer';

function App() {

  return (
    <Router>
    <div className="App">
      <div className="header">
      </div>
      <div className="container">
        <main className="main">
          <MiniDrawer />
        </main>
      </div>
      <div className="footer"><Footer /></div>
    </div>
    </Router>
  );
} 

export default App;
