
import React from 'react';
import SearchBar from '../Searchbar';
import SelectCategory from '../../tools/Categories/SelectCategory';
import Topheader from './Topheader';

export default function Header() {
  return (
    <div className=''>
      <div className="w-full top-0">
        <div className="fixed left-1/2 w-full z-50 top-0 transform -translate-x-1/2 bg-white">
          <SearchBar />
        </div>
        <hr />
      </div>

      {/* Add margin-top to push down the SelectCategory */}
      <div className="mt-36 bs-container">
        <SelectCategory />
      </div>
    </div>
  );
}
