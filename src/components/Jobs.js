import React from 'react';
import {Link} from 'react-router-dom'
import { useJobContext } from '../context';

const Jobs = ({id,name,label,city}) => {
   const {addClass} = useJobContext()
   return (
       <article key={id} className={ashish ? 'active' :  null}>
          <h1>{name}</h1>
          <p>{label}</p>
          <h5>{city}</h5>
          <Link to={`/jobs/${id}`}>View Details</Link>
          <button onClick={addClass}></button>
       </article>
   )
}

export default Jobs;
