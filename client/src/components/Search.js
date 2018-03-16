import React from 'react';
import { Link } from 'react-router-dom';

export const Search = props => {
  return (
    <div>
      <input type='text' placeholder='search for a restaurant...' />
      <Link to='/results' onClick={() => props.liftCurrentPage('/results')}>
        <button type='button'>Search for food</button>
      </Link>
    </div>
  )
}
