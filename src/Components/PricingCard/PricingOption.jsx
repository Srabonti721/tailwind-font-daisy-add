import React, { use } from 'react';
import PricingCard from './PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOption = ({ pricingPromice }) => {
    const pricingData = use(pricingPromice);
    // console.log(pricingData);

    return (

        <div className='m-5'>
            <h1 className='text-2xl font-bold text-center my-4 hover:text-pink-400'>Select your MemberShip</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                {/* {
                pricingData.map(items => <PricingCard key={items.id} items={items}></PricingCard> )
            } */}
                {
                    pricingData.map((pricing, index) =>
                        <DaisyPricingCard
                            key={index}
                            pricing={pricing}
                        ></DaisyPricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOption;