import React, { useState, useEffect } from 'react';
import CustomRangeSlider from "../RangeSlider"
import "./offerBlock.scss"
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../../core';
//import { getDataList } from "../dataSlice"
import { slotsDataSelector, slotsFilterSelector } from "../../core/store/selectors"
import { getList } from "../../core/store/actions/slots"
import { getDataList, getFillteredSlots } from "../../core/store/dataSlice"







const OfferBlock = () => {
    const dispatch = useDispatch()
    const [currency, setCurrency] = useState("GEL")

    //const data = useSelector(slotsDataSelector)
    const filteredSlots = useSelector(slotsFilterSelector)


    useEffect(() => {
        getList({ currency: currency }).then(res => {
            dispatch(getFillteredSlots(res.data.data))
            dispatch(getDataList(res.data.data))
        });
    }, [])

    const monthArray = ["იან", "თებ", "მარტ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექტ", "ოქტ", "ნოე", "დეკ"]

    const getTime = (item) => {
        console.log(item);
        let date = new Date(item.discount.end_date).getUTCDate();
        let month = new Date(item.discount.end_date).getMonth();
        let hours = new Date(item.discount.end_date).getHours();
        let minutes = new Date(item.discount.end_date).getMinutes();
        return `${date} ${monthArray[month]}. ${hours}:${minutes}`
    }


    return (

        < div className="offer_box" >
            <div className="offer_title for_web">
                <h3>შეთავაზებები</h3>
                <CustomRangeSlider />
            </div>
            <div id="regular" className="card_box">
                {filteredSlots && filteredSlots.map(item =>
                    <div key={item.id} id={item.id} data-value="1 bonus" className="card_item" style={{ backgroundImage: `url(https://staticdata.lider-bet.com/images/market/${item.id}.png)` }}>
                        <p className="sale-text" data-text={`-${item.discount.percent}%`}>
                            <span>{getTime(item)} </span>
                        </p>
                        <div>
                            <p className="card-title1">{item.name} </p>
                            <p className="card-desc">{item.desc} </p>
                            <p className="card-price" data-text={item.name}>
                                <span>{item.discount.new_price} GEL </span>
                                <span className="on" data-text={`-${item.discount.percent}%`}>{item.price} GEL </span>
                            </p>
                            <div className="card-btns">
                                <div className="buy">შეძენა</div>
                                <div className="gift">აჩუქე<br /> მეგობარს</div>
                            </div>
                        </div>
                    </div>)}

            </div>
        </div >);
}

export default OfferBlock;