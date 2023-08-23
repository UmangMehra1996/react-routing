import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('products')
    }

  return (
    <div>
      my home
      <p>Go to <Link to="products">products page</Link></p> 
      <button onClick={navigateHandler}>Navigate</button>
    </div>
  )
}

export default Home

//here the path provided in Link and Navlink is relative path we dont need to add "/" infront of them as they are relative
// they will be added with "/" with the prev path.
//in absolute path like in app.js file we need to add /
