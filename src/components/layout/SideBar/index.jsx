import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSideBarList } from "../../../data/SideBarList"


import "./sidebar.scss"

import { slotsDataSelector } from "../../../core/store/selectors"
import { useEffect } from 'react';



const Sidebar = () => {

    const [selectedItem, setSelectedItem] = useState("")

    const [sideBarMenu, setSideBarMenu] = useState([])


    useEffect(() => {
        setSideBarMenu(getSideBarList())
    })

    // const [egt, setEgt] = useState(true)
    // const [quickspin, setQuickspin] = useState(true)
    // const [nolimit, setNolimit] = useState(true)
    // const [hacksaw, setHacksaw] = useState(true)
    // const [freebet, setFreebet] = useState(true)
    // const [poker, setPoker] = useState(true)
    // const [jocer, setJocer] = useState(true)
    // const [domino, setDomino] = useState(true)
    // const [bura, setBura] = useState(true)

    const data = useSelector(slotsDataSelector)
    // { return slot.tags.find(item => item.tag_id === id) }


    const handleMenuItem = (item) => {
        if (selectedItem.id === item.id && selectedItem) {
            setSelectedItem("")
        } else {
            setSelectedItem(item)
        }


    }

    let filteredData = []
    const filterSlots = (id) => {
        filteredData = data.map(slot => slot.tags.map(item => {
            if (item.tag_id === 525) {
                console.log(slot);
                filteredData.push(slot)
            }

        }))

    }


    return (
        <section className="section_box sidebar">
            <div className="user_box"></div>
            <ul className="menu">
                {sideBarMenu.map(item =>
                    <li key={item.id} className={item.id === selectedItem.id ? `menu_item ${item.className} active` : `menu_item ${item.className}`}>
                        <div id={item.id} className="bind" onClick={() => handleMenuItem(item)}>{item.title}
                            <i className="sub-arrow"> </i></div>

                        <ul className="sub_menu">
                            {item.subCategoty.map(subItem =>
                                <li key={subItem.id} id={subItem.id} className={subItem.isChecked ? "bind sub_menu_item active" : "bind sub_menu_item"}
                                >
                                    <i className="check-icon"> </i>
                                    {subItem.name}
                                </li>)}
                            {/* <li id="3" className={egt ? "bind sub_menu_item active" : "bind sub_menu_item"}
                                onClick={() => setEgt(!egt)}>
                                <i className="check-icon"> </i>
                                EGT
                            </li>
                            <li id="11" className={quickspin ? "bind sub_menu_item active" : " bind sub_menu_item "}
                                onClick={() => { setQuickspin(!quickspin); filterSlots("525") }}>
                                <i className="check-icon"> </i>
                                QUICKSPIN
                            </li>
                            <li id="302" className={nolimit ? "bind sub_menu_item active" : "bind sub_menu_item"} onClick={() => setNolimit(!nolimit)}>
                                <i className="check-icon"> </i>
                                NOLIMIT CITY
                            </li>
                            <li id="525" className={hacksaw ? "bind sub_menu_item active" : "bind sub_menu_item"} onClick={() => setHacksaw(!hacksaw)}>
                                <i className="check-icon"> </i>
                                HACKSAW
                            </li> */}
                        </ul>
                    </li>)}
                {/* <li className="menu_item all active">
                    <div id="0" className="bind">ყველა
                    </div>

                </li>
                <li className={active && selectedItem === "2" ? "menu_item slot active" : "menu_item slot"}>
                    <div id="2" className="bind" onClick={() => handleMenuItem("2")}>სლოტები
                        <i className="sub-arrow"> </i></div>

                    <ul className="sub_menu">
                        <li id="3" className={egt ? "bind sub_menu_item active" : "bind sub_menu_item"}
                            onClick={() => setEgt(!egt)}>
                            <i className="check-icon"> </i>
                            EGT
                        </li>
                        <li id="11" className={quickspin ? "bind sub_menu_item active" : " bind sub_menu_item "}
                            onClick={() => { setQuickspin(!quickspin); filterSlots("525") }}>
                            <i className="check-icon"> </i>
                            QUICKSPIN
                        </li>
                        <li id="302" className={nolimit ? "bind sub_menu_item active" : "bind sub_menu_item"} onClick={() => setNolimit(!nolimit)}>
                            <i className="check-icon"> </i>
                            NOLIMIT CITY
                        </li>
                        <li id="525" className={hacksaw ? "bind sub_menu_item active" : "bind sub_menu_item"} onClick={() => setHacksaw(!hacksaw)}>
                            <i className="check-icon"> </i>
                            HACKSAW
                        </li>
                    </ul>
                </li>
                <li className={active && selectedItem === "12" ? "menu_item sport active" : "menu_item sport "}>
                    <div id="12" className="bind" onClick={() => handleMenuItem("12")}>სპორტი
                        <i className="sub-arrow"> </i></div>
                    <ul className="sub_menu">
                        <li id="13" className={freebet ? "bind sub_menu_item active" : "bind sub_menu_item "}
                            onClick={() => setFreebet(!freebet)}>
                            <i className="check-icon"> </i>
                            FREEBET
                        </li>

                    </ul>
                </li>
                <li className={active && selectedItem === "14" ? "menu_item spin active" : "menu_item spin"}>
                    <div id="14" className="bind" onClick={() => handleMenuItem("14")}>სპინ თამაშები
                        <i className="sub-arrow"> </i></div>
                    <ul className="sub_menu">
                        <li id="15" className={poker ? "sub_menu_item active" : "sub_menu_item "}
                            onClick={() => setPoker(!poker)}>
                            <i className="check-icon"> </i>
                            სპინ პოკერი
                        </li>
                        <li id="16" className={jocer ? "sub_menu_item active" : "sub_menu_item"}
                            onClick={() => setJocer(!jocer)}>
                            <i className="check-icon"> </i>
                            სპინ ჯოკერი
                        </li>
                        <li id="17" className={domino ? "sub_menu_item active" : "sub_menu_item"}
                            onClick={() => setDomino(!domino)}>
                            <i className="check-icon"> </i>
                            სპინ დომინო
                        </li>
                        <li id="18" className={bura ? "sub_menu_item active" : "sub_menu_item"}
                            onClick={() => setBura(!bura)}>
                            <i className="check-icon"> </i>
                            სპინ ბურა
                        </li>
                    </ul>
                </li>
                <li className="menu_item volt ">
                    <div id="19" className="bind">ვოლტი
                    </div>
                </li> */}
            </ul >


        </section >
    );
}

export default Sidebar;