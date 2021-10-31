import React, { useState, useRef } from 'react';
import FilterByPriceBlock from "./FilterByPriceBlock"
import { useOutsideClick } from '../../../hooks/useEvents';
import { useWindowSize } from '../../../hooks/useWindowSize';


import { getMenuList } from "../../../data/MenuList"

import "./header.scss"

const Header = () => {
    const size = useWindowSize();
    const optionsRef = useRef(null);
    const [data, setData] = useState([]);
    // const [top, setTop] = useState(false);
    // const [sale, setSale] = useState(false);
    // const [bonus, setBonus] = useState(false);
    // const [freespin, setFreespin] = useState(false);
    const [switchBtn, setSwitchBtn] = useState("GEL")
    const [priceFilterData, setPriceFilterData] = useState("")
    const [showPriceFilterBlock, setShowPriceFilterBlock] = useState(false)

    useState(() => {
        setData(getMenuList())
    })


    useOutsideClick(optionsRef, () => {
        setShowPriceFilterBlock(false);
    });

    const checkMenuItem = (item) => {
        const newdata = [...data];
        const index = data.indexOf(item);
        newdata[index] = { ...data[index] };
        newdata[index].isChecked = !newdata[index].isChecked;
        setData(newdata)

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
        } else {
            setPriceFilterData(section)

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
                {/* <li id="29" className={top ? "sort_li section_nav_item for_web active " : "sort_li section_nav_item for_web "}
                    onClick={() => setTop(!top)}>
                    <i className="check_icon"></i>
                    TOP
                </li>
                <li id="30" className={sale ? "sort_li section_nav_item for_web active " : "sort_li section_nav_item for_web "}
                    onClick={() => setSale(!sale)}>
                    <i className="check_icon"></i>
                    ფასდაკლება
                </li>
                <li id="31" className={bonus ? "sort_li section_nav_item for_web active " : "sort_li section_nav_item for_web "}
                    onClick={() => setBonus(!bonus)}>
                    <i className="check_icon"></i>
                    ბონუსი
                </li>
                <li id="1" className={freespin ? "sort_li section_nav_item for_web active " : "sort_li section_nav_item for_web "}
                    onClick={() => setFreespin(!freespin)}>
                    <i className="check_icon"></i>
                    FREESPIN
                </li> */}
                {size.width >= 1001 && (data.map(item =>
                    <li id={item.id} key={item.id} className={item.isChecked ? "sort_li section_nav_item for_web active " : "sort_li section_nav_item for_web "}
                        onClick={() => checkMenuItem(item)}
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