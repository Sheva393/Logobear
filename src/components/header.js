import React,{useState} from 'react';
import "./header.css"
import MenuItems from './MenuItems'
import Jogsheader from './jogsheader';


const Header =({history,isCheck,setisCheck})=>{
    return <div className="Rectangle"> 
  <div className="logo">
  <img alt="blabla" src="./logo.png"

     className="logo"/>
   
  </div>
  {
            sessionStorage.getItem('token') && <MenuItems history={history} setisCheck={setisCheck} isCheck={isCheck} />

  }
 
 {/* {
 isCheck&&<Jogsheader/>
 } */}
</div>
}
export default Header;