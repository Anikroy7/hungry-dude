import React from 'react';
import dinner1 from '../../src/images/dinner/dinner1.png'
import dinner2 from '../../src/images/dinner/dinner2.png'
import dinner3 from '../../src/images/dinner/dinner3.png'
import dinner4 from '../../src/images/dinner/dinner4.png'
import dinner5 from '../../src/images/dinner/dinner5.png'
import dinner6 from '../../src/images/dinner/dinner6.png'
import DinnerDetails from '../DinnerDetails/DinnerDetails';

const dinners = [
    { id: 1, name: 'lamonu salmon pasta', price: 200, decription: 'this is very soft food', image: dinner1 },
    { id: 2, name: 'rice with meat', price: 300, decription: 'this is very soft food', image: dinner2 },
    { id: 3, name: 'fried rice pasta', price: 400, decription: 'this is very soft food', image: dinner3 },
    { id: 4, name: 'best thai chicken pasta', price: 260, decription: 'this is very soft food', image: dinner4 },
    { id: 5, name: 'chiken with butter', price: 290, decription: 'this is very soft food', image: dinner5 },
    { id: 6, name: 'chiken with butter', price: 290, decription: 'this is very soft food', image: dinner6 },
]

const Dinner = () => {
    return (
        <div className='row mt-5'>
            {dinners.map(foodItem => <DinnerDetails
                key={foodItem.js}
                foodItem={foodItem}
            ></DinnerDetails>)}
        </div>
    );
};

export default Dinner;