import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Servi from '../Servi/Servi';

const Service = () => {
  const {id} = useParams()

  const [service, setService] = useState([]);
  const [single, setSingle] = useState([]);

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/whoafridi/Play-with-JavaScript/master/services.json")
        .then(res => res.json())
        .then(data => setService(data));
    },[id])
 

    useEffect(()=>{
      const values = service.filter((s) => s.id == id)
      setSingle(values)
    },[service])

  return (
    <div className="container">
    
    {
      single.map(s => <Servi key={s.id} s={s}></Servi>)
    }
       
    </div>
  )
}

export default Service
