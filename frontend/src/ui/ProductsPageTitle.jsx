// SectionHeader.jsx
export default function ProductsPageTitle({ title, description }) {
  return (
    <div className='max-w-5xl mx-20 px-4 text-left'>
      {/* Title */}
      <h2 className='text-6xl  text-[#2a4125]'>{title}</h2>

      {/* Description */}
      {description && (
        <p className='mt-6 text-base text-[#4b5943]/80 font-[550] text-md w-180'>
          {description}
        </p>
      )}
    </div>
  );
}
