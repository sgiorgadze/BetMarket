import React from 'react';


const FilterByPriceBlock = ({ handlePriceFilterData }) => {
    return (
        <ul>
            <li className="az" onClick={(e) => handlePriceFilterData(e, "az")}><i className="check_icon"> </i>A - Z ანბანით</li>
            <li className="za" onClick={(e) => handlePriceFilterData(e, "za")}><i className="check_icon"> </i>Z - A ანბანით</li>
            <li className="up" onClick={(e) => handlePriceFilterData(e, "up")}><i className="check_icon"> </i>ფასის ზრდადობით</li>
            <li className="down" onClick={(e) => handlePriceFilterData(e, "down")}><i className="check_icon"> </i>ფასის კლებადობით</li>
        </ul>);
}

export default FilterByPriceBlock;