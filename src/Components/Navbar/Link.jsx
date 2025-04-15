import React from 'react';

const Link = ({route}) => {
    return (
 <li className='mr-10  hover:text-blue-500'>
    <a href={route.path}>{route.name}</a>
 </li>
 
    );
};

export default Link;