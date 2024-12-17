import React from 'react'
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/react';

const Index = (props) => {
  return (
    <Authenticated user={props.auth.user} header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        Index
      </h2>
    }>
      <div class="m-5">
        <div class="my-1">
          Test Page
          <div>
            <button onClick={()=>console.log('aa')} className='bg-green-600 p-2 m-5' >ボタン</button>
          </div>
        </div>

        <div className="my-5">
          <a href="/test/modal1" className='bg-green-200 p-5 m-5 rounded-lg'>モーダル1</a>
          <a href="/test/modal2" className='bg-blue-300 p-5 m-5 rounded-lg'>モーダル2</a>
        </div>

      </div>
    </Authenticated>
  )
}

export default Index