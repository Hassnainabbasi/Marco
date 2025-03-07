
import React from 'react';
import SearchBar from '../../components/Searchbar';
import SelectCategory from '../../tools/Categories/SelectCategory';
import SearchBarMyads from './SearchbarMyads';

export default function HeaderMyads() {
  return (
    <div className=''>
      <div className="w-full top-0">
        <div className="fixed left-1/2 w-full z-50 top-0 transform -translate-x-1/2 bg-white">
          <SearchBarMyads />
        </div>
      </div>

<div>
<hr className='mt-36'/>
</div>

      <div className="bs-container">
        <SelectCategory />
      </div>
    </div>
  );
}
