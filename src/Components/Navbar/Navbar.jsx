import React from 'react';
import Link from './link';
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
    
    return (

        <nav>
<ul className='flex justify-center'>
    {
        navigationData.map(route=><Link route={route}></Link>)
    }
</ul>



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
