import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
           <header className='bg-slate-200 shadow-md'>
<div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
<h1 className=' font-bold text-sm sm:text-xl flex flex-wrap'>
    <span className=' text-slate-500'>Sahand</span>
    <span className=' text-slate-700'>Estate</span>
</h1>
<form className='p-3 bg-slate-100 rounded-lg flex items-center'>
    <input className=' bg-transparent focus:outline-none w-24 sm:w-64' type="text" placeholder='Search.....' />
    <FaSearch className=' text-slate-600' />
</form>
<Link className=' text-slate-600 hover:underline' to='/home'>Home</Link>
<Link className=' text-slate-600 hover:underline' to='/about'>About</Link>
<Link className=' text-slate-600 hover:underline' to='/singin'>Sing In</Link>

</div>
           </header>
        </div>
    );
};

export default NavBar;