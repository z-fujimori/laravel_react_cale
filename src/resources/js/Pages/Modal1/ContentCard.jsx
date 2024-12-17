import React, { useState } from 'react'
import ModalWindow from './ModalWindow';

const ContentCard = (props) => {
  const[modalState, setModalState] = useState(false);
  
  const openModal = () => {
    setModalState(true);
  }
  
  return (
    <>
      <button onClick={openModal}>
        <div className='m-5 p-3 bg-green-200'>
          <p>タイトル: {props.data.title}</p>
          <p>作者: {props.data.auther}</p>
        </div>
      </button>
      <ModalWindow show={modalState} setShow={setModalState} children={props.data} />
    </>
  )
}

export default ContentCard