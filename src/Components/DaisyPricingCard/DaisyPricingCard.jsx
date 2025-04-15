import React from 'react';

const DaisyPricingCard = ({pricing}) => {
    const {name,id,price,isPopular,features,description}=pricing;
    return (
        <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
         { isPopular &&
             <span className="badge badge-xs badge-warning">most Popular</span>
         }
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{name}</h2>
            <span className="text-xl">${price}/mo</span>        
          </div>
          <p>{description}</p>
          <ul className=" flex flex-col gap-2 text-xs">
     {
        features.map(item=><li key={id}>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>{item}</span>
          </li>)
     }
          </ul>
          <div className="mt-6">
            <button className="btn btn-primary btn-block">Subscribe</button>
          </div>
        </div>
      </div>
    );
};

export default DaisyPricingCard;