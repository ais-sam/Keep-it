import React from 'react'
import ReactDOM  from 'react-dom'
import EditNote from '../EditNote/EditNote'
import BackDrop from './BackDrop'

export default function Modal() {


  return (
    <div>
        <>
            {ReactDOM.createPortal(
                <>
                    <BackDrop/>
                    <EditNote/>
                </>
            ,document.getElementById('modal')
            )}
        
        
        </>
    </div>
  )
}
