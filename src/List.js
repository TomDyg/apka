import React from 'react';

 function List(props) {
const {data} = props;
  return (
    <ul>{ data && data.map((element,index)=>(
      <li key={index}>{element.name}</li>
      
      
      
      ))}</ul>
  );
}

export default List;
 
