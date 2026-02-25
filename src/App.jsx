import axios from 'axios'
import { useEffect, useState } from 'react'

import Card from './components/Card'


function App() {

const [userdata, setuserData] = useState([])
const [index, setIndex] = useState(1)

const getdata=async()=>{

const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
  setuserData(response.data) 
  // console.log(response.data)
}

useEffect(function(){
getdata()
},[index])

let printUserData=<h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 font-semibold'>Loading....</h3>
if(userdata.length>0){
  printUserData=userdata.map(function(elem){
    return   <div key={elem.id}>
      <Card elem={elem}/>
    </div>
  })
}
  return (
    <>
  <div className="bg-black h-screen overflow-auto text-white" >
  <h1 className=' fixed b-g bg-red-500'>{index}</h1>
  
   <div className='flex h-{82%} flex-wrap gap-4 p-2'>
    {printUserData}
  </div>
  <div className='flex justify-center gap-6 items-center p-4'>
    <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold ' onClick={()=>{
      if(index>1){
        setuserData([])
        setIndex(index-1)
      }
    }}>
      Prev</button>
      <h4>Page{index}</h4>
    <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold ' onClick={()=>{
      setuserData([])
      setIndex(index+1)
    }}>Next

    </button>
  </div>
  </div>
 
    </>
  )
}

export default App
