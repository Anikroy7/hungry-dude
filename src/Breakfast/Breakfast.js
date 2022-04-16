import React from 'react';
import './Breakfast.css'
import breakfast1 from '../../src/images/breakfast/breakfast1.png'
import breakfast2 from '../../src/images/breakfast/breakfast2.png'
import breakfast3 from '../../src/images/breakfast/breakfast3.png'
import breakfast4 from '../../src/images/breakfast/breakfast4.png'
import breakfast5 from '../../src/images/breakfast/breakfast5.png'
import breakfast6 from '../../src/images/breakfast/breakfast6.png'
import BreakfastDetails from '../BrekafastDetails/BreakfastDetails';

const breakfast = [
    { id: 1, name: 'Healthy meal plan', description: 'how we dream about our future', image: breakfast1, price: 130 },
    { id: 2, name: 'Bagel and crip chese', description: 'how we dream about our future', image: breakfast2, price: 230 },
    { id: 3, name: 'Break chiken', description: 'how we dream about our future', image: breakfast3, price: 135 },
    { id: 4, name: 'Cringi sandwice', description: 'how we dream about our future', image: breakfast4 },
    { id: 5, name: 'Fried rice ', description: 'how we dream about our future', image: breakfast5, price: 160 },
    { id: 6, name: 'cheeps with milk ', description: 'how we dream about our future', image: breakfast6, price: 230 }
]

const Breakfast = () => {
    return (
        <div className='row mt-5 breakfast-container'>
            {breakfast.map(foodItem => <BreakfastDetails
                foodItem={foodItem}
                key={foodItem.id}
            ></BreakfastDetails>)}
        </div>
    );
};

export default Breakfast;