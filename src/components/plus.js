import React from 'react'
import "./plus.css"
let PlusJog =(props)=>{
    props.history.push('/first')
   
}

const Plus=(props)=>{
return <div className='plus1'>
<img onClick={()=>PlusJog(props)} src="./add.png"
  
     class="add"></img>
</div>
}

export default Plus