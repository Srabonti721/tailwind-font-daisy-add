import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PriceFeatures = ({features}) => {
    return (
        <div>
            <p className='flex mt-4 border-2 bg-yellow-500 rounded-xl p-2 hover:bg-pink-600 hover:text-cyan-400'> <CircleCheckBig className='mr-2'></CircleCheckBig>{features}</p>
        </div>
    );
};

export default PriceFeatures;