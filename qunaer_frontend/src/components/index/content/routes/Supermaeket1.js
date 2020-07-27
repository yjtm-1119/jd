import React from 'react';
import { useParams } from 'react-router-dom';
function Supermarket1() {
  console.log(useParams())
  return (
    <div>
      hello react!
    </div>
  )
}
export default Supermarket1;

