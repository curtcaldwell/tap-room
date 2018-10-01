import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (

    <div>
      <style jsx>{`
          .header {

          }

            `}</style>
      <div className='Header'>
        <div>
          <h1>Seattle Brewery</h1>
        
        </div>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/newkeg">Beer Request</Link></button>
        <button><Link to="/requests">Requested Beer List</Link></button>
      </div>
    </div>
  );
}

export default Header;
