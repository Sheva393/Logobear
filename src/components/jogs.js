import React,{useEffect,useState} from 'react';
import "./jogs.css"
import axios from 'axios'
import Plus from './plus';
import Jogsheader from './jogsheader';
import moment from 'moment'

const Jogs =(props)=>{
    const[alljogs,setAlljogs]=useState([])
    
const[dateFrom,setDateFrom]=useState('')
const[dateTo,setDateTo]=useState('')

    let getjogs=()=>{
        axios.get('https://jogtracker.herokuapp.com/api/v1/data/sync',
        { headers: {
            'Content-Type':'application/json',
            'Authorization':`Bearer ${sessionStorage.getItem('token')}`
        }
    })
        .then(function (res) {
          // handle success
          
          const {data} = res;
          const {response} = data;
          const {jogs} =  response;
          setAlljogs(jogs)
          

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

    }

    useEffect(()=>{
    getjogs();
    },0)

  

    var myDateTo = dateTo;
    myDateTo = myDateTo.split("-");
    var newDateTo = new Date( myDateTo[0], myDateTo[1]-1 , myDateTo[2]); 

    var myDateFrom = dateFrom;
    myDateFrom = myDateFrom.split("-");
    var newDateFrom = new Date( myDateFrom[0], myDateFrom[1] - 1, myDateFrom[2]);

    let jogs = !props.isCheck ? alljogs.map((item)=><div className='jogsitem'>
        <div className='jogsimg'>    <img src="./icon.png"
     class="icon1"/></div><div className='textjog'>
                    <p>
                    {moment(item.date*1000).format('DD.MM.YYYY')}
                    
                    </p>
                    <p>
                       Speed: {item.distance/item.time}
                    </p>
                    <p>
                       Distance: {item.distance}
                    </p>
                    <p>
                       Time: {item.time}
                    </p></div>
 

                              </div>):
                              alljogs
                              .filter(item=>item.date*1000<=newDateTo.getTime() && item.date*1000>newDateFrom.getTime())
                              .map((item)=><div className="jogsitem"> 
                            <div className='jogsimg' ><img src="./icon.png"
                        class="icon1"/></div> <div  className='textjog'>
                                       <p>
                                       {moment(item.date*1000).format('DD.MM.YYYY')}
                                       </p>
                                       <p>
                                          Speed: {item.distance/item.time}
                                       </p>
                                       <p>
                                          Distance: {item.distance}
                                       </p>
                                       <p>
                                          Time: {item.time}
                                       </p> </div> </div>
                                                 )

return<div className='jogs'>
    {
        props.isCheck && 
 <Jogsheader dateFrom={dateFrom} dateTo={dateTo} setDateFrom={setDateFrom} setDateTo={setDateTo} />

    }
    {jogs} 
  <div className='plusbutton'> <Plus history={props.history}/></div> 

</div>
}

export default Jogs;