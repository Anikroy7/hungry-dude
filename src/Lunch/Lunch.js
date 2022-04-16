import React from 'react';
import Lunch1 from '../../src/images/lunch/lunch1.png'
import Lunch2 from '../../src/images/lunch/lunch2.png'
import Lunch3 from '../../src/images/lunch/lunch3.png'
import Lunch4 from '../../src/images/lunch/lunch4.png'
import Lunch5 from '../../src/images/lunch/lunch5.png'
import Lunch6 from '../../src/images/lunch/lunch6.png'
import LunchDetails from '../LunchDetails/LunchDetails';


const lunches = [
    { id: 1, name: 'rice with shoop', price: 300, image: Lunch1 },
    { id: 2, name: 'chicken chili cop', price: 600, image: Lunch2 },
    { id: 3, name: 'rice capciccu shoop', price: 500, image: Lunch3 },
    { id: 4, name: 'spice with fish', price: 200, image: Lunch4 },
    { id: 5, name: 'rice with meat', price: 500, image: Lunch5 },
    { id: 6, name: 'milk with goat', price: 310, image: Lunch6 },
]

const Lunch = () => {
    return (
        <div className='row mt-5'>
            {lunches.map(foodItem => <LunchDetails
                key={foodItem.id}
                foodItem={foodItem}
            ></LunchDetails>)}
        </div>
    );
};

export default Lunch;