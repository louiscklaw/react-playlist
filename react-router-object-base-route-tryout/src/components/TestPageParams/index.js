import React from 'react';
import { useParams } from 'react-router-dom';

export default function TestPageParams(props){
  const { id } = useParams();

  console.log("id",id)

  return(
    <>
      page params 123321
    </>
  )
}
