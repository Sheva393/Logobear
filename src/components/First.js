import React,{useState} from 'react';
import "./First.css"
import axios from 'axios'

const First = (props) => {
const[distance,setDistanse]=useState('')
const[time,setTime]=useState('')
const[date,setDate]=useState('')

let CancelJog = (props) =>
{
    props.history.push('/jogs')
}

    let CreateItem = (event) => {
       
        props.history.push('/jogs')
        
        event.preventDefault()
        const jogs={
        distance,time,date
        };
        console.log(jogs)
        console.log(sessionStorage.getItem('token'))

    axios.post('https://jogtracker.herokuapp.com/api/v1/data/jog', {
        "id": 0,
        "user_id":  `${sessionStorage.getItem('token')}`,
        
        "distance": distance,
        "time": time,
        "date": date
    },
  { headers: {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${sessionStorage.getItem('token')}`
            }
        }
          
    )
    .then(function (res) {
      console.log(res);
   
     props.history.push('/start')
    })
    .catch(function (error) {
      console.log(error);
    });
    }

return <div className='First'>
<div onClick={()=>CancelJog(props)} className='cancel'><img alt='123' src="./cancel.png"
     ></img></div>
   

    <form className='form' onSubmit={(event)=>CreateItem(event)} >
      <div className='qwerty2'>
      <div className='qwerty'>
       <label className='label'>Distanse</label>
       <label className='label'>Time</label>
       <label className='label'>Date</label> 
       </div><div className='qwerty1'>
       <input onChange={(e)=>setDistanse(e.target.value)} value={distance} name='distance' className='input'/>
       <input  onChange={(e)=>setTime(e.target.value)} value={time} name='time' className='input'/>
       <input onChange={(e)=>setDate(e.target.value)} value={date} name='date' className='input'/></div>  </div>
       <button className="saveb" type='submit'><p className='save'>Save</p></button>
    </form>
   

    

</div>
}
export default First;