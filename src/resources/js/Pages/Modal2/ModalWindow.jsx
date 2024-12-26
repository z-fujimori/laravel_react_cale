import React from 'react'

function ModalWindow({ setShow, children, setDatas }) {
  const closeModal = () => {
    setShow(null);
  };

  let change_datas = [
    {
      id: 1,
      title: "title1",
      auther: "作者１"
    },
    {
      id: 2,
      title: "title2",
      auther: "作者2"      
    },
    {
      id: 3,
      title: "title3",
      auther: "作者3"
    },
    {
      id: 4,
      title: "title4",
      auther: "作者4"      
    },
    {
      id: 5,
      title: "title5",
      auther: "作者5"
    },
    {
      id: 6,
      title: "title6",
      auther: "作者6"      
    },
  ];

  function change_data() {
    console.log("った");
    this.props.setDatas(change_datas);
  }

  return (
    <div id="overlay" onClick={closeModal} className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50'>
      <div id="content" onClick={(e) => e.stopPropagation()} className='bg-white rounded-lg shadow-lg p-6 max-w-sm w-full'>
        <p>
          題名: {children.title}
        </p>
        <button className='m-5 p-3 bg-slate-300 hover:bg-slate-500 rounded-md'  onClick={change_data}>logボタン？</button>
        <button className='m-5 p-3 bg-slate-300 hover:bg-slate-500 rounded-md' onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default ModalWindow