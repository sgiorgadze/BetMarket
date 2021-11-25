import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useOutsideClick } from '../../../hooks/useEvents';
import { useWindowSize } from '../../../hooks/useWindowSize';

import { currencySelector } from "../../../core/store/selectors"
import { getDataList, getFillteredSlots, filterHeaderMenuAction, getCurrency, getFillteredSlotsByHeader, getSortedProp } from "../../../core/store/dataSlice"
import { filterSidebarMenu } from "../../../utils/common"

import FilterByPriceBlock from "./FilterByPriceBlock"
import { getMenuList } from "../../../data/MenuList"

import { getList } from "../../../core/store/actions/slots"
import Sidebar from '../SideBar';


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

    const [showSideBar, setShowSideBar] = useState(false)
    const [selectValue, setSelectValue] = useState("all")


    const currency = useSelector(currencySelector)

    useEffect(() => {
        getList({ currency: currency }).then(res => {
            let sortedData = res.data.data.sort((a, b) => b.price - a.price);
            dispatch(getFillteredSlots(sortedData))
            dispatch(getDataList(res.data.data))
            dispatch(getFillteredSlotsByHeader(res.data.data))
        });

    }, [currency])

    useEffect(() => {
        setData(getMenuList())
    }, [])




    useOutsideClick(optionsRef, () => {
        console.log("outs");
        setShowPriceFilterBlock(false);
        //setShowSideBar(false)
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

    const filterSlotsData = (id) => {
        let filterData = [];

        if (id) {
            if (id.target.value === "all") {
                return dispatch(filterHeaderMenuAction(filterSidebarMenu(filterData)));
            }
            filterData.push(Number(id.target.value))
        } else {
            data.map(d => {
                if (d.isChecked) {
                    filterData.push(d.id)
                }
            })
        }

        dispatch(filterHeaderMenuAction(filterSidebarMenu(filterData)));
    }

    const handleSwitchBtn = (name) => {
        if (name === "GEL") {
            dispatch(getCurrency("POINTS"))
        } else {
            dispatch(getCurrency("GEL"))
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

    const handleSelect = (e) => {
        setSelectValue(e.target.value)
    }

    return (
        <>
            <ul className="main_section_nav for-mob">
                <li className="mob-menu-btn for-mob" onClick={() => setShowSideBar(true)}>მენიუ</li>
                <li className="section_nav_item mob-search search " data-info="ძებნა">
                    <input id="search1" autoComplete="off" type="search" />
                </li>
            </ul>
            {size.width <= 1001 && <div className={showSideBar ? "overlay_wrapper show" : "overlay_wrapper"}>

                <Sidebar />
                <div className="overlay"></div>
            </div>}


            <ul className="main_section_nav">
                {size.width >= 1001 && (data.map(item =>
                    <li id={item.id} key={item.id}
                        onClick={() => {
                            checkMenuItem(item);
                            filterSlotsData()
                        }}
                        className={item.isChecked ? "sort_li section_nav_item for_web active " : "sort_li section_nav_item for_web "}
                    >
                        <i className="check_icon"></i>
                        {item.title}
                    </li>)
                )}

                <li data-id={currency} className="section_nav_item switch_btn">
                    <span data-currency="POINTS" className="switch_item">ქულა</span>
                    <span className="switch_img" onClick={() => handleSwitchBtn(currency)}> </span>
                    <span data-currency="GEL" className="switch_item">ლარი</span>
                </li>
                <li id="select-box" className=" section_nav_item custom-select for-mob">
                    <select className="custom-section" onChange={(e) => (handleSelect(e), filterSlotsData(e))} value={selectValue}>
                        <option value="all" >ყველა</option>
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
                    <FilterByPriceBlock handlePriceFilterData={handlePriceFilterData} currency={switchBtn} />
                </li>
                <li id="market-info" data-info="ბეთმარკეტის წესები" className="section-nav-item">
                    <a href="/"> </a>
                </li>
            </ul></>);
}

export default Header;