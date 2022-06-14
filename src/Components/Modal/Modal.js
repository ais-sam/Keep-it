import React from 'react'
import ReactDOM  from 'react-dom'
import EditCard from '../EditCard/EditCard'
import BackDrop from './BackDrop'

export default function Modal() {


  return (
    <div>
        <>
            {ReactDOM.createPortal(
                <>
                    <BackDrop/>
                    <EditCard/>
                </>
            ,document.getElementById('modal')
            )}
        
        
        </>
    </div>
  )
}
