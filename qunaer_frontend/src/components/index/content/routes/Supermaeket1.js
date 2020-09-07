import React from 'react';
import { renderRoutes } from 'react-router-config'
// import { useParams } from 'react-router-dom';
function Supermarket1(props) {
  // console.log(useParams())
  return (
    <div>
      hello react!
      {renderRoutes(props.route.routes)}
    </div>
  )
}
export default Supermarket1;

