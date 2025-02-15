
import React from 'react';
import SearchBar from '../Searchbar';
import SelectCategory from '../../tools/Categories/SelectCategory';
import GetSearchbar from '../GetSearchbar';

export default function HeaderCat() {
  return (
    <div className=''>
      <div className=" w-full top-0 bg-white">
        <div className="fixed left-1/2 z-50 transform -translate-x-1/2 bg-white">
          <GetSearchbar />
        </div>
        <hr />
      </div>

      <div className="mt-32 bs-container">
        <SelectCategory />
      </div>
    </div>
  );
}
