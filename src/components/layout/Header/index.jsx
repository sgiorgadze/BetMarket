import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useOutsideClick } from '../../../hooks/useEvents';
import { useWindowSize } from '../../../hooks/useWindowSize';

import { slotsFilterSelector, SlotsByHeaderSelector, allIdSelector, sortedPropSelector } from "../../../core/store/selectors"
import { getDataList, getFillteredSlots, filterHeaderMenuAction, getFillteredSlotsByHeader, getSortedProp } from "../../../core/store/dataSlice"
import { filterSidebarMenu } from "../../../utils/common"

import FilterByPriceBlock from "./FilterByPriceBlock"
import { getMenuList } from "../../../data/MenuList"

import { getList } from "../../../core/store/actions/slots"


import "./header.scss"


const Header = () => {
    const dispatch = useDispatch()
    // const filteredSlots = useSelector(slotsFilterSelector)
    // const fillteredSlotsByheader = useSelector(SlotsByHeaderSelector)
    // const allId = useSelector(allIdSelector)



    const size = useWindowSize();
    const optionsRef = useRef(null);
    const [data, setData] = useState([]);

    const [switchBtn, setSwitchBtn] = useState("GEL")
    const [priceFilterData, setPriceFilterData] = useState("down")
    const [showPriceFilterBlock, setShowPriceFilterBlock] = useState(false)


    const [currency, setCurrency] = useState("GEL")
    //const sortedProp = useSelector(sortedPropSelector)


    useEffect(() => {
        getList({ currency: currency }).then(res => {
            dispatch(getFillteredSlots(res.data.data))
            dispatch(getDataList(res.data.data))
            dispatch(getFillteredSlotsByHeader(res.data.data))
        });

    }, [])

    useEffect(() => {
        setData(getMenuList())
    }, [])




    useOutsideClick(optionsRef, () => {
        setShowPriceFilterBlock(false);
    });

    const checkMenuItem = (item) => {
        const newdata = [...data];
        newdata.map(i => {
            if (i.id === item.id) {
                i.isChecked = !i.isChecked
            }
        })
        setData(newdata);
    }

    const filterSlotsData = (item) => {
        let filterData = [];
        data.map(d => {
            if (d.isChecked) {
                filterData.push(d.id)
            }
        })
        dispatch(filterHeaderMenuAction(filterSidebarMenu(filterData)));
    }


    const handleSwitchBtn = (name) => {
        if (name === "GEL") {
            setSwitchBtn("POINTS")
        } else {
            setSwitchBtn("GEL")
        }

    }
    const handlePriceFilterData = (e, section) => {
        e.stopPropagation();
        if (priceFilterData === section) {
            setPriceFilterData("")
            dispatch(getSortedProp(""));
        } else {
            setPriceFilterData(section)
            dispatch(getSortedProp(section));
        }

    }
    const handleShowPriceFilterBlock = () => {
        setShowPriceFilterBlock(!showPriceFilterBlock)
    }

    return (
        <>
            <ul className="main_section_nav for-mob">
                <li className="mob-menu-btn for-mob">მენიუ</li>
                <li className="section_nav_item mob-search search " data-info="ძებნა">
                    <input id="search1" autoComplete="off" type="search" />
                </li>
            </ul>

            <ul className="main_section_nav">
                {size.width >= 1001 && (data.map(item =>
                    <li id={item.id} key={item.id}
                        onClick={() => {
                            checkMenuItem(item);
                            filterSlotsData(item)
                        }}
                        className={item.isChecked ? "sort_li section_nav_item for_web active " : "sort_li section_nav_item for_web "}
                    >
                        <i className="check_icon"></i>
                        {item.title}
                    </li>)
                )}

                <li data-id={switchBtn} className="section_nav_item switch_btn">
                    <span data-currency="POINTS" className="switch_item">ქულა</span>
                    <span className="switch_img" onClick={() => handleSwitchBtn(switchBtn)}> </span>
                    <span data-currency="GEL" className="switch_item">ლარი</span>
                </li>
                <li id="select-box" className=" section_nav_item custom-select for-mob">
                    <select className="custom-section">
                        <option value="all" selected="">ყველა</option>
                        <option value="29">TOP</option>
                        <option value="30">ფასდაკლება</option>
                        <option value="31">ბონუსი</option>
                        <option value="1">FREESPIN</option>
                    </select>
                </li>
                <li className="section_nav_item search for_web">
                    <input id="search" autoComplete="off" placeholder="ძებნა" type="search"></input>
                </li>
                <li id="by-price"
                    data-info="ფილტრი"
                    data-section={priceFilterData}
                    className={showPriceFilterBlock ? "section_nav_item open" : "section_nav_item"}
                    ref={optionsRef}
                    onClick={() => handleShowPriceFilterBlock()}>
                    <FilterByPriceBlock handlePriceFilterData={handlePriceFilterData} />
                </li>
                <li id="market-info" data-info="ბეთმარკეტის წესები" className="section-nav-item">
                    <a href="/"> </a>
                </li>
            </ul></>);
}

export default Header;