import React from 'react';

const Languages = () => (
  <main>
    <div className='flex flex-col h-full'>
      <h3 className='text-orange-400 text-lg font-bold'>LANGUAGES</h3>
      <div className='grid grid-cols-2'>
        <div>
          <h6>Spanish</h6>
          <p>Native</p>
        </div>
        <div>
          <h6>English</h6>
          <p>Upper-intermedia</p>
        </div>
      </div>
    </div>
  </main>
);

export default Languages;
