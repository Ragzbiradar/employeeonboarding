import React, {Component} from 'react'
import './App.css';
import Footer from "./components/footer";
import { BrowserRouter as Router} from 'react-router-dom'; 
import MiniDrawer from './components/MiniDrawer';
import UserDrawer from './components/UserDrawer'
import Login from './Pages/Login'
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {user:localStorage.getItem('role')};
  }

  render() {
    let user = this.state.user;
    
    let Drawer;
    if(!user)
    {
      Drawer=<Login />
      user=this.state.user
      console.log(user)
     if(user)
     {
      if (user==0) {
        Drawer = <UserDrawer />
      } else {
        Drawer = <MiniDrawer />
      }
     }
    }else{
      console.log(user)
      if (user==0) {
        Drawer = <UserDrawer />
      } else {
        Drawer = <MiniDrawer />
      }
    }
  return (
    <Router>
    <div className="App">
      <div className="header">
      </div>
      <div className="container">
        <main className="main">
          {Drawer}
        </main>
      </div>
      <div className="footer"><Footer /></div>
    </div>
    </Router>
  );
  }
} 
