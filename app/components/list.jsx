'use client'

export default function List({ onItemClick }) {

  return (
    <div className='documentation-section-container'>
      <h1 className='text-xl pt-8 pb-2 ml-4'><span className="">PoliAPI Docs</span></h1>
      <ul>
        <li key={0} className='section-title' onClick={() => onItemClick(0)}>Overview</li>
        <li key={1} className='section-title' onClick={() => onItemClick(1)}>Host</li>
        <li key={2} className='section-title' onClick={() => onItemClick(2)}>Authentication</li>
        <li key={2} className='section-title' onClick={() => onItemClick(2)}>Error Handling</li>
        <li key={3} className='section-title' onClick={() => onItemClick(3)}>GET Trades</li>
        <li key={4} className='section-sub' onClick={() => onItemClick(4)}>By Politician</li>
        <li key={5} className='section-sub' onClick={() => onItemClick(5)}>By Published Date</li>
        <li key={6} className='section-sub' onClick={() => onItemClick(6)}>By Traded Date</li>
        <li key={8} className='section-sub' onClick={() => onItemClick(8)}>By Trade Type</li>
        <li key={9} className='section-sub' onClick={() => onItemClick(9)}>By Trade Size</li>
        <li key={10} className='section-sub' onClick={() => onItemClick(10)}>By Trade Issuer</li>
        <li key={11} className='section-sub' onClick={() => onItemClick(11)}>By Price</li>
        <li key={12} className='section-title' onClick={() => onItemClick(12)}>Rate Limits</li>
        <li key={13} className='section-title' onClick={() => onItemClick(13)}>Contact Information</li>
        <li key={14} className='section-title' onClick={() => onItemClick(14)}>Versioning</li>
      </ul>
    </div>
  );
};