import React, { useState } from 'react';

const ContentCard = ({data,setModalState}) => {
  
  const openModal = (id) => {
    console.log(id);
    setModalState(id);
  }

  return (
    <button onClick={()=>openModal(data.id)}>
      <div className='m-5 p-3 bg-blue-200'>
        <p>タイトル: {data.title}</p>
        <p>作者: {data.auther}</p>
      </div>
    </button>
  )
}

export default ContentCard