import React from 'react';
import { useParams } from 'react-router-dom';

export default function TestPageParams(props){
  const { id } = useParams();

  console.log("id",id)

  return(
    <>
      <div>
        TestPageParams
      </div>

      <div>
        id:
        <pre>
          {id}
        </pre>
      </div>

    </>
  )
}
