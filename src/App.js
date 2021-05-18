import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase/config';
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authuser) => {
      if(authuser){
        //user is logged in....
        dispatch({
          type: 'SET_USER',
          user: authuser
        })
      } else{
        //user is logged out...
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    return () => {
      //any cleanup
      unsubscribe();
    }
    // eslint-disable-next-line
  }, [])

  console.log("user is...", user)

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header/>
            <Home/>
            </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
