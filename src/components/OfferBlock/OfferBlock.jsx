import React, { useState, useEffect } from 'react';
import CustomRangeSlider from "../RangeSlider"
import { useDispatch, useSelector } from 'react-redux';

import { slotsDataSelector, slotsFilterSelector, sideBarIdSelector, headerIdSelector, allIdSelector, currencySelector, SlotsByHeaderSelector, sortedPropSelector, filterBySliderSelector } from "../../core/store/selectors"
import { getDataList, getCurrency, getFillteredSlots, getFillteredSlotsByHeader } from "../../core/store/dataSlice"
import { getList } from "../../core/store/actions/slots"

import "./offerBlock.scss"

const OfferBlock = () => {
    const dispatch = useDispatch()
    //const [currency, setCurrency] = useState("GEL")

    const data = useSelector(slotsDataSelector)
    const filteredSlots = useSelector(slotsFilterSelector)
    const sideBarFilterId = useSelector(sideBarIdSelector)
    const headerFilterId = useSelector(headerIdSelector)
    const allId = useSelector(allIdSelector)
    const fillteredSlotsByheader = useSelector(SlotsByHeaderSelector)
    const sortedProp = useSelector(sortedPropSelector)
    const filterBySlider = useSelector(filterBySliderSelector)

    const currency = useSelector(currencySelector)

    const arr1 = [0, 1000];
    const arr2 = [0, 100000]


    const filter = (arr, i) => {
        let postArr = [];
        arr.map(slot => slot.tags.map(s => {
            if (s.tag_id === i) {
                postArr.push(slot)

            }
        }))
        return postArr;
    }


    const filterSlotBySlider = (arr) => {
        //console.log(filterBySlider, arr);
    }


    const filterSlotsBySort = (arr) => {
        let sortedrArr = [...arr];

        if (sortedProp === "az") {
            let sortedSlots = sortedrArr.sort((a, b) => (a.name > b.name ? 1 : -1));
            filterSlotBySlider(sortedSlots)
            dispatch(getFillteredSlotsByHeader(sortedSlots))
        }
        if (sortedProp === "za") {
            let sortedSlots = sortedrArr.sort((a, b) => (a.name < b.name ? 1 : -1));
            filterSlotBySlider(sortedSlots)
            dispatch(getFillteredSlotsByHeader(sortedSlots))

        }
        if (sortedProp === "up") {
            let sortedSlots = sortedrArr.sort((a, b) => a.price - b.price);
            filterSlotBySlider(sortedSlots)
            dispatch(getFillteredSlotsByHeader(sortedSlots))

        }
        if (sortedProp === "down") {
            let sortedSlots = sortedrArr.sort((a, b) => b.price - a.price);
            filterSlotBySlider(sortedSlots)
            dispatch(getFillteredSlotsByHeader(sortedSlots))


        }
        if (sortedProp === "") {
            dispatch(getFillteredSlotsByHeader(arr))

        }
    }



    const filterDataById = (headerFilterId, filteredSlotsArr, sideBarFilterId, fillteredSlotsByheader) => {

        if (headerFilterId.length > 0) {
            let newData = filteredSlotsArr
            for (let i of headerFilterId) {
                newData = filter(newData, i)
            }
            //dispatch(getFillteredSlotsByHeader(newData))
            filterSlotsBySort(newData)
        } else {
            const newFilteredData = [];
            for (let i of sideBarFilterId) {
                if (i === 0) {
                    dispatch(getFillteredSlots(data))
                    //return dispatch(getFillteredSlotsByHeader(data))                  
                    return filterSlotsBySort(data);

                }
                data.map(slot => slot.tags.map(s => {
                    if (s.tag_id === i) {
                        newFilteredData.push(slot)
                    }
                }))

            }

            filterSlotsBySort(newFilteredData)
            dispatch(getFillteredSlots(newFilteredData))

        }

    }


    // useEffect(() => {
    //     getList({ currency: currency }).then(res => {
    //         dispatch(getFillteredSlots(res.data.data))
    //         dispatch(getDataList(res.data.data))
    //         dispatch(getFillteredSlotsByHeader(res.data.data))
    //     });

    // }, [])

    useEffect(() => {
        filterDataById(headerFilterId, filteredSlots, sideBarFilterId, fillteredSlotsByheader)
    }, [allId, sortedProp, filterBySlider])

    const monthArray = ["იან", "თებ", "მარტ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექტ", "ოქტ", "ნოე", "დეკ"]

    const getTime = (item) => {
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
                <CustomRangeSlider arr={currency === "GEL" ? arr1 : arr2} maxValue={currency === "GEL" ? 1000 : 100000} currency={currency} />
            </div>
            <div id="regular" className="card_box">
                {fillteredSlotsByheader.map(item =>
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