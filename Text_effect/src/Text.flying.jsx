import React from 'react'
import { Link } from 'react-router-dom'

const Text_flying = () => {
    return (
        <div className='MainFlying'>
            <div className='box'>
                <span>ifnever.com</span>
                
            </div>
            <ul>
                <li className='text-[20px] p-[10px] mt-[150px] text-slate-700 border-[1px] rounded-[4px] border-blue-600 shadow-2xl shadow-slate-400 hover:text-blue-800 hover:text-[25px] hover:duration-500 hover:border-[1px] hover:border-red-500 hover:p-[10px]'>
                    <Link to='/'>
                        Text Effect Page
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Text_flying