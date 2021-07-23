import React from 'react';
import {Link} from 'react-router-dom'

const Jobs = ({id,name,label,city}) => {
   return (
       <article key={id}>
          <h1>{name}</h1>
          <p>{label}</p>
          <h5>{city}</h5>
          <Link to={`/jobs/${id}`}>View Details</Link>
       </article>
   )
}

export default Jobs;
