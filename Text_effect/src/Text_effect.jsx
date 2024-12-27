import React from 'react'
import {Link} from 'react-router-dom'
const Text_effect = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-blue-900'>
        <ul className='ul_Text_Effect'>
            <li className='li_Text'>I</li>
            <li className='li_Text'>F</li>
            <li className='li_Text'>N</li>
            <li className='li_Text'>E</li>
            <li className='li_Text'>V</li>
            <li className='li_Text'>E</li>
            <li className='li_Text'>R</li>            
            <li className='li_Text'>.</li>            
            <li className='li_Text'>C</li>            
            <li className='li_Text'>O</li>            
            <li className='li_Text'>M</li>            
        </ul>
        {/* <ul className='ul_Line'>
            <hr className="Horizontal_Line"/>
        </ul> */}
        <ul>
          <li className='text-[20px] mt-[150px] text-slate-200 hover:text-red-300 hover:text-[25px] hover:duration-500 hover:border-[1px] hover:border-yellow-200 hover:p-[10px]'>
            <Link to='/textflying'>
              Text Flying Page
            </Link>
            
          </li>
        </ul>
        
        
    </div>
  )
}

export default Text_effect