import React from 'react'

function ModalWindow({ setShow, children }) {
  const closeModal = () => {
    setShow(null);
  };

  return (
    <div id="overlay" onClick={closeModal} className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50'>
      <div id="content" onClick={(e) => e.stopPropagation()} className='bg-white rounded-lg shadow-lg p-6 max-w-sm w-full'>
        <p>
          題名: {children.title}
        </p>
        <button className='m-5 p-3 bg-slate-300 hover:bg-slate-500 rounded-md'>logボタン？</button>
        <button className='m-5 p-3 bg-slate-300 hover:bg-slate-500 rounded-md' onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default ModalWindow