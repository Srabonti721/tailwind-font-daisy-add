import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingOption = ({ pricingPromice }) => {
    const pricingData = use(pricingPromice);
    console.log(pricingData);

    return (
        
        <div className='m-5'>
            <h1 className='text-2xl font-bold text-center my-4 hover:text-pink-400'>Select your MemberShip</h1>
         <div className='grid grid-cols-3 gap-2'>
            {
                pricingData.map(items => <PricingCard key={items.id} items={items}></PricingCard> )
            }
         </div>
        </div>
    );
};

export default PricingOption;