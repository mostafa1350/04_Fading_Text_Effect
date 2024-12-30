import React from 'react'
import { Link } from 'react-router-dom'

const Text_flying = () => {
    return (
        <div className='MainFlying'>
            <div className='box'>
                <span className='absolute whitespace-nowrap text-[2.5rem] uppercase px-5 py-[10px] transform-style-3d translate-x-[-50%] translate-y-[-50%] rotate-x-[0deg] translate-z-[100px]'> ifnever.com</span>
                <span className='span2'> ifnever.com</span>
                <span className='span3'> ifnever.com</span>
                <span className='span4'> ifnever.com</span>
                <span className='span5'> ifnever.com</span>
                {/* <span className='[--i:6;]'> ifnever.com</span>
                <span className='[--i:7;]'> ifnever.com</span>
                <span className='[--i:8;]'> ifnever.com</span>
                <span className='[--i:9;]'> ifnever.com</span>
                <span className='[--i:10;]'> ifnever.com</span>
                <span className='[--i:11;]'> ifnever.com</span>
                <span className='[--i:12;]'> ifnever.com</span>
                <span className='[--i:13;]'> ifnever.com</span>
                <span className='[--i:14;]'> ifnever.com</span>
                <span className='[--i:15;]'> ifnever.com</span>
                <span className='[--i:16;]'> ifnever.com</span>                                  */}
            </div>
            <div>
                <span className='mycalc'>
                    content here
                </span>
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