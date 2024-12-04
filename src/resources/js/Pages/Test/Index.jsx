import React from 'react'
import Authenticated from "@/Layouts/AuthenticatedLayout";

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
        </div>

      </div>
    </Authenticated>
  )
}

export default Index