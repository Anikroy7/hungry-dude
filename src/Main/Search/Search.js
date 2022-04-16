import React from 'react';
import searchBackground from '../../../src/images/bannerbackground.png'
import './Search.css'

const Search = () => {
    return (
        <div className='container-fluid search d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${searchBackground})` }}>
            <div>
                <h3 className='text-center'>Best food wating for your belly</h3>
                <div class="input-group mb-3">
                    <input id="input-field" type="text" class="form-control" placeholder="Search phone"
                        aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-warning" type="button"
                        id="button-addon2">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Search;