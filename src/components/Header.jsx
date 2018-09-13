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
              <button><Link to="/">Home</Link></button>
              <button><Link to="/newkeg">Add Keg</Link></button>
              </div>
            </div>
          </div>
        );
      }

      export default Header;
