import React from 'react';
import searchBackground from '../../../src/images/bannerbackground.png'
import './Search.css'

const Search = () => {
    return (
        <div className='container-fluid search d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${searchBackground})` }}>
            <div>
                <h1 className='text-center mb-3'>Best food wating for your belly</h1>
                <div class="input-group mt-2 ms-3">
                    <input id="input-field" type="text" class="form-control rounded-pill" placeholder="Search food items"
                        aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn px-4 rounded-pill search-btn" type="button"
                        id="button-addon2">Search</button>

                </div>
            </div>
        </div>
    );
};

export default Search;