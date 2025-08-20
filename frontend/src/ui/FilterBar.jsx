// import { useState, useRef, useEffect } from 'react';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// const FilterBar = ({ setFilters, maxPrice }) => {
//   const [sortBy, setSortBy] = useState('best-selling');
//   const [priceRange, setPriceRange] = useState({ min: '', max: '' });
//   const [showPrice, setShowPrice] = useState(false);
//   const priceRef = useRef(null); // 👈 to track price dropdown

//   const handleSortChange = (e) => {
//     setSortBy(e.target.value);
//     setFilters({ sortBy: e.target.value, priceRange });
//   };

//   const handlePriceChange = (e) => {
//     const { name, value } = e.target;
//     const newRange = { ...priceRange, [name]: value };
//     setPriceRange(newRange);
//     setFilters({ sortBy, priceRange: newRange });
//   };

//   const handleReset = () => {
//     const resetRange = { min: '', max: '' };
//     setPriceRange(resetRange);
//     setFilters({ sortBy, priceRange: resetRange });
//   };

//   // 🔹 Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (priceRef.current && !priceRef.current.contains(e.target)) {
//         setShowPrice(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className='flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-amber-50 rounded-2xl shadow'>
//       {/* 🔹 Price Filter (collapsible) */}
//       <div className='relative w-full md:w-auto' ref={priceRef}>
//         <button
//           onClick={() => setShowPrice(!showPrice)}
//           className='flex items-center gap-2 px-3 py-2 bg-white border rounded-lg shadow-sm hover:shadow-md transition'
//         >
//           <span className='text-sm font-semibold text-red-900'>Price</span>
//           {showPrice ? (
//             <FaChevronUp className='w-3 h-3 text-red-900' />
//           ) : (
//             <FaChevronDown className='w-3 h-3 text-red-900' />
//           )}
//         </button>

//         {showPrice && (
//           <div className='absolute left-0 mt-2 bg-white border rounded-xl shadow-lg p-4 z-50 w-72'>
//             {/* 🔹 Dynamic max price with Reset */}
//             <div className='flex items-center justify-between mb-3'>
//               <p className='text-sm text-gray-600'>
//                 The highest price is Rs. {maxPrice}
//               </p>
//               <button
//                 onClick={handleReset}
//                 className='text-red-600 text-sm underline'
//               >
//                 Reset
//               </button>
//             </div>

//             <div className='flex items-center gap-2'>
//               <span className='text-sm text-gray-700'>Rs</span>
//               <input
//                 type='number'
//                 name='min'
//                 value={priceRange.min}
//                 onChange={handlePriceChange}
//                 placeholder='From'
//                 className='w-20 px-2 py-1 border rounded-lg'
//               />
//               <span>-</span>
//               <input
//                 type='number'
//                 name='max'
//                 value={priceRange.max}
//                 onChange={handlePriceChange}
//                 placeholder='To'
//                 className='w-20 px-2 py-1 border rounded-lg'
//               />
//             </div>
//           </div>
//         )}
//       </div>

//       {/* 🔹 Sort Dropdown */}
//       <div className='flex items-center gap-2 text-red-900'>
//         <span className='text-sm font-semibold'>Sort by:</span>
//         <select
//           value={sortBy}
//           onChange={handleSortChange}
//           className='px-3 py-2 border rounded-lg bg-white shadow-sm hover:shadow-md transition'
//         >
//           <option value='featured'>Featured</option>
//           <option value='best-selling'>Best selling</option>
//           <option value='az'>Alphabetically, A-Z</option>
//           <option value='za'>Alphabetically, Z-A</option>
//           <option value='low-high'>Price, low to high</option>
//           <option value='high-low'>Price, high to low</option>
//           <option value='old-new'>Date, old to new</option>
//           <option value='new-old'>Date, new to old</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default FilterBar;

import { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FilterBar = ({ setFilters, maxPrice, productCount }) => {
  const [sortBy, setSortBy] = useState('best-selling');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [showPrice, setShowPrice] = useState(false);
  const priceRef = useRef(null);

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

  // 🔹 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (priceRef.current && !priceRef.current.contains(e.target)) {
        setShowPrice(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-amber-50 rounded-2xl shadow'>
      {/* 🔹 Left side: Filter title + Price filter */}
      <div className='flex items-center gap-4' ref={priceRef}>
        <span className='text-sm font-bold text-red-900'>Filter:</span>

        {/* Price Dropdown */}
        <div className='relative'>
          <button
            onClick={() => setShowPrice(!showPrice)}
            className='flex items-center gap-2 px-3 py-2 bg-white border rounded-lg shadow-sm hover:shadow-md transition'
          >
            <span className='text-sm font-semibold text-red-900'>Price</span>
            {showPrice ? (
              <FaChevronUp className='w-3 h-3 text-red-900' />
            ) : (
              <FaChevronDown className='w-3 h-3 text-red-900' />
            )}
          </button>

          {showPrice && (
            <div className='absolute left-0 mt-2 bg-white border rounded-xl shadow-lg p-4 z-50 w-72'>
              {/* 🔹 Dynamic max price with Reset */}
              <div className='flex items-center justify-between mb-3'>
                <p className='text-sm text-gray-600'>
                  The highest price is Rs. {maxPrice}
                </p>
                <button
                  onClick={handleReset}
                  className='text-red-600 text-sm underline'
                >
                  Reset
                </button>
              </div>

              <div className='flex items-center gap-2'>
                <span className='text-sm text-gray-700'>Rs</span>
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
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 🔹 Right side: Sort + Count */}
      <div className='flex items-center gap-4 text-red-900'>
        <div className='flex items-center gap-2'>
          <span className='text-sm font-semibold'>Sort by:</span>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className='px-3 py-2 border rounded-lg bg-white shadow-sm hover:shadow-md transition'
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

        {/* Product count */}
        <span className='text-sm text-gray-600'>
          {productCount} products found
        </span>
      </div>
    </div>
  );
};

export default FilterBar;
