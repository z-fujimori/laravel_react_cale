import React, { useState } from 'react'
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ContentCard from './ContentCard';
import ModalWindow from './ModalWindow';

const ModalMain = (props) => {
  const [modalState, setModalState] = useState(null)

  let datas = [
    {
      id: 1,
      title: "タイトル1",
      auther: "作者１"
    },
    {
      id: 2,
      title: "タイトル2",
      auther: "作者2"      
    },
    {
      id: 3,
      title: "タイトル3",
      auther: "作者3"
    },
    {
      id: 4,
      title: "タイトル4",
      auther: "作者4"      
    },
    {
      id: 5,
      title: "タイトル5",
      auther: "作者5"
    },
    {
      id: 6,
      title: "タイトル6",
      auther: "作者6"      
    },
  ];
  datas = Object.values(datas);

  console.log(datas[modalState]);

  return (
    <Authenticated 
      user={props.auth.user}
      header={
        <h5>モーダルのテスト</h5>}
    >
      
      {datas.map((data)=>(
        <ContentCard data={data} setModalState={setModalState} />
      ))}
      {modalState!==null ? <ModalWindow setShow={setModalState} children={datas[modalState]} /> : <></>}

    </Authenticated>
  )
}

export default ModalMain