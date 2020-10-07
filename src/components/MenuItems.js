import React from 'react';
import "./MenuItems.css";
import { Link} from "react-router-dom";
import Jogsheader from './jogsheader';


const MenuItems =(props)=>{


    return   <div className='Items'>
     
          <li>
            <Link to="/jogs" className='JOGS'>JOGS</Link>
          </li>
           <li>
            <Link to="/info" className='INFO1' >INFO</Link>
          </li>
          <li>
            <Link  className='CONTACT-US'>CONTACT US</Link>
          </li> 
          {props.isCheck?  <img onClick={()=>props.setisCheck(false)} src="/filter-active.png"   />:<img onClick={()=>props.setisCheck(true)} src="/filter.png"
     
     class="filter"/> 
}
 
   
  </div>
}
            




export default MenuItems;