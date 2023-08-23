import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams();
  return (
    <div>
      {params.productID}
      <p><Link to=".." relative='path'>Back</Link></p> 
    </div>
  )
}

export default ProductDetail
