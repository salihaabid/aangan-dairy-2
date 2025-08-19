import { useState } from 'react';

const FilterBar = ({ setFilters }) => {
  const [sortBy, setSortBy] = useState('best-selling');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setFilters({ sortBy: e.target.value, priceRange });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const newRange = { ...priceRange, [name]: value };
    setPriceRange(newRange);
    setFilters({ sortBy, priceRange: newRange });
  };

  const handleReset = () => {
    const resetRange = { min: '', max: '' };
    setPriceRange(resetRange);
    setFilters({ sortBy, priceRange: resetRange });
  };

  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-4 p-4  rounded-2xl shadow'>
      {/* Price Filter */}
      <div className='flex items-center gap-2 text-red-900'>
        <span className='text-sm font-semibold'>Price:</span>
        <input
          type='number'
          name='min'
          value={priceRange.min}
          onChange={handlePriceChange}
          placeholder='From'
          className='w-20 px-2 py-1 border rounded-lg'
        />
        <span>-</span>
        <input
          type='number'
          name='max'
          value={priceRange.max}
          onChange={handlePriceChange}
          placeholder='To'
          className='w-20 px-2 py-1 border rounded-lg'
        />
        <button
          onClick={handleReset}
          className='ml-2 text-red-600 text-sm underline'
        >
          Reset
        </button>
      </div>

      {/* Sort Dropdown */}
      <div className='flex items-center gap-2 text-red-900'>
        <span className='text-sm font-semibold'>Sort by:</span>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className='px-3 py-1 border rounded-lg'
        >
          <option value='featured'>Featured</option>
          <option value='best-selling'>Best selling</option>
          <option value='az'>Alphabetically, A-Z</option>
          <option value='za'>Alphabetically, Z-A</option>
          <option value='low-high'>Price, low to high</option>
          <option value='high-low'>Price, high to low</option>
          <option value='old-new'>Date, old to new</option>
          <option value='new-old'>Date, new to old</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
