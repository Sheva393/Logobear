import React,{useState} from 'react';
import "./jogsheader.css"


const Jogsheader =(props)=>{


return<div className='jogsheader'>
<label className='label11'>Date From<input onChange={(e)=>props.setDateFrom(e.target.value)} value={props.dateFrom} type='date' className='input11'/></label>
<label className='label11'>Date to<input onChange={(e)=>props.setDateTo(e.target.value)} value={props.dateTo} type='date' className='input11'/></label>
</div>
}

export default Jogsheader;