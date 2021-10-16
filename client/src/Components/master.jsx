import React from 'react'
import { useParams } from 'react-router-dom';
//Components
// import Delivery from './Delivery';

export const Master = () => {
   const {type} = useParams();

   return <>{type}
   {/* {type === "delivery" && <Delivery />} */}
   </>;
};
export default Master;