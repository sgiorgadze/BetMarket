import React from 'react';
import CustomRangeSlider from "../RangeSlider"
import "./offerBlock.scss"


const OfferBlock = () => {


    return (

        < div className="offer_box" >
            <div className="offer_title for_web">
                <h3>შეთავაზებები</h3>
                <CustomRangeSlider />
            </div>
            <div id="regular" className="card_box">
                <div data-value="1 bonus" className="card_item" style={{ backgroundImage: "url(https://staticdata.lider-bet.com/images/market/12670.png)" }}>
                    <p className="sale-text" data-text="-10%">
                        <span>29 ნოე. 23:59 </span>
                    </p>
                    <div>
                        <p className="card-title1">Diamond Duke 10.00 GEL BONUS </p>
                        <p className="card-desc">QUICKSPIN, Diamond Duke 10.00 GEL BONUS </p>
                        <p className="card-price" data-text="Diamond Duke 10.00 GEL BONUS">
                            <span>900 GEL </span>
                            <span className="on" data-text="-10%">1000.00 GEL </span>
                        </p>
                        <div className="card-btns">
                            <div className="buy">შეძენა</div>
                            <div className="gift">აჩუქე<br /> მეგობარს</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >);
}

export default OfferBlock;