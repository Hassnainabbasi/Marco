
import React from 'react';
import SearchBar from '../Searchbar';
import SelectCategory from '../../tools/Categories/SelectCategory';
import Topheader from './Topheader';

export default function Header() {
  return (
    <div className=''>
      <div className=" w-full top-0 bg-white">
        {/* Fixed Search Bar */}
        <div className=" mt-2">
          <SearchBar />
        </div>
        <hr />
      </div>

      {/* Add margin-top to push down the SelectCategory */}
      <div className="mt-5 bs-container">
        <SelectCategory />
      </div>
    </div>
  );
}
