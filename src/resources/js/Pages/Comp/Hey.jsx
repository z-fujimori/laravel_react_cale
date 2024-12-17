import React from 'react'
import axios from 'axios';

const Hey = () => {

  async function onClickHey(name){
    await axios.post('/test/hey', {
        name: name
      })
      .then(res => {console.log(res.data)})
      .catch(err => {console.error(err)});
  }

  return (
    <>
      <div className='p-5'>
        <button onClick={()=>onClickHey('Takeshi')} className='bg-gray-500 p-5' > Hey!!! </button>
      </div>
    </>
  )
}

export default Hey