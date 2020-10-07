import React,{useState} from 'react';
import { Switch, withRouter , Router , Link } from "react-router-dom";
import { Route } from "react-router-dom";

import Header from './components/header'
import Login from './components/login'
import Info from './components/info'
import Start from './components/start'
import MenuItems from './components/MenuItems'
import First from './components/First'
import Jogsheader from './components/jogsheader'
import Jogs from './components/jogs'
import Plus from './components/plus'




function App ({history}) {
  const[isCheck,setisCheck]=useState(false)
  
  return (

    <div className="App">
      <Header isCheck={isCheck} setisCheck={setisCheck} />
      
      {/* <Jogsheader/> */}
      {/* <First/>
       */}
        { <Switch>
          <Route
             exact
            path="/"
            component={() => <Login history={history}/>}
            key="1"
          />
            <Route
            path="/start"
            component={() => <Start history={history} />}
            key="2"
          />
          
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/jogs">
            <Jogs isCheck={isCheck} history={history}/>
          </Route>
          <Route
            path="/first"
            component={() => <First history={history}/>}
            key="3"
          />
       
          
        </Switch> 
}
    </div>
   );
}




export default withRouter(App);