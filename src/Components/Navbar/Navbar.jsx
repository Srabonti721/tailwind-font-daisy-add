import React, { useState } from 'react';
import Link from './link';
import { Menu, X } from 'lucide-react';
const navigationData = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }
];
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links = navigationData.map(route => <Link route={route}></Link>)

    return (

        <nav className='flex justify-between items-center bg-gray-300 mx-8 hover:bg-blue-50'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    open ?
                     <X className='md:hidden'></X> : 
                     <Menu className='md:hidden' ></Menu>
                }
                <ul className={`md:hidden absolute text-center p-2 duration-1500 text-white
                ${open?'top-8':'-top-64'}
                     bg-red-500 rounded-2xl`}>
                    {
                        links
                    }
                </ul>

                <h1 className=' ml-4 not-last:text-xl font-medium'>My Navbar</h1>
            </span>

            <ul className='md:flex justify-center hidden'>
                {
                    links
                }
            </ul>
            <button className='btn hover:bg-blue-500 bg-amber-500'>Sign In</button>



            {/* <ul className='flex justify-center '>
    {
      navigationData.map(link =><li className='mr-10'>
        <a href={link.path}></a>{link.name}
      </li> )  
    }
  </ul> */}
            {/* <ul className='flex justify-center '>
    <li className='mr-10'><a href="/"></a>Home</li>
    <li className='mr-10'><a href="/about"></a>About</li>
    <li className='mr-10'><a href="/blog"></a>Blog</li>
    <li className='mr-10'><a href="/Services"></a>Services</li>
    <li className='mr-10'><a href="/Contact"></a>Contact</li>
   </ul> */}
        </nav>
    );
};

export default Navbar;
