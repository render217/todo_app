import React, { useState } from 'react'
import { All } from './components/All';
import { Active } from './components/Active';
import { Completed } from './components/Completed';


const tabs = ['All', 'Active', 'Completed'];
const TabCard = ({ tab, setSelected, isSelected }) => <p onClick={() => setSelected(tab)} className={`min-w-[100px] flex-1 text-center py-2 text-sm cursor-pointer border-b-4 ${isSelected && 'border-blue-600'} `}>{tab}</p>


const App = () => {
  const [selected, setSelected] = useState('All');
  
  return (
    <div className='container mx-auto max-w-xl my-10'>
      <h1 className='font-Raleway text-4xl text-center font-semibold mb-5'>#todo</h1>
      <div className="container max-w-md mx-auto font-Montserrat">
        <div className='flex max-[300px]:flex-col max-sm:items-center gap-5 border-b-2'>
          {tabs.map((tab, i) => <TabCard tab={tab} key={i} isSelected={tab == selected} setSelected={setSelected} />)}
        </div>
        <div className='my-6'>
          {selected === 'All' && (<All/>)}
          {selected === 'Active' && (<Active/>)}
          {selected === 'Completed' && (<Completed/>)}
        </div>
      </div>
    </div>
  )
}

export default App