import React from 'react';
import { Link } from 'react-router-dom';
import '../css/search.css';

export const Search = props => {
  return (
    <div className='search-wrap'>
      <input className='search-input' type='text' placeholder='search for a restaurant...' />
      <Link to='/results' onClick={() => props.liftCurrentPage('/results')}>
        <button id='search-button' type='button'>Search for food</button>
      </Link>
    </div>
  )
}
