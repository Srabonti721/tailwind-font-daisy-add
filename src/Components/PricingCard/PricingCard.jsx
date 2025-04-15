import React from 'react';
import PriceFeatures from './PriceFeatures';

const PricingCard = ({items}) => {
    const {name,isPopular,features,description,price}=items;
    return (
        <div className=' flex flex-col border-2 bg-red-600 text-stone-50 rounded-3xl p-2 hover:bg-purple-700'>
            {/* card head */}
            <h2 className='text-2xl font-bold'>{name}</h2>
            <h3 className='text-xl font-medium'>${price}</h3>
           
            {/* card body */}
            <div className='bg-blue-500 rounded-2xl p-2 hover:bg-emerald-600 flex-1'>
            <p className='text-xl text-black' size={5}>{description}</p>
            {
                features.map((features,index)=><PriceFeatures 
                    key={index}
                    features={features} ></PriceFeatures>)
            }         
            </div>
            <div className=''>
            <p className='text-xl font-medium p-2'> All Data : {isPopular.toString()}</p>
            <button className='btn w-full'>Subscribe</button>
            </div> 
        </div>
   
    );
};

export default PricingCard;