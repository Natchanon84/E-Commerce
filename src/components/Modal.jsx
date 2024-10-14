import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-96">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-rose-500 hover:text-rose-700"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold">E-Commerce (DEMO)</h2>
        <p className="my-4 text-gray-700 indent-8 leading-7">
          An e-commerce website built with <strong>React</strong> utilizing the <strong>DummyJSON API</strong> to showcase a range of products including furniture, clothing, and smartphones. The site features a user-friendly interface, with seamless browsing and product detail pages
        </p>
        <hr />
        <p className='mt-4'>
          •	Click to view product details.
        </p>
      </div>
    </div>

  );
};

export default Modal;
