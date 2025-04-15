import React from 'react';
import PriceFeatures from './PriceFeatures';

const PricingCard = ({items}) => {
    const {name,isPopular,features,description,price}=items;
    return (
        <div className='border-2 bg-red-600 text-stone-50 rounded-3xl p-2 hover:bg-purple-700'>
            {/* card head */}
            <h2 className='text-2xl font-bold'>{name}</h2>
            <h3 className='text-xl font-medium'>${price}</h3>
           
            {/* card body */}
            <div className='bg-blue-500 rounded-2xl p-2 hover:bg-emerald-600'>
            <p className='text-xl text-black' size={5}>{description}</p>
            {
                features.map((features,index)=><PriceFeatures 
                    key={index}
                    features={features} ></PriceFeatures>)
            }         
            </div>
            <div>
            <p className='text-xl font-medium p-2'> All Data : {isPopular.toString()}</p>
            </div> 
        </div>
   
    );
};

export default PricingCard;