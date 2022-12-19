import React from 'react'
import pdf from "./Home Alone.pdf";
import './documentation.css'
export const Openfile = () => {
  return (
    <>
     <iframe src={pdf} className='framedocs' width="100%" height="1920" title="myFrame"/>
    </>
  )
}
