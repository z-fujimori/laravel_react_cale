import React from 'react'
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ContentCard from './ContentCard';

const ModalMain = (props) => {
  let datas = [
    {
      title: "タイトル1",
      auther: "作者１"
    },
    {
      title: "タイトル2",
      auther: "作者2"      
    },
    {
      title: "タイトル3",
      auther: "作者3"
    },
    {
      title: "タイトル4",
      auther: "作者4"      
    },
    {
      title: "タイトル5",
      auther: "作者5"
    },
    {
      title: "タイトル6",
      auther: "作者6"      
    },
  ];
  datas = Object.values(datas);

  return (
    <Authenticated 
      user={props.auth.user}
      header={
        <h5>モーダルのテスト</h5>}
    >
      
      {datas.map((data)=>(
        <ContentCard data={data} />
      ))}
      

    </Authenticated>
  )
}

export default ModalMain