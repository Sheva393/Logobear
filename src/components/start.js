import React from 'react'
import "./start.css"




const Start = (props) =>{

     let CreateJog =(props)=>{
          props.history.push('/first')
         
     }

return <div className='start'>
<img src="./sad-rounded-square-emoticon.png"
     
     className="sad-rounded-square-emoticon"></img>
     <p className='Nothing-is-there'>
     Nothing is there
     </p>
<button onClick={()=>CreateJog(props)} className='Rectangle-5'><p className='Create-your-jog-firs'>Create your jog first</p></button>


</div>
}

export default Start