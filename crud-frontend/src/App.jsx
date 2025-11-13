import { useState } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import NavBar from './components/NavBar'
import TableList from './components/Tablelist'

function App() {
  const [isOpen, setIsOpen]= useState(false);
  const [modalMode, setModalMode]= useState('add');

  const handleOpen= (mode)=>{
    setModalMode(mode);
    setIsOpen(true);
  }

  const handleSubmit=()=>{
    if (modalMode==='add'){
      console.log('modal mode add')
    }else{
      console.log('modal mode edit')
    }
    setIsOpen(false);
  }

  return (
    <>
      <NavBar onOpen={()=>handleOpen('add')}/>
      <TableList handleOpen={handleOpen}/>
      <ModalForm 
      isOpen={isOpen} 
      onClose={()=>setIsOpen(false)}
      mode={modalMode}
      onSubmit={handleSubmit}
      />
      
    </>
  )
}

export default App
