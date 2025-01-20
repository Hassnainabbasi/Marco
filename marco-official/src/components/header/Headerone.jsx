
import React from 'react';
import SearchBar from '../Searchbar';
import SelectCategory from '../../tools/Categories/SelectCategory';
import Topheader from './Topheader';

export default function Header() {
  return (
    <div>
      <div className="fixed left-0 w-full top-0 z-50 bg-white">
        {/* Fixed Search Bar */}
        <div className="container mx-auto mt-2">
          <SearchBar />
        </div>
        <hr />
      </div>

      {/* Add margin-top to push down the SelectCategory */}
      <div className="mt-96 md:mt-36">
        <SelectCategory />
      </div>
    </div>
  );
}
